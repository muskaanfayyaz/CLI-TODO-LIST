#! /usr/bin/env node
import inquirer from "inquirer";
let todo = [];
let condition = true;
while (condition) {
    let addTask = await inquirer.prompt([
        {
            type: "input",
            name: "todo",
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
    todo.push(addTask.todo);
    condition = addTask.confirm;
    console.log(todo);
}
