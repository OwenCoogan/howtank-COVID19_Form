document.addEventListener('DOMContentLoaded', (event) => {
 
    window.onscroll = function() {myFunction()};

  
    const header = document.getElementById("header");
    const sticky = header.offsetTop;

 
    function myFunction() {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }


    const backgroundForm = document.querySelector('.pdf--bg');
    console.log(backgroundForm)
    
    const pdfModifierToolToggle= document.querySelector('.pdf--modifier-toggle');
    const pdfModifierToolmodal= document.querySelector('.pdf--modifier');

    const themePink = document.querySelector('.theme--pink');
    const themeGreen = document.querySelector('.theme--green');
    const themeYellow = document.querySelector('.theme--yellow');
  

    pdfModifierToolToggle.addEventListener("click",()=>{      
        pdfModifierToolmodal.classList.toggle('modifier--active');
       
  
    });

    themePink.addEventListener("click",()=>{      
        backgroundForm.style.backgroundColor  ="#ff5ea0"   
  
    });

    themeGreen.addEventListener("click",()=>{      
        backgroundForm.style.backgroundColor = "#1bce6e"
    });

    themeYellow.addEventListener("click",()=>{      
        backgroundForm.style.backgroundColor = "#ffd005"
    });


    const c = document.querySelector(".color-picker");
    
    c.addEventListener("input", function() {
        backgroundForm.style.backgroundColor = c.value;
    }, false); 


    


});