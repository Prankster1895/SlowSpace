let c=0,p=0;
document.addEventListener("DOMContentLoaded", function () {

const btncount=document.getElementsByClassName("Slow")
const btncounter=Array.from(btncount);
btncounter.forEach((btncounter, index) => {
    btncounter.addEventListener("click", () => {
        // Check if the radio button has not been clicked before
        if (!btncounter.disabled) {
            // Increment the click count for this radio button
            c++;
            console.log(c,k,j)


            // Disable the radio button to prevent further clicks
            btncounter.disabled = true;
            if((c+k+j)==15){
            
                SubmitTest(c,k,j);
            
            }
            
                

            
        }
    });
    
        console.log("Hello");
    
});
let k=0;
const btncountMod=document.getElementsByClassName("Moderately")
const btncounterMod=Array.from(btncountMod);
btncounterMod.forEach((btncounterMod, index) => {
    btncounterMod.addEventListener("click", () => {
        // Check if the radio button has not been clicked before
        if (!btncounterMod.disabled) {
            // Increment the click count for this radio button
            k++;
            console.log(c,k,j)


            // Disable the radio button to prevent further clicks
            btncounterMod.disabled = true;

            if((c+k+j)==15){
            
                SubmitTest(c,k,j);
            
            }
        }
    });
    
        console.log("Hello");
    
});

let j=0;
const btncountNot=document.getElementsByClassName("Not")
const btncounterNot=Array.from(btncountNot);
btncounterNot.forEach((btncounterNot, index) => {
    btncounterNot.addEventListener("click", () => {
        // Check if the radio button has not been clicked before
        if (!btncounterNot.disabled) {
            // Increment the click count for this radio button
            j++;
            console.log(c,k,j)


            // Disable the radio button to prevent further clicks
            btncounterNot.disabled = true;

            if((c+k+j)==15){
            
                SubmitTest(c,k,j);
            
            }
        }
    });
    
        console.log("Hello");
    
});


function SubmitTest(c,k,j){
    let Submit=document.getElementById("Test");
    Submit.addEventListener("click", () => {
        if(c>k && c>j){
            console.log("Slow Learner");
            document.getElementById("modalText").innerText = "Slow Learner";
        }
        else if(k>c && k>j){
            console.log("Moderately Slow Learner");
            document.getElementById("modalText").innerText = "Moderately Slow Learner";
            
        }
        else if(j>c && j>k){
            document.getElementById("modalText").innerText = "Not a Slow learner";
        }
        else{
            document.getElementById("modalText").innerText = "Can't be determined. Have to undergo further screening.";

        }
        
    });

}

const modal = new bootstrap.Modal(document.getElementById('AgeChecker'));
document.getElementById("TestResults").addEventListener("click", () => {
    modal.show();
});

document.getElementById("IQSection").addEventListener("click", () => {
    window.location.href="IQTest.html";
});


$('#modal-body').on('show.bs.modal', function (e) {
    SubmitTest(c,k);
});
});
