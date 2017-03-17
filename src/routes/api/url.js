const url = require('../../models/url.js');
const util = require('../../../library/utility.js');

module.exports = (express) => {
  const router = express.Router();

// Create
  router.get('/urls', (req, res) => {
    url.findAll(((err) => {
      util.debug('Error: URL access unsuccessful', err, 'error');
      res.status(500).json(err);
    }), (data) => {
      util.debug('URL access successful', data, 'success');
      res.status(200).json(data);
    });
  });

// One
  router.get('/urls/:id', (req, res) => {
    req.body.id = req.params.id;
    url.find(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      util.debug('Access of one url successful', data);
      res.status(200).json(data);
    });
  });


  // Delete
  router.delete('/urls/:id', (req, res) => {
    req.body.id = req.params.id;
    url.destroy(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

  // Update
  router.post('/urls/:id', (req, res) => {
    req.body.id = req.params.id;
    url.update(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

  return router;
};
