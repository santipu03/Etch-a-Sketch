const container = document.querySelector(".container");

for (let i = 0; i < 256; i++){
    let div = document.createElement("div");
    div.classList.add("item");
    container.append(div);
};