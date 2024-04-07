import inquirer from "inquirer";
let todoList = [];
let conditions = true;
while (conditions) {
    let addTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "Enter your new task :"
        }
    ]);
    todoList.push(addTask.task);
    console.log(`${addTask.task} task added in todo-list succsessfully!`);
    let addMoretask = await inquirer.prompt([
        {
            name: "addmore",
            type: "confirm",
            message: "Do you want to add more task ?",
            default: "false",
        }
    ]);
    conditions = addMoretask.addmore;
}
console.log("your updated todo list", todoList);
