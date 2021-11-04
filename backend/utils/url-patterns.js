const urlPattern = /^https?:\/\/(www.)?[a-z0-9-]+\.[a-z]+[/]*[a-z0-9\-._~:/?#[\]@!$&()*,;=+%]*$/i;
const urlPatternForJoi = '^https?://(www.)?[a-z0-9-\\.]+[/]*[a-zA-Z0-9-._~:/?#[\\]@!$&()*,;=+%]*$';

module.exports = { urlPattern, urlPatternForJoi };
