const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos(){
    // array를 string화해서 저장하기
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
    // 어떤 버튼이 클릭되었는지 알기 위해 
    // target : 클릭된 html element
    // parentElement : 클릭된 element의 부모
    const li = event.target.parentElement;
    // toDos의 id와 li의 id가 다른 toDo만 남기기
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    li.remove();
    saveToDos();
}


function paintToDo(newTodo){
    const li = document.createElement("li");
    // li의 id를 newTodo의 id로!
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id : Date.now()
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos){
    // string을 자바스크립트에서 사용할 수 있는 array로 변경
    const parsedToDos = JSON.parse(savedToDos);
    // 기존의 toDos를 보관
    toDos = parsedToDos;
    // 각각의 item에 대해 함수 실행 
    parsedToDos.forEach(paintToDo);
}

// 지우고 싶은 item을 array에서 제외하고 새로운 array 생성
// filter : 반드시 true를 리턴해야한다