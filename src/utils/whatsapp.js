const DEFAULT_WHATSAPP_NUMBER = "554235239684";

export function createWhatsAppUrl(message) {
  const configuredNumber =
    import.meta.env.VITE_WHATSAPP_NUMBER || DEFAULT_WHATSAPP_NUMBER;

  const sanitizedNumber = configuredNumber.replace(/\D/g, "");

  return `https://wa.me/${sanitizedNumber}?text=${encodeURIComponent(message)}`;
}
