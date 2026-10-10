export const sanitizeName = (value) => {
  return value.replace(/[^a-zA-Z\s]/g, '');
};

export const sanitizePhone = (value) => {
  return value.replace(/\D/g, '').slice(0, 10);
};

export const sanitizeCNIC = (value) => {
  const digits = value.replace(/\D/g, '').slice(0, 13);
  if (digits.length > 12) {
    return `${digits.slice(0, 5)}-${digits.slice(5, 12)}-${digits.slice(12)}`;
  }
  if (digits.length > 5) {
    return `${digits.slice(0, 5)}-${digits.slice(5)}`;
  }
  return digits;
};

export const sanitizeEmail = (value) => {
  return value.trim().replace(/\s/g, '');
};

export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isValidPhone = (phone) => {
  return phone.replace(/\D/g, '').length >= 10;
};
