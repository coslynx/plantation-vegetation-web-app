const createError = (status, message) => {
  const error = new Error(message);
  error.status = status;
  return error;
};

const handleError = (error, res) => {
  if (error instanceof Error) {
    res.status(error.status || 500).json({ message: error.message });
  } else {
    res.status(500).json({ message: 'An unknown error occurred.' });
  }
};

export { createError, handleError };