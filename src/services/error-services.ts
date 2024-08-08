export const apiErrorHandler = (err: any) => {
  if (err) {
    return { error: err.message };
  }
  return { error: 'Unknown Error has occured' };
};
