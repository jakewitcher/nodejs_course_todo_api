// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongodDB server');

// db.collection('Todos').find({
//     _id: new ObjectID('5b873ace463c0d2f1891971c')
//   }).toArray().then((docs) => {
//   console.log('Todos');
//   console.log(JSON.stringify(docs, undefined, 2));
// }, (err) => {
//   console.log('Unable to fetch todos', err);
// });

// db.collection('Todos').find().count().then((count) => {
//   console.log(`Todos count: ${count}`);
// }, (err) => {
//   console.log('Unable to fetch todos', err);
// });

db.collection('Users').find({location: 'Cincinnati'}).toArray().then((docs) => {
  console.log('Users');
  console.log(JSON.stringify(docs, undefined, 2));
}, (err) => {
  console.log('Unable to find specified user');
});

  //db.close();
});
