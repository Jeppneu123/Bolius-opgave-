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


