export const required = value => {
  if (value) {
    return;
  }
  return 'Field is required';
};

export const maxLength = maxLength => value => {
  if (value.length > maxLength) {
    return `Maximum length ${maxLength} characters`;
  }
  return;
};