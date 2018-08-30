// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongodDB server');

//findOneAndUpdate Todos
// db.collection('Todos').findOneAndUpdate({
//   _id: new ObjectID('5b875368dca47a2c37446467')
// }, {
//   $set: {
//     completed: true
//   }
// }, {
//   returnOriginal: false
// }).then((result) => {
//   console.log(result);
// });

//findOneAndUpdate Users
// db.collection('Users').findOneAndUpdate({
//   _id: new ObjectID('5b875520dca47a2c37446517')
// }, {
//   $set: {
//     age: 30,
//     location: 'Minneapolis'
//     }
//   }, {
//     returnOriginal: false
//   }).then((result) => {
//     console.log(result);
//   });

//findOneAndUpdate Increment
db.collection('Users').findOneAndUpdate({
  _id: new ObjectID('5b875520dca47a2c37446517')
}, {
  $set: {
    name: 'Carl'
  },
  $inc: {
    age: 2,
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  //db.close();
});
