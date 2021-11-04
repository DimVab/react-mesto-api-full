module.exports = (req, res, next) => {
  const allowedCors = [
    'https://mesto.vab.nomoredomains.rocks',
    'http://mesto.vab.nomoredomains.rocks',
  ];
  const { origin } = req.headers;
  if (allowedCors.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
  }
  res.header('Access-Control-Allow-Credentials', true);

  const requestHeaders = req.headers['access-control-request-headers'];
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
    res.header('Access-Control-Allow-Headers', requestHeaders);
    return res.end();
  }
  next();
};
