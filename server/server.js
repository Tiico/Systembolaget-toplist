const express = require('express');
const config = require('./config');
const path = require('path')
const bodyParser = require('body-parser');

const systembolaget = require('./router/api/systembolaget');
const untappd = require('./router/api/untappd');

/* const guard =  require('./helpers/guard'); */

const app = express();
const port = config.PORT;


app.use(bodyParser.json());

/* Authenticates each request */
/* app.use(/\/api\/.{1,}/, guard);
 */
app.use('/api/systembolaget', systembolaget);
app.use('/api/untappd', untappd);

/**
 * If NODE_ENV is set to production the server will take responsibility for serving 
 * the built version of the app located in the build directory.
 */
if (config.ENV === 'production') {
  app.use(express.static(__dirname + "/../dist/"));

  app.get(/.*/, function (req, res) {
    res.sendFile(path.resolve(__dirname + "/../dist/index.html"))
  });
}
// eslint-disable-next-line no-console  
app.listen(port, () => console.log(`Server running on port ${port}`));

module.exports = app;