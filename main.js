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

const dropDownMenu = document.querySelector(".dropButton")


dropDownMenu.addEventListener("click",toggleDropDowns)

function toggleDropDowns()
{

    document.getElementById("myDropDowns").classList.toggle("show-drop-downs");
    let removeClass = document.querySelector("#myDropDowns")
    removeClass.classList.toggle("dropDowns")
}


/*
window.onclick = function (event)
{
    if (!event.target.matches(".dropButton"))
    {
        let dropDowns = document.querySelector(".dropDowns")
        for (let i = 0; i < dropDowns.length; i++)
        {
            let openDropDown = dropDowns[i];
            if (openDropDown.classList.contains("show"))
            {
                openDropDown.classList.remove("show")
            }
        }
    }
}

 */
