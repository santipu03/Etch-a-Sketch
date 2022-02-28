const container = document.querySelector(".container");


for (let i = 0; i < 256; i++){
    let div = document.createElement("div");
    div.classList.add("item");
    container.append(div);
};

container.style.gridTemplateColumns = "repeat(16, auto)";
container.style.gridTemplateRows = "repeat(16, auto)";


const items = document.querySelectorAll(".item");
items.forEach(item => {
    item.addEventListener("mouseover", ()=> {
        item.style.backgroundColor = "black";
    })
})


