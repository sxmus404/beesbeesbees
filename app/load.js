function getAddress(stockist) {
    string = ''

    address = stockist["address"]
    for (const each in address) {
        if (address[each]) {
            string += address[each]   
            string += ", "
        }
    }

    string = string.slice(0, -2)

    return string
}

function getDate(stockist) {
    if (stockist["date"]["start"] && stockist["date"]["end"]) {
        return ` <div class="location-banner"> <img src="img/icons/calendar.svg" class="banner-icon"> ${stockist["date"]["start"]} - ${stockist["date"]["end"]} </div> `
    } else {
        return ``
    }
}

function fetchInfo() {
    fetch('./info.json').then(res => {
        if (!res.ok) { throw new Error(`Error - Status: ${res.status}`) }
        return res.json();
    })
    .then(data => {
        console.log(data)
        for (let i = 0; i < data["stockists"].length; i++) {
            stockist = data["stockists"][i]
            console.log(i, ": ",  stockist)
        
            document.getElementById("locations").innerHTML += `
            <div>

                <a class="locations-address" href="${stockist["location"]["google"]}" target="_blank">

                    <img src="./img/icons/location-pin.svg">

                    <div>
                        <p class="section-subtitle"> ${stockist["name"]} </p>
                        <p class="section-subtext"> ${getAddress(stockist)} </p>
                    </div>  

                </a>

                ${getDate(stockist)}

                <div class="locations-break"> </div>

            </div>
            `
        }
    })
    .catch(error => console.error('Error - Failed to fetch data: ', error))
}

fetchInfo()