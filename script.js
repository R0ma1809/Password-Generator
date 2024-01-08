let inputslider = document.getElementById("inputslider");
let slidervalue = document.getElementById("slidervalue");
let passBox = document.getElementById("passBox");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let number = document.getElementById("number");
let symbols = document.getElementById("symbols");
let genbtn = document.getElementById("genbtn");
let copyicon = document.getElementById("copyicon");



//showing input slider value

slidervalue.textContent= inputslider.value;
inputslider.addEventListener('input',()=>{
slidervalue.textContent= inputslider.value;
});

  genbtn.addEventListener('click',() => {
    passBox.value = generatepassword();
 })

 let lowerChars = "abcdefghijklmnopqrstuvwxyz";
 let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 let allnumbers = "0123456789";
 let allsymbols = "~!@#$%^&*";

 //function to genrate Password

 function generatepassword(){
    let genPassword="";
    let allchars = "";

    allchars +=lowercase.checked ? lowerChars : "";
    allchars +=uppercase.checked ? upperChars : "";
    allchars +=number.checked ? allnumbers : "";
    allchars +=symbols.checked ? allsymbols : "";

    if(allchars == "" || allchars.length == 0){
        return genPassword;
    }
    

    let i=1;
    while(i<= inputslider.value){
    genPassword += allchars.charAt(math.floor(math.random() * allchars.length));
     i++;
    }
    return genPassword;
 }

    copyicon.addEventListener('click', ()=>{
    if(passBox.value != "" || passBox.value.length >=1){
    navigator.clipboard.writeText(passBox.value);
    copyicon.innerText= "check";
    copyicon.title = "PassWord Copied";

      setTimeout(() => {
        copyicon.innerHTML = "content_copy";
        copyicon.title = "";
    }, 3000);
    }
 });

