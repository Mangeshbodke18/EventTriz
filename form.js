
    
    function login(){
    const emailinp=document.getElementById("email").value;
    const numinp=document.getElementById("num").value;
    const error=document.getElementById("error");

    const validinp="";
    const validpass="";


    if((emailinp===validinp)&&(numinp===validpass)){

        document.getElementById("div1").style.display="flex";
        document.getElementById("div2").style.display="none";
       document.getElementById("email").value="";
    document.getElementById("num").value="";

    error.innerText="Please enter valid details";
    error.style.color="red";   
    }

    else{
        document.getElementById("div1").style.display="none";
        document.getElementById("div2").style.display="flex";

    }
    

}

function logout(){


    document.getElementById("div1").style.display="flex";
    document.getElementById("div2").style.display="none";

    document.getElementById("email").value="";
    document.getElementById("num").value="";
    document.getElementById("name").value="";
document.getElementById("feed").value="";

    error.innerText="";




}