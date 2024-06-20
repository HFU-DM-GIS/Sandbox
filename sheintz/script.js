let button = document.getElementById("add");
button.addEventListener("click", addElement);

document.addEventListener("keydown", addElement);

function addElement(event){
    if (event.type === "click" || event.key === "Enter") {
        let textfeld = document.getElementById("text");
        let forumDiv = document.getElementById("forum");
        let p = document.createElement("p");
        p.textContent = textfeld.value;
        //p.id ="123";
        p.addEventListener("click", loadElement);
        forumDiv.append(p);
    }
}

function loadElement(event){
    let textfeld = document.getElementById("text");
    textfeld.value = event.currentTarget.textContent;
}