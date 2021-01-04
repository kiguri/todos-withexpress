const notFound = (_, res, __) => {
  const error = new Error(`Page Not Found`);
  res.status(404).json({ message: error.message });
};

module.exports = notFound;
