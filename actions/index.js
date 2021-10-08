export const signin = (googleUser) => {
  return {
    type: "SIGNIN",
    googleUser: googleUser,
  };
};
