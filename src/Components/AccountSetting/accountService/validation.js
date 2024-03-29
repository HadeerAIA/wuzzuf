export const isEmailValid = (email) => {
  const EMAIL_REGEX =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return EMAIL_REGEX.test(email);
};

export const isValidText = (text) => {
  const SPECIAL_CHARS = /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/;
  return !SPECIAL_CHARS.test(text);
};

export const isContainingSpace = (text) => {
  const SPACE = /^\S*$/;
  return SPACE.test(text);
};

export const isPasswordValid = (pass) => {
  const PASSWORDS =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  return PASSWORDS.test(pass);
};
export const isContainingNumbers = (text) => {
  const CHARS = /[0-9]/;

  return CHARS.test(text);
};
