//Color Pallete #ECE3CE #739072 #4F6F52 #3A4D39
// Color Palette Definition: 
// #ECE3CE (Background Color)
// #739072 (Text Color)
// #4F6F52 (Button Color)
// #3A4D39 (Form Color)

// Setting the background gradient to #ECE3CE
document.body.style.background = "linear-gradient(#ECE3CE, #ECE3CE)";
document.body.style.backgroundColor = "#ECE3CE";
//couldnt see the yellow so added the background color as well to the todo list
const todoList = document.querySelector('#list');
todoList.style.backgroundColor = "#ECE3CE";

// Modifying the text color to #739072
document.body.style.color = "#739072";

// Altering the color of the submit button to #4F6F52
const submitButton = document.querySelector("#submitTask");
submitButton.style.backgroundColor = "#4F6F52";

// ---------------------------------------------------------
//Global Variables
let tasksArray = [];

// ---------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  // Deliverable 1: "As a user, I should be able to type a task into the input field." So Select the form first. Also Changing the form color to #3A4D39
  const form = document.querySelector("#create-task-form");
  form.style.color = "#3A4D39";
  console.log("form: ", form);

  // Deliverable 2. "As a user, I should be able to click some form of a submit button." This is in the form of a submit button but I am guessing need to capture the event in Javascript.

  form.addEventListener('submit', function (event) {
    event.preventDefault();  // Preventing the form from its default submission behavior (page refresh)
    const userInput = event.target['new-task-description'].value;  // Fetching the user input from the text field
    console.log("User Input:", userInput); // Use this log to verify the captured input


    // Deliverable 3. "As a user, the task string that I provided should appear on the DOM after the submit button has been activated." So need to capture the event and then add the task to the DOM.
    const taskList = document.querySelector('#tasks'); // Selecting the taskList
    const newTask = document.createElement('li', 'button'); // Creating a newTask element
    newTask.innerText = userInput + " "; // Adding the userInput to the newTask
    taskList.appendChild(newTask); // Adding the newTask to the taskList


    // A delete function that will remove tasks from your list
    const deleteButton = document.createElement('button'); // Creating the delete button
    deleteButton.innerText = "X"; // Adding the text to the delete button
    newTask.appendChild(deleteButton); // Adding the delete button to the newTask parent element
    deleteButton.addEventListener('click', function () {
      newTask.remove(); // Removing the newTask element from the DOM
    });

    console.log("Task wanting to be created: ", newTask);


    // A priority value selected from a dropdownLinks to an external site.that is used to determine the color of the text in the list(e.g.red for high priority, yellow for medium, green for low) -- This can be a form dropdownLinks to an external site.that you create dynamically with JavaScript or a native HTML select element.

    const priorityValue = event.target['priority'].value;

    let taskColor;
    if (priorityValue === 'High') {
      taskColor = 'red';
    } else if (priorityValue === 'Medium') {
      taskColor = 'yellow';
    } else if (priorityValue === 'Low') {
      taskColor = 'green';
    } else {
      taskColor = '#739072';
    }

    newTask.style.color = taskColor;
    console.log("Task Color: ", taskColor);

    let tasksArray = [];
    tasksArray.push({
      task: userInput,
      priority: priorityValue,
      color: taskColor
    });
    console.log(tasksArray);
  });
});

// As an additional challenge, implement a sorting functionality that displays the tasks in ascending or descending order based on priority
// An additional input field(e.g.user, duration, date due)
// Ability to edit tasks
// Something of your choice! The main objective is to add a feature that allows the user's input to affect the DOM