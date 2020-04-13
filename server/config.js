module.exports = {
  ENV: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT || 6500,
  URL: process.env.BASE_URL || 'http://localhost:6500',
  SECRET: process.env.SECRET || 'hemlighet',
  SYSTEMBOLAGET_KEY: process.env.SYSTEMBOLAGET_KEY || '420bb38cffc84cf0a3092f4ce21337e9',
  BREWERYDB_KEY: process.env.BREWERYDB_KEY || 'd135440ad11ffa963183d944de63c27d',
  RATEBEER_KEY: process.env.RATEBEER_KEY || '',
  MONGODB_URI: process.env.MONGODB_URI || `mongodb://${process.env.DBUSER}:${process.env.DBPW}@ds139614.mlab.com:39614/kex-test-app`,
}