import inquirer from "inquirer" ;

let todos : string[] = [];
let condition = true;

while(condition){
let addtask = await inquirer.prompt(
    [
        {
            type: "input",
            name: "todo",
            message: "Enter a task to add:"
        },
        {
            type: "confirm",
            name: "addMore",
            message: "Do you want to add more task?",
            default: false
        },
        
    ]
)
todos.push(addtask.todo)
condition = addtask.addMore
console.log(todos);
}
