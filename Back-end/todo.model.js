const mongoose =require ("mongoose");

let Todo = new mongoose.Schema({
    todo_description :{
        type:String
    },
    todo_responsible : {
        type :String
    },
    todo_priority : {
        type : String
    },
    todo_completed : {
        type : Boolean
    }
});

module.exports = mongoose.model('Todo',Todo)