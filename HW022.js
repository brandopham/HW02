var express = require("express"),
    http = require("http"),
    app = express()
var toDos = [
    {
        "description": "Get groceries",
        "tags": ["shopping", "chores"]
    },
    {
        "description": "Make up some new ToDos",
        "tags": ["writing", "work"]
    },
    {
        "description": "Prep for Monday's class",
        "tags": ["work", "teaching"]
    },
    {
        "description": "Answer emails",
        "tags": ["work"]
    },
    {
        "description": "Take Gracie to the park",
        "tags": ["chores", "pets"]
    },
    {
        "description": "Finish writing this book",
        "tags": ["writing", "work"]
    }

];

app.use(express.static(__dirname + "/client"));
http, createServer(app).listen(3000);
$button.on("click", function () {
    var description = $input.val(),
        tags = $tagInput.val().split(",");
    toDoObjects.push({ "description": description, "tags": tags });
    //here' we'll do a quick post to our todos route
    $.post("todos", {}, function (response) {
        // this callback is called with the server responds
        console.log("We posted and the server responded!");
        console.log(response);
    });
    // update toDos
    toDos = toDoObjects.map(function (toDo) {
        return toDo.description;
    });
    $input.val("");
    $tagInput.val("");
});
app.get("todos.json", function (req, res) {
    res.json(toDos);
});
var express = require("express"),
    http = require("http"),
    app = express()
toDos = {
    // ...
};;
app.use(express.static(__dirname + "/client"));
// tell Express to parse incoming
// JSON objects
app.use(express.urlencoded());
app.post("/todos", function (req, res) {
    // the object is now stored in req.body
    var newToDo = req.body;
    console.log(newToDo);
    toDos.push(newToDo);
    // send back a simple object
    res.json({ "message": "You posted to the server!" });
});
$button.on("click", function () {
    var description = $input.val(),
        tags = $tagInput.val().split(","),
        // create the new to-do item
        newToDo = { "description": description, "tags": tags };
    $.post("todos", newToDo, function (result) {
        console.log(result);
        // we'll wait to push the new object
        // on the client until after the server
        // returns
        toDoObjects.push(newToDo);
        // update toDos
        toDos = toDoObjects.map(function (toDo) {
            return toDo.description;
        });
        $input.val("");
        $tagInput.val("");
    });
});