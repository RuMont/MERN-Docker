const { MongoClient } = require('mongodb');
const connectionString = 'mongodb://mongo:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.1.9';
const client = new MongoClient(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let dbConnection;

module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      if (err || !db) {
        return callback(err);
      }

      dbConnection = db.db('tasksDatabase');
      console.log(`Connected to ${dbConnection.s.namespace}`);

      return callback();
    });
  },

  getDb: function () {
    return dbConnection;
  },
};