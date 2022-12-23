const ResponseLoginData = (
  Id: number,
  responseMessage: string,
  jwt: string
) => {
  return {
    Id,
    responseMessage,
    jwt,
  };
};

export { ResponseLoginData };
