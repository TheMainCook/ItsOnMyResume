let button = document.getElementById("buttonAJ");
var form = document.getElementById("formDiv");
let cbutton = document.getElementById("cbutton");
let sbutton = document.getElementById("sbutton");
let help = document.getElementById("help");




const reset = () => {
    chrome.storage.local.set({"Jobs":[]});
};

const update = () => {
    chrome.storage.local.get("Jobs",function(result){
        let c = "";
           console.log(result);
        
        
        document.getElementById("AJcontent").innerText = c;
        
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
});

update();
form.style.display = "none";
})


