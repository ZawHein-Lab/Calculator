$(document).ready(function () {
  let data = [
    {
      done: true,
      message: "This is text messsage",
    },
    {
      done: false,
      message: "This is text messsage of false",
    },
  ];
  let todoValue = $("#todoValue");
  let addBtn = $("#addBtn");
  let todoList = $("#todoList");
  let removeAllCheck = $("#removeAllCheck");
  let checkAll = $("#checkAll")
  let selectedIndex = undefined;
  let rate = $("#rate")
  // let input = $("<input>",{type: "checkbox", class: "inputVal form-check me-2"})

  const createItem = (todoData, index) => {
    let todoItem = $("<div>", {
      class: " d-flex justify-content-between align-items-center mt-3",
    });
    let checkDiv = $("<div>", { class: "float-start d-flex" });
    let input = todoData.done ? $("<input>", { type: "checkbox",checked: true,class: "form-check me-2",})
      : $("<input>", {type: "checkbox",checked: false,class: "form-check me-2",});
    let spanText = todoData.done ? $("<span>", { class: " done spanText" }).text(todoData.message)
      : $("<span>", { class: "spanText" }).text(todoData.message);

    let buttonDiv = $("<div>", { class: "float-end" });
    let delBtn = $("<button>", {
      class: "btn btn-success",
      type: "buttom",
    }).text("Delete");
    let editBtn = $("<button>", {
      class: "btn btn-info ms-2",
      type: "button",
    }).text("Edit");

    input.on("click",()=> done(index));
    delBtn.on("click",()=> delFun(index));
    editBtn.on("click",()=> select(index));
    checkDiv.append(input);
    checkDiv.append(spanText);
    buttonDiv.append(delBtn);
    buttonDiv.append(editBtn);
    todoItem.append(checkDiv);
    todoItem.append(buttonDiv);
    todoList.append(todoItem);
  };

  const select =(index)=>{
    selectedIndex = index;
    todoValue.val(data[index].message)
  }

  const delFun=(index) =>{
   data.splice(index,1)
   showAllTodoList()
  }
  const done= (index) =>{
    if(data[index].done === true){
        data[index].done =false
    } else{
        data[index].done = true
    }
    showAllTodoList();
  }

  const showAllTodoList = () => {
    todoList.html("");
    data.forEach((todoData, index) => {
      createItem(todoData, index);
    });
    rate.text(`${(data.filter((val)=> val.done === true)).length} of ${data.length} done `)
    todoValue.val("");

  };
  removeAllCheck.on("click",()=>{
    let newData = data.map((val)=>{
        val.done = false;
        return val;
    })
    data = newData;
    showAllTodoList();
  })
  checkAll.on("click",()=>{
    let newData = data.map((val)=>{
        val.done = true;
        return val;
    })
    data = newData;
    showAllTodoList();
  })
  addBtn.on("click", () => {
    if(selectedIndex === undefined){
      if(todoValue.val() != ""){
        
    data.push({ done: false, message: todoValue.val() });
      }else{
        alert("Enter to do content")
      }
    } else{
        data[selectedIndex].message = todoValue.val();
        data[selectedIndex].done = false;
        todoList.val("");
        showAllTodoList()
        selectedIndex = undefined;
    } 
    
    showAllTodoList();
  });
  showAllTodoList();
});
