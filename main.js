let addressDataGlobal;

let address = "Tværtoften 19 4040 Jyllinge"




fetch('https://api.dataforsyningen.dk/adresser?q=' + address )
.then(response => response.json())
.then (addressData =>
{
    addressDataGlobal = addressData
     const addressId = addressData[0].id

    fetch('https://api.dataforsyningen.dk/bbrlight/enheder?adresseid=' + addressId)
        .then (response => response.json())
            .then (bbrData =>
            {
                console.log(bbrData[0].ENERGI_KODE)
            } )
})


// Consts

const dropDownMenu = document.querySelector(".dropButton")
const capitalButton = document.querySelector("#capital")







// Event listeners

dropDownMenu.addEventListener("click",toggleDropDowns)
capitalButton.addEventListener("click",displaySlideShow)



// Dropdown menu
function toggleDropDowns()
{

    document.getElementById("myDropDowns").classList.toggle("show-drop-downs");
    let removeClass = document.querySelector("#myDropDowns")
    removeClass.classList.toggle("dropDowns")
}

// Der er en smartere måde, at gøre dette på, har lavet en evenlistener to gange
// på den her knap, så det giver ikke så stor mening, men det virkede
// ikke nede i min anden function

// Primary slideshow
capitalButton.addEventListener("click", function ()
{
    const firstImage = document.querySelector("#first-image-primary")
    firstImage.style.display = "block";
})

function displaySlideShow ()
{
    console.log("Hello World")

    let html = "";

    html += `

<div class="container-for-slideshows">


    <div class= "image-text-container">
        <p class="image-text"> Det åbenlyse valg, alt spiller <br> - Hvis du har travlt og ikke gider bruge tid og penge på, at opgradere dit hus <br>  </p>
    </div>
       
    <div class="slideshow-container">

        <div class="slides-one fade" id="first-image-primary">
       
           <div class="energy"> 
           <div class="numbers"> 1 / 10</div>  
                <img src="Skærmbillede_2022-12-13_kl._11.01.21-removebg-preview.png" > 
           </div>
            
            <img class="image" src="customsize.jpeg">
                <div class="under-image-text-container">
                <div> Ejendommen</div>
                    <div>
                        <a class="price"> Kontantpris: <span class="price-in-numbers"> 4.644.000,- </span> </a>
                    </div>
                
                    
            </div>
        </div>

        <div class="slides-one fade">
           <div class="energy"> 
           <div class="numbers"> 2 / 10</div>  
            <img src="Skærmbillede_2022-12-13_kl._11.01.21-removebg-preview.png "> 
        </div>
            
            <img class="image" src="img 2 .jpeg">
            <div> Ejendommen</div>
                <div>
                        <a class="price"> Kontantpris: <span class="price-in-numbers"> 4.644.000,- </span> </a>
                    </div>
                
        </div>

        <div class="slides-one fade">
           <div class="energy">  
           <div class="numbers"> 3 / 10</div> 
            <img src="Skærmbillede_2022-12-13_kl._11.01.21-removebg-preview.png "> 
        </div>
            
            <img class="image" src="img 3 .jpeg">
            <div> Ejendommen</div>
                <div>
                        <a class="price"> Kontantpris: <span class="price-in-numbers"> 4.644.000,- </span> </a>
                    </div>
                
        </div>

        <div class="slides-one fade">
           <div class="energy">  
           <div class="numbers"> 4 / 10</div>
            <img src="Skærmbillede_2022-12-13_kl._11.01.21-removebg-preview.png "> 
        </div>
            
            <img class="image" src="img 4 .jpeg">
            <div> Ejendommen</div>
                <div>
                        <a class="price"> Kontantpris: <span class="price-in-numbers"> 4.644.000,- </span> </a>
                    </div>
                
        </div>

        <div class="slides-one fade">
           <div class="energy">  
           <div class="numbers"> 5 / 10</div> 
            <img src="Skærmbillede_2022-12-13_kl._11.01.21-removebg-preview.png "> 
        </div>
            
            <img class="image" src="img 5 .jpeg">
            <div> Stue </div>
                <div>
                        <a class="price"> Kontantpris: <span class="price-in-numbers"> 4.644.000,- </span> </a>
                    </div>
                
        </div>

        <div class="slides-one fade">
           <div class="energy"> 
           <div class="numbers"> 6 / 10</div>
            <img src="Skærmbillede_2022-12-13_kl._11.01.21-removebg-preview.png "> 
        </div>
            
            <img class="image" src="img 6 .jpeg">
            <div> Køkken </div>
                <div>
                        <a class="price"> Kontantpris: <span class="price-in-numbers"> 4.644.000,- </span> </a>
                    </div>
                
        </div>

        <div class="slides-one fade">
           <div class="energy">  
           <div class="numbers"> 7 / 10</div> 
            <img src="Skærmbillede_2022-12-13_kl._11.01.21-removebg-preview.png "> 
        </div>
            
            <img class="image" src="img 7 .jpeg">
            <div> Stue </div>
                <div>
                        <a class="price"> Kontantpris: <span class="price-in-numbers"> 4.644.000,- </span> </a>
                    </div>
                
        </div>

        <div class="slides-one fade">
           <div class="energy">   
             <div class="numbers"> 8 / 10</div>
            <img src="Skærmbillede_2022-12-13_kl._11.01.21-removebg-preview.png "> 
        </div>
            
            <img class="image" src="img 8.jpeg">
            <div> Værelse </div>
                <div>
                        <a class="price"> Kontantpris: <span class="price-in-numbers"> 4.644.000,- </span> </a>
                    </div>
                
        </div>

        <div class="slides-one fade">
           <div class="energy">  
           <div class="numbers"> 9 / 10</div> 
            <img src="Skærmbillede_2022-12-13_kl._11.01.21-removebg-preview.png "> 
        </div>
            
            <img class="image" src="img 9.jpeg">
            <div> Badeværelse </div>
                <div>
                        <a class="price"> Kontantpris: <span class="price-in-numbers"> 4.644.000,- </span> </a>
                    </div>
                
        </div>

        <div class="slides-one fade">
           <div class="energy">   
           <div class="numbers"> 10 / 10</div>
            <img src="Skærmbillede_2022-12-13_kl._11.01.21-removebg-preview.png "> 
        </div>
            
            <img class="image" src="img 10 .jpeg">
            <div> Plantegning </div>
                <div>
                        <a class="price"> Kontantpris: <span class="price-in-numbers"> 4.644.000,- </span> </a>
                    </div>
                
        </div>

        <a class="previous" onClick="plusSlidesOne(-1)">&#10094;</a>
        <a class="next" onClick="plusSlidesOne(1)">&#10095;</a>

    </div>
    
  </div>
  
        `;
    document.querySelector("#slideshow-append-primary").innerHTML = html;

    setTimeout(function (){

        console.log("hello World")

        let html = "";

        html += `
        
<div class="container-for-slideshows">

         <div class= "image-text-container">
            <p id ="image-text" > Har du overvejet et alternativ, med mulighed for stor fortjeneste?  <br> - Hvis du har lidt tid og tålmodighed og gerne vil ligge en lille ekstra investering <br> </p>
        </div>
        
   <div class="slideshow-container">

        <div class="slides-two fade" id="first-image-secondary">
           <div class="energy">   
                    <div class="numbers"> 1 / 10 </div>
               <img src="Skærmbillede_2022-12-13_kl._11.01.27-removebg-preview.png">
           </div> 
        </div>
          
            <img class="image" src="img 1.2.jpeg">
            <div class="under-image-text-container">
            <div> Ejendommen</div>
                    <div>
                        <a class="price"> Kontantpris: <span class="price-in-numbers"> 4.995.000,- </span> </a>
                    </div>
                
                    
            </div>
                    
            </div>
                
        </div>

        <div class="slides-two fade">
           <div class="energy">   
           <div class="numbers"> 2 / 10</div>
            <img src="Skærmbillede_2022-12-13_kl._11.01.27-removebg-preview.png"> 
        </div>
            
            <img class="image" src="img 2.2.jpeg">
                <div class="under-image-text-container">
                <div> Ejendommen</div>
                    <div>
                        <a class="price"> Kontantpris: <span class="price-in-numbers"> 4.995.000,- </span> </a>
                    </div>
                
            </div>
        </div>

        <div class="slides-two fade">
           <div class="energy">   
           <div class="numbers"> 3 / 10</div>
            <img src="Skærmbillede_2022-12-13_kl._11.01.27-removebg-preview.png"> 
        </div>
            
            <img class="image" src="img 3.2.jpeg">
                <div class="under-image-text-container">
                <div> Ejendommen</div>
                    <div>
                        <a class="price"> Kontantpris: <span class="price-in-numbers"> 4.995.000,- </span> </a>
                    </div>
                
                    
            </div>
        </div>

        <div class="slides-two fade">
           <div class="energy">  
           <div class="numbers"> 4 / 10</div> 
            <img src="Skærmbillede_2022-12-13_kl._11.01.27-removebg-preview.png"> 
        </div>
            
            <img class="image" src="img 4.2.jpeg">
                <div class="under-image-text-container">
                <div> Ejendommen</div>
                    <div>
                        <a class="price"> Kontantpris: <span class="price-in-numbers"> 4.995.000,- </span> </a>
                    </div>
                
                    
            </div>
        </div>

        <div class="slides-two fade">
           <div class="energy">  
           <div class="numbers"> 5 / 10</div> 
            <img src="Skærmbillede_2022-12-13_kl._11.01.27-removebg-preview.png"> 
        </div>
            
            <img class="image" src="img 5.2.jpeg">
                <div class="under-image-text-container">
                <div> Stue </div>
                    <div>
                        <a class="price"> Kontantpris: <span class="price-in-numbers"> 4.995.000,- </span> </a>
                    </div>
                
                    
            </div>
        </div>

        <div class="slides-two fade">
           <div class="energy"> 
           <div class="numbers"> 6 / 10</div>  
            <img src="Skærmbillede_2022-12-13_kl._11.01.27-removebg-preview.png"> 
        </div>
            
            <img class="image" src="img 6.2.jpeg">
                <div class="under-image-text-container">
                <div> Køkken </div>
                    <div>
                        <a class="price"> Kontantpris: <span class="price-in-numbers"> 4.995.000,- </span> </a>
                    </div>
                
                    
            </div>
        </div>

        <div class="slides-two fade">
           <div class="energy">  
           <div class="numbers"> 7 / 10</div> 
            <img src="Skærmbillede_2022-12-13_kl._11.01.27-removebg-preview.png"> 
        </div>
            
            <img class="image" src="img 7.2.jpeg">
                <div class="under-image-text-container">
                <div> Stue </div>
                    <div>
                        <a class="price"> Kontantpris: <span class="price-in-numbers"> 4.995.000,- </span> </a>
                    </div>
                
                    
            </div>
        </div>

        <div class="slides-two fade">
           <div class="energy"> 
           <div class="numbers"> 8 / 10</div>  
            <img src="Skærmbillede_2022-12-13_kl._11.01.27-removebg-preview.png"> 
        </div>
            
            <img class="image" src="img 8.2.jpeg">
                <div class="under-image-text-container">
                <div> Værelse </div>
                    <div>
                        <a class="price"> Kontantpris: <span class="price-in-numbers"> 4.995.000,- </span> </a>
                    </div>
                
                    
            </div>
        </div>

        <div class="slides-two fade">
           <div class="energy">   
           <div class="numbers"> 9 / 10</div>
            <img src="Skærmbillede_2022-12-13_kl._11.01.27-removebg-preview.png"> 
        </div>
            
            <img class="image" src="img 9.2 tag den her!!!.jpeg ">
                <div class="under-image-text-container">
                <div> Badeværelse </div>
                    <div>
                        <a class="price"> Kontantpris: <span class="price-in-numbers"> 4.995.000,- </span> </a>
                    </div>
                
                    
            </div>
        </div>

        <div class="slides-two fade">
           <div class="energy"> 
           <div class="numbers"> 10 / 10</div>  
            <img src="Skærmbillede_2022-12-13_kl._11.01.27-removebg-preview.png"> 
        </div>
            
            <img class="image" src="img 10.2.jpeg">
                <div class="under-image-text-container">
                <div> Plantegning </div>
                    <div>
                        <a class="price"> Kontantpris: <span class="price-in-numbers"> 4.995.000,- </span> </a>
                    </div>
                
                    
            </div>
        </div>

        <a class="previous" onClick="plusSlidesTwo(-1)">&#10094;</a>
        <a class="next" onClick="plusSlidesTwo(1)">&#10095;</a>


        
   <div class="container-for-slideshows">    
   <br>
    <article>
            <div class="image-text-container">
                <p class="image-text"> Med en investering på 400.000 kr har du mulighed for, at opgradere fra energimærke <img src="Skærmbillede_2022-12-13_kl._11.01.27-removebg-preview.png" width="22px" height="22px"> til <img src="Skærmbillede_2022-12-13_kl._11.01.21-removebg-preview.png" width="22px" height="22px">. Dette inkludere, implementering af vedvarende energi, isolering og nyt sæt vinduer. 
                  Med denne opgradering, vil salgsprisen på dit hus stige med ca. 41 procent.</p>
            </div>
            
            <p> 
                Med en hus værdi på: <span class="price-in-numbers"> 4.995.000,- </span> og en investering på 400.000. Vil du have brugt <span class="price-in-numbers red" > 5.395.000,-  </span>. Du vil desværre, have
                have brugt 75.100,- mere end på det åbenlyse valg.
                <br> 
                Men HOV, vi mangler de 41 %, så det vil sige, at salgsværdien stiger til 7.042.950,-. Nu kan vi derfor udregne den mulige fortjeneste: <span class="price-in-numbers green"> 2.398.950,- </span>.
                Som du ville gå glip af, ved at tage den nemme løsning.
                <br> 
                <br>
                Konklusionen er derfor så, hvis du har tiden og overskuddet til det, ville vi helt klart anbefale, at vælge et hus 
                med en ringere energi mærkning. Da du har i hovedstaden vil få en fortjeneste på omkring 2.5 millioner samtidig med du redder miljøet. På 'bare'
                et halvt års arbejde og en lille investering.  
            </p>
    </article>
   
    
</div> 
        
        `;


        document.querySelector("#slideshow-append-secondary").innerHTML = html;

        const firstImage = document.querySelector("#first-image-secondary")
        firstImage.style.display = "block";

    }, 5000)


}

let counter = 1;

slidingSlidesOne(counter);
function plusSlidesOne(n) {
    slidingSlidesOne(counter += n);
}
function currentSlideOne(n) {
    slidingSlidesOne(counter = n);
}

function slidingSlidesOne(n) {
    let i;
    let slides = document.querySelectorAll(".slides-one");
    if (n > slides.length) {counter = 1}
    if (n < 1) {counter = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[counter-1].style.display = "block";
    console.log(slides);
}


slidingSlidesTwo(counter);
function plusSlidesTwo(n) {
    slidingSlidesTwo(counter += n);
}
function currentSlideTwo(n) {
    slidingSlidesTwo(counter = n);
}

function slidingSlidesTwo(n) {
    let i;
    let slides = document.querySelectorAll(".slides-two");
    if (n > slides.length) {counter = 1}
    if (n < 1) {counter = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[counter-1].style.display = "block";
    console.log(slides);
}


