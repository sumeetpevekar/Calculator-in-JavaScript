// alert();
var result = document.getElementById("result");

function input(x){
    // alert();
    // alert(x)
    result.value+=x;
}
function calc(){
    // alert()
    var output = eval(result.value);
    result.value = output;
}
function cancel(){
    result.value = "";
}

function even(){
    var a = result.value;
    var print = document.getElementById("alert");
    if(a % 2 ==0){
        result.value="";
        print.innerHTML="even number"
        setTimeout(() => {
            print.innerHTML="";
        }, 5000);
    }else{
        result.value="";
        print.innerHTML="odd number"
        setTimeout(() => {
            print.innerHTML="";
        }, 5000);
    }
}
function odd(){
    var a = result.value;
    var print = document.getElementById("alert");
    if(a % 2!=0){
        print.innerHTML="odd number"
        result.value="";
        setTimeout(() => {
            print.innerHTML="";
        }, 5000);
    }else{
        result.value="";
        print.innerHTML="even number"
        setTimeout(() => {
            print.innerHTML="";
        }, 5000);
    }
}