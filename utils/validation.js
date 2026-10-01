const ETHIOPIAN_PHONE_PATTERN = /^(?:\+251|0)?9\d{8}$/;

/** Remove control characters and markup delimiters from user-provided text. */
export function sanitizeText(value, maxLength = 500) {
  return String(value ?? "")
    .replace(/[\u0000-\u001F\u007F<>]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, maxLength);
}

/** Check that a phone number matches an Ethiopian mobile number format. */
export function isValidEthiopianPhone(phone) {
  return ETHIOPIAN_PHONE_PATTERN.test(String(phone ?? "").trim());
}

/** Validate and sanitize the untrusted order payload sent to notifications. */
export function validateOrder(payload) {
  if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
    return null;
  }

  const customer = payload.customer;
  if (!customer || typeof customer !== "object" || Array.isArray(customer)) {
    return null;
  }

  const name = sanitizeText(customer.name, 100);
  const phone = String(customer.phone ?? "").trim();
  const address = sanitizeText(customer.address, 250);
  const paymentMethod = sanitizeText(customer.paymentMethod, 40);

  if (
    !name ||
    !address ||
    !paymentMethod ||
    !isValidEthiopianPhone(phone) ||
    !Array.isArray(payload.items) ||
    payload.items.length < 1 ||
    payload.items.length > 50
  ) {
    return null;
  }

  const items = [];
  for (const item of payload.items) {
    if (!item || typeof item !== "object" || Array.isArray(item)) return null;

    const itemName = sanitizeText(item.name, 100);
    const quantity = Number(item.quantity);
    const price = Number(item.price);
    if (
      !itemName ||
      !Number.isInteger(quantity) ||
      quantity < 1 ||
      quantity > 99 ||
      !Number.isFinite(price) ||
      price < 0 ||
      price > 1_000_000
    ) {
      return null;
    }

    items.push({ name: itemName, quantity, price });
  }

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const discount = payload.discount === 10 ? 10 : 0;

  return {
    number:
      Number.isSafeInteger(payload.number) && payload.number > 0
        ? payload.number
        : 0,
    customer: {
      name,
      phone,
      address,
      paymentMethod,
    },
    items,
    total,
    discount,
    payable: Math.round(total * (1 - discount / 100)),
  };
}
