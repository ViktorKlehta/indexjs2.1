var op;

function func () {
    var result;
    let s = document.getElementsByName("myselect");
    let select=s[0];
    var num1=Number(document.getElementById("num1").value);
    var num2=Number(document.getElementById("num2").value);
    if (op1.checked && select.value=="2") 
    result=num1*num2+1;
    else if (op2.checked && select.value=="2") 
    result=num1*num2+2;
    else if (op3.checked && select.value=="2") 
    result=num1*num2+3;
    else if (sv1.checked && sv2.checked && select.value=="3") 
    result=num1*num2+4+5;    
    else if (sv1.checked && select.value=="3") 
    result=num1*num2+4;
    else if (sv2.checked && select.value=="3") 
    result=num1*num2+5;
    else 
    result=num1*num2;
    document.getElementById("result").innerHTML=result;
}

window.addEventListener('DOMContentLoaded', function (event) {
    let radios = document.getElementById("myradios");
    let checkbox=document.getElementById("checkboxes");
    radios.style.display = "none";
    checkbox.style.display="none";    
    let s = document.getElementsByName("myselect");
    s[0].addEventListener("change", function(event) {
    let select = event.target;
    console.log(select.value);
    // Можно использовать getElementsByClassName()
    if (select.value == "1") {
    radios.style.display = "none";
    checkbox.style.display="none";
    }
    if (select.value=="2") {
    radios.style.display = "block";
    checkbox.style.display="none";
    }
    if (select.value=="3") {
        radios.style.display="none";
        checkbox.style.display="block";
    }
    });
   
    let r = document.querySelectorAll(".myradios input[type=radio]");
    r.forEach(function(radio) {
    radio.addEventListener("change", function(event) {
    let r = event.target;
    console.log(r.value);
    });
    });
});
   
   

   