const val = document.getElementById("input") as HTMLInputElement;
const button = document.getElementById("add") as HTMLButtonElement;
const List = document.getElementById("list") as HTMLUListElement
button.addEventListener("click", () => {
    if (val.value === "") {
        console.log("empty")
    }
    const li = document.createElement("li")
    li.textContent = val.value;
    List.appendChild(li);
    // console.log(val.value);
    val.value = "";
})

const Btn1 =document.getElementById("high") as HTMLButtonElement
const Btn2 =document.getElementById("low") as HTMLButtonElement
const disp=document.getElementById("count") as HTMLParagraphElement
let count=0;
Btn1.addEventListener("click",() => {
    count++
    disp.textContent=count.toString();
})
Btn2.addEventListener("click",() => {
    count--
    if(count<0){
        disp.textContent="END"
    }
    disp.textContent=count.toString();
})