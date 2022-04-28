export const isEmailValid = (email) => {
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return emailRegex.test(email);
};

export const isPhoneNumberValid = (number) => {
  const numberRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  return numberRegex.test(number);
};

export const isNumber = (key, value) => {
    debugger
  if (key === "PhoneNumber") {
    if (isNaN(value)) return false;
  }
};
