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
            downloadPDF.style.display="none"
            downloadPDFDefault.style.display="block"
       }
   
       else {
            downloadPDF.style.display="block"
            downloadPDFDefault.style.display="none"
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
    const downloadPDF = document.querySelector('.pdf--modifier-DL-custom');
    const downloadPDFDefault = document.querySelector('.pdf--modifier-DL-default');
  

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
         if( color.value != '#034b75' ){
           window.print();
       }
    });


    downloadRedirectionManager();

/* Upload image */
 

const photo = document.getElementById('file');

const imgHolderCustom = document.querySelector('.uploaded--image');
const imgHolderDefault = document.querySelector('.default-images');
const inputs = document.querySelectorAll( '#file' );
const imgDlIcon = document.querySelector('.icon--holder');

const dropdownBtnImageList = document.querySelector('.toggle--dropdown');
const dropdownImageList = document.querySelector('.input-list');

Array.prototype.forEach.call( inputs, function( input )
{
	const label	 = input.nextElementSibling,
		labelVal = label.innerHTML;
        i=0;
	input.addEventListener( 'change', function( e )
	{
        imgHolderCustom.classList.add('img--custom')
        imgHolderDefault.style.display='none';
        imgDlIcon.style.display='none';
        dropdownImageList.style.bottom='-60px';
        i++;
        downloadPDFDefault.style.display='none';
        downloadPDF.style.display='block';
        if ( i <= 2 ){
            var fileName = '';
            if( this.files && this.files.length > 1 )
                fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
            else
                fileName = e.target.value.split( '\'' ).pop();
    
            if( fileName )
                label.querySelector( 'span' ).innerHTML = fileName;
            else
                label.innerHTML = labelVal;
                
            const holder = document.getElementById('imageholder');   
                    var input = inputs[0];
            var fReader = new FileReader();
            fReader.readAsDataURL(input.files[0]);
            fReader.onloadend = function(event){
                holder.src = event.target.result;
            }
            console.log(i);
            clone = input.cloneNode(true);
            cloneLabel = label.cloneNode(true);
            clone.classList.add('img--custom'+i)
            document.body.appendChild(clone);
            console.log(clone)
            
        }
        else{
            alert('vous n\'avez plus de place!')
        }


        
        
		
	});
});



dropdownBtnImageList.addEventListener("click",()=>{      
    dropdownImageList.classList.toggle('active')

});


});