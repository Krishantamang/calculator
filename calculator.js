const display= document.getElementById("display");
const buttons= document.querySelectorAll("button");
const output= document.getElementById("output");

let currentValue="";
let result=0;
let operator="";
for (let button of buttons) {
    button.addEventListener('click', handelbutton);
  }

 function handelbutton(event){
    const buttonvalue=event.target.value;
    if(!isNaN(buttonvalue)){
        currentValue+=buttonvalue;
        display.value=currentValue;
    }
    else{
        switch(buttonvalue){
        case"+":
            if(currentValue!==""){
                result=parseFloat(currentValue);
                operator=buttonvalue;
                currentValue="";
            } 
            break;
        case"-":
            if(currentValue!==""){
                result=parseFloat(currentValue);
                operator=buttonvalue;
                currentValue="";
            } 
            break;
        case"*":
            if(currentValue!==""){
                result=parseFloat(currentValue);
                operator=buttonvalue;
                currentValue="";
            } 
            break;
        case"/":
            if(currentValue!==""){
                result=parseFloat(currentValue);
                operator=buttonvalue;
                currentValue="";
            } 
            break; 
        case"=":
        if (currentValue!==""){
            calculate();
        }
        break;
        default:
            output.textContent="Invalid Button"+buttonvalue;
        }
    }
}

function calculate(){
    switch(operator){
        case"+":
            result+=parseFloat(currentValue);
        break;
        case"-":
            result-=parseFloat(currentValue);
        break;
        case"*":
            result*=parseFloat(currentValue);
        break;
        case"/":
            result/=parseFloat(currentValue);
        break;
    }
    currentValue="";
    operator="";
    display.value=result;
}