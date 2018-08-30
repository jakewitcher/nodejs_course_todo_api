// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongodDB server');

//deleteMany Todos
// db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
//   console.log(result);
// });

//deleteOne Todos
// db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
//   console.log(result);
// });

//findOneAndDelete Todos
// db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
//   console.log(result);
// });

//deleteMany Users
// db.collection('Users').deleteMany({name: 'Ellie'}).then((result) => {
//   console.log(result);
// });

//deleteOne Users
// db.collection('Users').deleteOne({name: 'Lauren'}).then((result) => {
//   console.log(result);
// });

//findOneAndDelete Users
// db.collection('Users').findOneAndDelete({name: 'Jake'}).then((result) => {
//   console.log(result);
// });

//findOneAndDelete with ObjectID
db.collection('Users').findOneAndDelete({
  _id: new ObjectID('5b87478d9ef26d3ce0b04ce5')
}).then((result) => {
  console.log(JSON.stringify(result, undefined, 2));
});

  //db.close();
});
