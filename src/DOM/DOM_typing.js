var val = document.getElementById("input");
var button = document.getElementById("add");
var List = document.getElementById("list");
button.addEventListener("click", function () {
    if (val.value === "") {
        console.log("empty");
    }
    var li = document.createElement("li");
    li.textContent = val.value;
    List.appendChild(li);
    // console.log(val.value);
    val.value = "";
});
var Btn1 = document.getElementById("high");
var Btn2 = document.getElementById("low");
var disp = document.getElementById("count");
var count = 0;
Btn1.addEventListener("click", function () {
    count++;
    disp.textContent = count.toString();
});
Btn2.addEventListener("click", function () {
    count--;
    if (count < 0) {
        disp.textContent = "END";
    }
    disp.textContent = count.toString();
});
