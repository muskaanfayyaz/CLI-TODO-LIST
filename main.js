#! /usr/bin/env node
import inquirer from "inquirer";
let todo = [];
let condition = true;
while (condition) {
    let addTask = await inquirer.prompt([
        {
            type: "input",
            name: "todo_q1",
            message: "What you want add in your todo list ?"
        },
        {
            type: "confirm",
            name: "confirm",
            message: "Are you sure you want to add this todo in your todo list?",
            default: "false",
        },
        {
            type: "confirm",
            name: "done",
            message: "Is this done?",
            default: "false",
        }
    ]);
    todo.push(addTask.todo_q1);
    condition = addTask.confirm;
    console.log(todo);
}
