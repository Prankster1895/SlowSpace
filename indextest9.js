let c=0,p=0;
document.addEventListener("DOMContentLoaded", function () {

    if(document.getElementsByClassName("MCorrect")){
const btncount=document.getElementsByClassName("MCorrect")
const btncounter=Array.from(btncount);
btncounter.forEach((btncounter, index) => {
    btncounter.addEventListener("click", () => {
        // Check if the radio button has not been clicked before
        if (!btncounter.disabled) {
            // Increment the click count for this radio button
            c++;
            p++;
            console.log(c,k,p)


            // Disable the radio button to prevent further clicks
            btncounter.disabled = true;
            SubmitTest(c,k)

            }
    });
    
        console.log("Hello");
    
});}

if(document.getElementsByClassName("CheckerW")){
    const btncounti=document.getElementsByClassName("CheckerW")
    const btncounteri=Array.from(btncounti);
    btncounteri.forEach((btncounteri, index) => {
        btncounteri.addEventListener("click", () => {
            if (!btncounteri.disabled){
                p++;
                console.log(c,k,p);
            
            btncounteri.disabled = true;
            SubmitTest(c,k,p);
            }

        });
    });

}
let k=0;
const btncountMod=document.getElementsByClassName("GCorrect")
const btncounterMod=Array.from(btncountMod);
btncounterMod.forEach((btncounter, index) => {
    btncounter.addEventListener("click", () => {
        // Check if the radio button has not been clicked before
        if (!btncounter.disabled) {
            // Increment the click count for this radio button
            k++;
            p++;
            console.log(c,k,p)


            // Disable the radio button to prevent further clicks
            btncounter.disabled = true;
            SubmitTest(c,k,p)

        }
    });
    
        console.log("Hello");
    
});

let t=0;
const btncountModL=document.getElementsByClassName("Correct")
const btncounterModL=Array.from(btncountModL);
btncounterModL.forEach((btncounterModL, index) => {
    btncounterModL.addEventListener("click", () => {
        // Check if the radio button has not been clicked before
        if (!btncounterModL.disabled) {
            // Increment the click count for this radio button
            t++;
            p++;
            console.log(c,k,p)


            // Disable the radio button to prevent further clicks
            btncounterModL.disabled = true;
            SubmitTest(c,k,p)

        }
    });
    
        console.log("Hello");
    
});


function SubmitTest(c,k,p){
    let Submit=document.getElementById("Test");
    Submit.addEventListener("click", () => {
        if(c<k && p==12){
            console.log("Weak In Maths");
            window.location.href="math9.html";
        }
        if(k<c && p==12){
            console.log("Weak In English");
            window.location.href="english9.html";

           
            
        }
        
    });

}


$('#modal-body').on('show.bs.modal', function (e) {
    SubmitTest(c,k);
});
});