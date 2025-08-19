function add() {
    const input = document.getElementById("userinput");
    let text = input.value;
    if (text === "") {
        alert("Please enter some text!");
        return;
    }
    const newdiv = document.createElement("div");

    newdiv.style.margin = "5px";
    newdiv.style.padding = "5px";
    newdiv.style.border = "solid 2px";
    // Create span for text
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";


    const span = document.createElement("span");
    span.innerHTML = text;
    span.style.paddingLeft = "10px"

    checkbox.onclick = function () {
       let newT = text
        if (checkbox.checked) {
           newT = `<del>${text}</del>`;
        }
        span.innerHTML = newT;
    }



    newdiv.appendChild(checkbox);
    newdiv.appendChild(span);


    document.getElementById("output").appendChild(newdiv);

    input.value = "";


}

