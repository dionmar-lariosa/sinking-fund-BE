const ErrorMiddleware = {
  page404: (req, res, next) => {
    res.status(404).json({
      error: "Resource not found."
    });
  },

  appError: (err, req, res, next) => {
    return res.json({
      error: err
    });
  }
};

export default ErrorMiddleware;
