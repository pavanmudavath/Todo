const inputText=document.getElementById("text");
const addButton=document.getElementById("add");
const list=document.getElementById("list");

function addTodoItem(){
    const text=inputText.value.trim();
    if(text){

        const li = document.createElement('li');
        li.className="todo-item";
        li.textContent=text;

        //Done(Tick mark) function...
        const tickMark=document.createElement('button');
        tickMark.textContent="Done";
        tickMark.addEventListener("click",()=>{
            li.style.textDecoration="line-through";
            tickMark.disabled=true; 
        })
        li.appendChild(tickMark);

        //Undo button.
        const undo=document.createElement('button');
        undo.textContent="Undo";
        undo.addEventListener("click",()=>{
            li.style.textDecoration="";
            tickMark.disabled=false;
        })
        li.appendChild(undo);


        //All About Delete function...
        const delButton=document.createElement('button');
        delButton.textContent="Del";
        delButton.addEventListener("click",()=>{
            list.removeChild(li);
        })
        li.appendChild(delButton);


        list.appendChild(li);
        inputText.value="";
    }else{
        alert("Please enter the some text.");
    }
}
//Enter button in keyboard also works insted of the Add we can also use it.
addButton.addEventListener("click",addTodoItem);
inputText.addEventListener("keydown",(event)=>{
    if(event.key === "Enter"){
        event.preventDefault();
        addTodoItem();
    }
});



    //This is works fine if you enter the nothing and hit the add button it's gona throw the alert message.
    //But when you just enter the  spaces then enter then it's creates the empty list. so for that need to use the Trim()

    // console.log(inputText.value);
    // if(inputText.value===""){
    //     alert("Enter the ToDO Item");
    // }else{
    // const li=document.createElement("li");
    // li.textContent=inputText.value;
    // list.appendChild(li);
    // inputText.value="";
    // }

