const db = require('../controllers/db');

db.initCollection('sessions');

module.exports = {
    swaggerSecurityHandlers: {
      ApiKeyAuth: function (req, authOrSecDef, scopesOrApiKey, callback) {
        if (scopesOrApiKey) {
          if (db.getObject('sessions', {session_id: scopesOrApiKey})) callback();
          else callback(new Error('Api kulcs hiányos vagy nem regisztrált'));
          // disable to allow mock mode to work
        }
        else callback(new Error('Api kulcs hiányos vagy nem regisztrált'));
      }
    }
  };