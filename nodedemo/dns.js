const dns = require('dns');
dns.lookup('www.jd.com', (err, address, family) =>
  console.log('地址: %j 地址族: IPv%s', address, family));