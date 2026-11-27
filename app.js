let date=document.getElementById("birthdate");
let button=document.getElementById("calculate");
let result=document.getElementById("result");
let reset=document.getElementById("reset");

button.addEventListener("click",function(){
    console.log("Button Clicked");
    if(date.value === ""){
        result.textContent = "Please enter your birthdate.";
        return;
    }
    let birthDate = new Date(date.value) ;
    console.log(birthDate);
    console.log(birthDate.getFullYear());
    let today = new Date();
    console.log(today.getFullYear());
    if (birthDate > today){
        result.textContent = "Birthdate cannot be in the future.";
        return;
    }
    let age = today.getFullYear() - birthDate.getFullYear();
    console.log(age);
    ;
    if (birthDate.getMonth() > today.getMonth()){
        age = age - 1;
    }
    else if (birthDate.getMonth() === today.getMonth() && birthDate.getDate() > today.getDate()){
        age = age - 1;
    }
result.textContent = "Your age is " + age + " years.";
})
reset.addEventListener("click",function(){
    date.value = "";
    result.textContent = "";
})