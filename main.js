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

// Evenlisteners

dropDownMenu.addEventListener("click",toggleDropDowns)
capitalButton.addEventListener("click",displaySlideShow)

function toggleDropDowns()
{

    document.getElementById("myDropDowns").classList.toggle("show-drop-downs");
    let removeClass = document.querySelector("#myDropDowns")
    removeClass.classList.toggle("dropDowns")
}


capitalButton.addEventListener("click", function ()
{
    const firstImage = document.querySelector("#firstImage")
    firstImage.style.display = "block";
})

function displaySlideShow ()
{
    console.log("Hello World")

    let html = "";

    html += `
    <div class= "easy-container">
        <p id ="easy-choice" > Det åbenlyse valg <br> Kontantpris: <span> 4.644.000 </span> </p>
    </div>

    <div class="slideshow-container">

        <div class="slides fade" id="firstImage">
            <div class="numbers"> 1 / 10</div>
            <img class="image" src="customsize.jpeg">
                <div class="text"> Ejendommen</div>
        </div>

        <div class="slides fade">
            <div class="numbers"> 2 / 10</div>
            <img class="image" src="img 2 .jpeg">
                <div class="text"> Ejendommen</div>
        </div>

        <div class="slides fade">
            <div class="numbers"> 3 / 10</div>
            <img class="image" src="img 3 .jpeg">
                <div class="text"> Ejendommen</div>
        </div>

        <div class="slides fade">
            <div class="numbers"> 4 / 10</div>
            <img class="image" src="img 4 .jpeg">
                <div class="text"> Ejendommen</div>
        </div>

        <div class="slides fade">
            <div class="numbers"> 5 / 10</div>
            <img class="image" src="img 5 .jpeg">
                <div class="text"> Stue</div>
        </div>

        <div class="slides fade">
            <div class="numbers"> 6 / 10</div>
            <img class="image" src="img 6 .jpeg">
                <div class="text"> Køkken</div>
        </div>

        <div class="slides fade">
            <div class="numbers"> 7 / 10</div>
            <img class="image" src="img 7 .jpeg">
                <div class="text"> Stue</div>
        </div>

        <div class="slides fade">
            <div class="numbers"> 8 / 10</div>
            <img class="image" src="img 8.jpeg">
                <div class="text"> Værelse</div>
        </div>

        <div class="slides fade">
            <div class="numbers"> 9 / 10</div>
            <img class="image" src="img 9.jpeg">
                <div class="text"> Badeværelse</div>
        </div>

        <div class="slides fade">
            <div class="numbers"> 10 / 10</div>
            <img class="image" src="img 10 .jpeg">
                <div class="textImg"> Plantegning</div>
        </div>

        <a class="previous" onClick="plusSlides(-1)">&#10094;</a>
        <a class="next" onClick="plusSlides(1)">&#10095;</a>

    </div>
  
        `;
    document.querySelector("#slideshow-append-primary").innerHTML = html;

    setTimeout(function (){

        console.log("hello World")

        let html = "";

        html += `
        
         <div class= "easy-container">
            <p id ="easy-choice" > Et Alternativ <br> Kontantpris: <span> 4.995.000 </span> </p>
        </div>
        `;
        document.querySelector("#slideshow-append-secondary").innerHTML = html;

    }, 3000)
}

let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.querySelectorAll(".slides");
    let dots = document.querySelectorAll(".dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    console.log(slides);

    dots[1].className += "active";
}