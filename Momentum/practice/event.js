
const h1 = document.querySelector("div.hello:first-child h1");

// function handleTitleClick() {
//     const activeClass = "active";
//     if (h1.classList.contains(activeClass)){
//         h1.classList.remove(activeClass);
//     }else{
//         h1.classList.add(activeClass);
//     }
// };

function handleTitleClick() {
    // toogle : active가 존재한다면 삭제, 존재하지 않는다면 추가 
    h1.classList.toggle("active");
};

function handleMouseEnter() {
    h1.innerText = "Mouse is entered";
};

function handleMouseLeave() {
    h1.innerText = "Mouse is gone!";
};

function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy(){
    alert("copier!");
}

function handleWindowOffline(){
    alert("SOS no WIFI");
}

// h1.onclick = handleTitleClick;
h1.addEventListener("click", handleTitleClick);
// h1.addEventListener("mouseenter", handleMouseEnter);
// h1.addEventListener("mouseleave", handleMouseLeave);

// window.addEventListener("resize", handleWindowResize);
// window.addEventListener("copy", handleWindowCopy);
// window.addEventListener("offline", handleWindowOffline);
