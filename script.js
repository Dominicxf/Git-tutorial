//Creating an arrays;
const todos =['get groceries', 'wash car', 'make dinner' ]
// add a DIV to the html file;
//document.createElement() is use to add an Element to the html;
// .innerText =; to add the the text to the div element;
// document.body.append(); is finally push the element to the webpage;

// using function;
render();

function addTodo(){
    let textBox =document.getElementById('todo-title');
    let title = textBox.value;
    todos.push(title);

    render();

}

//
 function render(){
    todos.forEach(function (todoTitle){
        document.getElementById('todo-list').innerHTML ='';
        let element = document.createElement('div');
        element.innerText = todoTitle;
        let todoList = document.getElementById('todo-list');
        todoList.appendChild(element);
    });
 }