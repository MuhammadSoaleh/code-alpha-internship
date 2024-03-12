function todoList()
{
    var list = document.getElementById("list");
    var todo_item = document.getElementById("toDo")
    var li = document.createElement('li')
   
    var liText = document.createTextNode(todo_item.value)
  
    li.appendChild(liText)
    // console.log(li)
    
    list.appendChild(li)
    toDo.value=""
    console.log(list)


    // Delete Button
     var delBtn = document.createElement("button");
     var delText = document.createTextNode("Delete");
    delBtn.setAttribute("class","btn")
    delBtn.setAttribute("onclick","delItem(this)")
     delBtn.appendChild(delText);
     li.appendChild(delBtn)

    //  Edit Button
     var edBtn = document.createElement("button");
     var edText = document.createTextNode("Edit");
    edBtn.setAttribute("class","btn1")
    edBtn.setAttribute("onclick","edItem(this)")
     edBtn.appendChild(edText);
     li.appendChild(edBtn)    


}

function delItem(e)
{
    e.parentNode.remove()
}

function edItem(e)
{

    var edit=  e.parentNode.firstChild.nodeValue;
    var editText = prompt("Enter your update value", edit);
  

    // edit = editText;
    e.parentNode.firstChild.nodeValue = editText;

  
}

function delAll()
{
    list.innerHTML = " "
}