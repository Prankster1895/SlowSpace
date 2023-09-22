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
            console.log(c,k,j,p)


            // Disable the radio button to prevent further clicks
            btncounter.disabled = true;
            if((c+k+j+p)==15){
            
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

            if((c+k+j+p)==15){
            
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

            if((c+k+j+p)==15){
            
                SubmitTest(c,k,j);
            
            }
        }
    });
    
        console.log("Hello");
    
});
let p=0;
const btncount0=document.getElementsByClassName("0")
const btncounter0=Array.from(btncount0);
btncounter0.forEach((btncounter0, index) => {
    btncounter0.addEventListener("click", () => {
        // Check if the radio button has not been clicked before
        if (!btncounter0.disabled) {
            // Increment the click count for this radio button
            p++;

            // Disable the radio button to prevent further clicks
            btncounter0.disabled = true;

            if((c+k+j+p)==15){
            
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

age1=document.getElementById("radioNoLabel11")
age1.addEventListener("click", () => {
document.getElementById("IQSection").addEventListener("click", () => {
    window.location.href="age9.html";
});
});

age2=document.getElementById("radioNoLabel12")
age2.addEventListener("click", () => {
    document.getElementById("IQSection").addEventListener("click", () => {
        window.location.href="age12.html";
    });
    });

    age3=document.getElementById("radioNoLabel13")
    age3.addEventListener("click", () => {
        document.getElementById("IQSection").addEventListener("click", () => {
            window.location.href="age15.html";
        });
        });


$('#modal-body').on('show.bs.modal', function (e) {
    SubmitTest(c,k);
});
});
