//1-file system module
const fs = require('fs') // it will bring fs module in our code

//2-this file path does not exist right now so we will create it . we are just structuring our code
const filepath = "./tasks.json"  // file path
//4-in node world if u want to acess these command line parameters which we wrote at 3 
//it is used to capture command-line arguments in a Node.js application.
const command = process.argv[2]
const argument  = process.argv[3]

//5 - before running these commands first we need to load the task and loading will happen through the task.json and in that array we can go and push it 
const loadTask = ()=>{
    //first we have to read the file
    try {
      const dataBuffer = fs.readFileSync(filepath);
      //this dataBuffer is an object so we have to convert it into string
      const dataJSON = dataBuffer.toString();
      //json.parse convert JSON-formatted string into a corresponding JavaScript object.
      return JSON.parse(dataJSON)
    } catch (error) {
        return []
        
    }

}
//6
const saveTask = (tasks)=>{
    //converting js object into js string
    const dataJSON = JSON.stringify(tasks)
    fs.writeFileSync(filepath,dataJSON)




}

//7- function to add task
const addTask = (task)=>{
    const tasks=loadTask() // load existing task from task.json
    tasks.push({task}) // it will add task which we created in array 
    saveTask(tasks) // save the updated array back to task.json
    console.log("task added",task);
    


}
//  function to list task

//8- on terminal we are adding task
// add"buy milk"

// function for list task
const listTasks = () => {
  const tasks = loadTask(); // Load the tasks from the tasks.json file
  tasks.forEach((task, index) => {
    console.log(`${index + 1}- ${task.task}`); // Log each task with its index
    //index+1 is that index should start from one not 0
    //task.task--> this prints the task text
  });
};

//function to remove
const removeTask = (indexToRemove) => {
    const tasks = loadTask();  // Load the tasks from the file
    if (indexToRemove >= 0 && indexToRemove < tasks.length) {
        tasks.splice(indexToRemove, 1);  // Remove the task at the specified index
        saveTask(tasks);  // Save the updated tasks list back to the file
        console.log(`Task ${indexToRemove + 1} removed successfully.`);
    } else {
        console.log("Invalid task index.");
    }
};





//3- creating some commands which right now does not exists
//command handling
if (command ==="add"){
    addTask(argument)
}else if(command ==="list"){
    listTasks()

}else if (command ==="remove"){
    removeTask(parseInt(argument))

}else{
    console.log("command not found");
    
}