let btn = document.getElementById("btn");
let resultSpan = document.getElementById("result");
let results = document.querySelector(".results");



function calc(id, a, b) {
    switch(id) {
        case "+": return a + b;
        case "*": return a * b;
        case "-": return a - b;
        case "/": return a / b;
        // default : return "я не знаю такой операции " + id;
    }
}

btn.addEventListener("click", () => {
    let a = document.getElementById("firstNumber").value;
    let b = document.getElementById("secondNumber").value;
    let id = document.getElementById("operations").value;
    
    if((a === "")||(b === "")) {
        alert("Введите или выберете значения!")
    }
    else {
        let result = Number((calc(id, Number(a), Number(b)).toFixed(10)));
        resultSpan.innerText = result;
        let span = document.createElement('span');
        span.classList.add("results__span");
        span.innerText = result;
        span.addEventListener ("click", () => {
            span.remove();
        });
        results.append(span);

    };

    
});

