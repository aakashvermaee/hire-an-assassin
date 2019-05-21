require('dotenv').config();

const fastify = require('fastify')();

const { HOST, PORT } = process.env;

fastify.get('/', (req, res) => res.send('Running!'));

fastify.listen(PORT, HOST, (err) => {
  if (err) throw err;

  if (!PORT || !HOST) {
    throw new Error('Either PORT or, HOST is undefined');
  }

	console.log(`backend running on, http://${HOST}:${PORT}"`);
});
