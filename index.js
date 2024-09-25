const onClickadd=()=>{
    // テキスト取得、削除
  const inputText=document.getElementById("add-text").value;
  document.getElementById("add-text").value="";
  createIncompleteTodo(inputText);
}

const createIncompleteTodo=(todo)=>{
//   li生成
const li=document.createElement("li");

// div生成
const div=document.createElement("div");
div.className="list-row";

// p生成
const p=document.createElement("p");
p.className="todo-item";
p.innerText=todo;

const completeButton=document.createElement("button");
completeButton.innerText="完了";
completeButton.addEventListener("click",()=>{
    const completeTarget=completeButton.closest("li");
    document.getElementById("incomplete-list").removeChild(completeTarget);
    document.getElementById("complete-list").appendChild(completeTarget);
    const removeButton=document.createElement("button");
    removeButton.innerText="戻す";
    removeButton.addEventListener("click",()=>{
        const todoText=removeButton.previousElementSibling.innerText;
        createIncompleteTodo(todoText);
        removeButton.closest("li").remove();
    })

    div.removeChild(completeButton);
    div.removeChild(deleteButton);
    completeTarget.firstElementChild.appendChild(removeButton);
})

const deleteButton=document.createElement("button");
deleteButton.innerText="削除";
deleteButton.addEventListener("click",()=>{
    // 削除ボタンで削除
    const deleteTarget=deleteButton.closest("li");
    document.getElementById("incomplete-list").removeChild(deleteTarget);
})

div.appendChild(p);
div.appendChild(completeButton);
div.appendChild(deleteButton);
li.appendChild(div);


// 未完了リストに追加
document.getElementById("incomplete-list").appendChild(li);
}

document.getElementById("add-button").addEventListener("click",onClickadd);