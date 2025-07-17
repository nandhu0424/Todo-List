
    const todo =[{
      name: 'make dinner',
      dueDate:'2025-04-17'
    }];
    
    renderTodo();

    function renderTodo(){
    let todoList='';
    for(let i=0; i<todo.length; i++){
      const todoObject=todo[i];
      //const name = todoObject.name;
      //const dueDate=todoObject.dueDate;
      const {name,dueDate}=todoObject;
      const html =`
        <div>${name}</div>
        <div> ${dueDate}</div>
        <button class="cs-delete" onclick="
        todo.splice(${i},1)
        renderTodo();
        ">Delete</button>
      `;
      todoList +=html;
    }
    document.querySelector('.js-result').innerHTML = todoList;
    }

    function addTodo(){
      const todoInput=document.querySelector('.js-input');
      const name= todoInput.value;
      
      const tododate=document.querySelector('.js-date');
      const dueDate = tododate.value;

      todo.push({
        //name: name,
        //dueDate: dueDate
        //if both key value same
        name,
        dueDate
      });
      renderTodo();
      todoInput.value='';
    }