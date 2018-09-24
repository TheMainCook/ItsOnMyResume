let button = document.getElementById("buttonAJ");
var form = document.getElementById("formDiv");
let cbutton = document.getElementById("cbutton");
let sbutton = document.getElementById("sbutton");
let help = document.getElementById("help");


const turnOn = () => {
    let idb = document.querySelectorAll("button.idb");
    idb.forEach(d => {
       d.addEventListener("click",()=>{
           console.log(d.innerHTML);
           if ( document.getElementById(d.innerHTML).style.display == "none"){
            document.getElementById(d.innerHTML).style.display = "block";
           }
           else{
            document.getElementById(d.innerHTML).style.display = "none";
           }
       
       });
   });
};

const copyEle = () => {
    let idb = document.querySelectorAll("img.copy");
    idb.forEach(d => {
       d.addEventListener("click",()=>{
           console.log(d.alt);
           
            document.getElementById(d.alt).select();
           document.execCommand('copy');
       });
   });
};

const reset = () => {
    chrome.storage.local.set({"Jobs":[]});
    update();
};

const update = () => {
    chrome.storage.local.get("Jobs",function(result){
        let c = "";
        console.log(result);
        let num = 0;
        result.Jobs != undefined? 
result.Jobs.forEach(i =>{

    c +=  '<br><button class="idb btn btn-primary btn-block">'+i[0]+'</button>'+
    '<ul id ="'+i[0]+'" class="list-group" style="display: none" >'+
    '<li class="list-group-item"><textarea class="crust" id="'+(num)+'" rows=1 cols=18 readonly>'+i[0]+'</textarea> <img src="copy.png" alt="'+(num)+'" class="copy" width="25" height="25" align="right"></li>'+
    '<li class="list-group-item"><textarea class="crust" id="'+(num+1)+'" rows=1 cols=18 readonly>'+i[1]+'</textarea> <img src="copy.png" alt="'+(num+1)+'" class="copy" width="25" height="25" align="right"></li>'+
    '<li class="list-group-item"><textarea class="crust" id="'+(num+2)+'" rows=1 cols=18 readonly>'+i[2]+'</textarea> <img src="copy.png" alt="'+(num+2)+'" class="copy" width="25" height="25" align="right"></li>'+
    '<li class="list-group-item"><textarea class="crust" id="'+(num+3)+'" rows=1 cols=18 readonly>'+i[3]+'</textarea> <img src="copy.png" alt="'+(num+3)+'" class="copy" width="25" height="25" align="right"></li>'+
    '<li class="list-group-item"><textarea class="crust" id="'+(num+4)+'" rows=1 cols=18 readonly>'+i[4]+'</textarea> <img src="copy.png" alt="'+(num+4)+'" class="copy" width="25" height="25" align="right"></li>'+
    '</ul>'
    num +=5; 
})
        : reset() ;

        document.getElementById("AJcontent").innerHTML = c;
        turnOn();
        copyEle();
        });

};








update();

help.addEventListener("click",()=>{
    reset();
});
button.addEventListener("click",()=>{
    form.style.display = "block";
});
cbutton.addEventListener("click",()=>{
    form.style.display = "none";
});
sbutton.addEventListener("click",()=>{
    let company = document.getElementById("Company").value;
    let Position = document.getElementById("Position").value;
    let SD = document.getElementById("SD").value;
    let ED = document.getElementById("ED").value;
    let TA = document.getElementById("TA").value;

    let a = [company,Position, SD, ED, TA];

chrome.storage.local.get("Jobs",function(result){

    if (!result.Jobs){
        chrome.storage.local.set({"Jobs": [a]});
    }  

    var b = result.Jobs;
    b.push(a);
chrome.storage.local.set({"Jobs": b});
console.log(result.Jobs);
update();
});


form.style.display = "none";
})


