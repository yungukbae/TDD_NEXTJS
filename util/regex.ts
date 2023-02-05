const regPhone = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
const regEmail =
  /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

export const emailValidator = (email: string) => {
  return RegExp(regEmail).test(email);
};

export const phoneValidator = (phone: string) => {
  return RegExp(regPhone).test(phone);
};
