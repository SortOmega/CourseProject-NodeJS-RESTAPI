const ResponseBasicData = (Id: number, responseMessage: string) => {
  return {
    Id,
    responseMessage,
  };
};

const ResponseLoginData = (
  Id: number,
  responseMessage: string,
  jwt: string
) => {
  return {
    jwt,
    ...ResponseBasicData(Id, responseMessage),
  };
};

export { ResponseBasicData, ResponseLoginData };
