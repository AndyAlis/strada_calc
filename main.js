let btn = document.getElementById("btn");
let result = document.getElementById("result");
btn.addEventListener("click", () => {
    console.log("нажал!");
    result.innerText = "зачем нажал?";
});