export const parseError = (error: any) => {
  const response = error.response;
  if (response) {
    const responseData = response.data;
    if (responseData.length > 0) {
      return responseData[0].errors.issues[0].message;
    }
    return responseData.message;
  }
  return error.message ?? "Something went wrong. Try again later.";
};
