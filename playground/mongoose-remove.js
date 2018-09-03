const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

//Todo.findOneAndRemove
//Todo.findByIdAndRemove

Todo.findOneAndRemove({_id: '5b8c88a7dca47a2c37447564'}).then((todo) => {

});

Todo.findByIdAndRemove('5b8c88a7dca47a2c37447564').then((todo) => {
  console.log(todo);
});
