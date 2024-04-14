let temp1=document.getElementById("temp1");
let temp2=document.getElementById("temp2");
let tem1=document.getElementById("temp-1");
let tem2=document.getElementById("temp-2");
function cal(){
    if(tem1.value==="Celsius" && tem2.value==="Fahrenheit"){
        temp2.value=(temp1.value*9/5)+32;
    }else if (tem1.value==="Celsius" && tem2.value==="Kelvin"){
        temp2.value=(temp1.value-1+274);
    }else if (tem1.value==="Fahrenheit" && tem2.value==="Celsius"){
        temp2.value=(temp1.value-32)*5/9;
    }else if (tem1.value==="Fahrenheit" && tem2.value==="Kelvin"){
        temp2.value=((temp1.value-32)*5/9)+273;
    } else if(tem1.value==="Kelvin" && tem2.value==="Celsius"){
        temp2.value=temp1.value-273;
    }else if (tem1.value==="Kelvin" && tem2.value==="Fahrenheit"){
        temp2.value=((temp1.value-273)*9/5)+32;
    }else{
        temp2.value=temp1.value;
    }
}
function revcal(){
    if(tem2.value==="Celsius" && tem1.value==="Fahrenheit"){
        temp1.value=(temp2.value*9/5)+32;
    }else if (tem2.value==="Celsius" && tem1.value==="Kelvin"){
        temp1.value=(temp2.value-1+274);
    }else if (tem2.value==="Fahrenheit" && tem1.value==="Celsius"){
        temp1.value=(temp2.value-32)*5/9;
    }else if (tem2.value==="Fahrenheit" && tem1.value==="Kelvin"){
        temp1.value=((temp2.value-32)*5/9)+273;
    } else if(tem2.value==="Kelvin" && tem1.value==="Celsius"){
        temp1.value=temp2.value-273;
    }else if (tem2.value==="Kelvin" && tem1.value==="Fahrenheit"){
        temp1.value=((temp2.value-273)*9/5)+32;
    }else{
        temp1.value=temp2.value
    }
}
temp1.addEventListener("input",cal);
temp2.addEventListener("input",revcal);
tem1.addEventListener("change",revcal);
tem2.addEventListener("change",cal);
