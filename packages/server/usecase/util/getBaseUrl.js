const getBaseUrl = () => {
  if (process.env.BASE_URL) {
    return process.env.BASE_URL;
  }
  const port = 5053;
  const host = 'localhost';
  return `${host}:${port}`;
};
module.exports = { getBaseUrl };
