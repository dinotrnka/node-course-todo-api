// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApi', (error, client) => {
  if (error) {
    return console.log('Unable to connect to Mongo DB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');
  
  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('5a284882d5724a1d3161db3c')
  }, {
    $set: {
      completed: true
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5a282dd0d5724a1d3161d929')
  }, {
    $set: {
      name: 'Tali'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });
});