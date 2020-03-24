document.addEventListener('DOMContentLoaded', (event) => {
 
    window.onscroll = function() {stickyHeader()};

  
    const header = document.getElementById("header-custom");
    const sticky = header.offsetTop;
   
 
    function stickyHeader() {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }
    
    function downloadRedirectionManager() {
        if ( color.value === '#034b75' ){
            downloadPDF.innerText = "Télécharger le PDF par défault"
       }
   
       else {
           downloadPDF.innerText = "Télécharger votre PDF"
       }
   

      }

    /*APP main functionnalities */

    const backgroundForm = document.querySelector('.pdf--bg');
    
    const pdfModifierToolToggle= document.querySelector('.pdf--modifier-toggle');
    const pdfModifierToolmodal= document.querySelector('.pdf--modifier');

    const themePink = document.querySelector('.theme--pink');
    const themeGreen = document.querySelector('.theme--green');
    const themeYellow = document.querySelector('.theme--yellow');
    const themeDefault = document.querySelector('.theme--default');
    const downloadPDF = document.querySelector('.pdf--modifier-DL');
  

    pdfModifierToolToggle.addEventListener("click",()=>{      
        pdfModifierToolmodal.classList.toggle('modifier--active');
    });

    themePink.addEventListener("click",()=>{      
        const pinkColor= "#ff5ea0";
        backgroundForm.style.backgroundColor = pinkColor;
        color.value=pinkColor;
        downloadRedirectionManager();   
    });

    themeGreen.addEventListener("click",()=>{   
        const greenColor="#1bce6e"   
        backgroundForm.style.backgroundColor = greenColor;
        color.value=greenColor;
        downloadRedirectionManager();
    });

    themeYellow.addEventListener("click",()=>{      
        const yellowColor= "#ffd005";
        backgroundForm.style.backgroundColor = yellowColor;
        color.value=yellowColor;
        downloadRedirectionManager();
    });

    themeDefault.addEventListener("click",()=>{      
        const blueColor= "#034b75";
        backgroundForm.style.backgroundColor = blueColor;
        color.value=blueColor;
        downloadRedirectionManager();
    });

    const color = document.querySelector(".color-picker");

    color.addEventListener("input", function() {
        backgroundForm.style.backgroundColor = color.value;
        downloadRedirectionManager();
    }, false); 


   


    
    downloadPDF.addEventListener("click",()=>{      
        if ( color.value === '#034b75' ){        
            window.location.href = "http://www.w3schools.com";
       }   
       else if( color.value != '#034b75' ){
           window.print();
       }
    });


    downloadRedirectionManager();

    const styleSheet =document.querySelector('style')
    const pageCommands = styleSheet[styleSheet.length - 1];
});