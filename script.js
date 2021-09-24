'use strict'



// CURRENT LOCATION

const tbody = document.querySelector('tbody');
const modal = document.querySelector('.modal');
const closeM = document.querySelector('.close-modal');
    

let myLat;
let myLon;

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        // alert("Geolocation is not supported by this browser.");
         console.log('nemoze')
    }
}

function showPosition(position) {
    myLat = +position.coords.latitude;
    myLon = +position.coords.longitude;
    renderPage();

    // console.log(myLat)
    // console.log(myLon)
}


function renderPage() {
    console.log('renderpage')
    fetch('data.json')
    .then(res => res.json())
    .then(dta => {
        const data = dta.aircraft;
        const flightsAbove = data
        .filter(fl => {
            // Filter flights in 120NM radius above
            return fl.lat >= myLat -2  && fl.lat <= myLat + 2 && fl.lon >= myLon -2  && fl.lon <= myLon + 2
        })
        const sortedByAltitude = flightsAbove.sort((a,b) => b.alt_geom - a.alt_geom);

        sortedByAltitude.forEach(fl => {
            const flight = document.createElement('tr');
            flight.classList.add('flight');

            const headingCell = document.createElement('td');
            headingCell.setAttribute('class', 'cell heading');
            const icon = document.createElement('img');
            icon.setAttribute('src', './imgs/w.png');
            icon.setAttribute('src', 
            `${fl.track >= 180 && fl.track <= 360 ? './imgs/w.png' : './imgs/e.png' }`)

            const heading = document.createElement('p');
            heading.textContent = `${fl.track >= 180 && fl.track <= 360 ? fl.track + ' W' : fl.track + ' E' }`

            const altitudeCell = document.createElement('td');
            altitudeCell.setAttribute('class', 'cell altitude');
            altitudeCell.textContent = `${fl.alt_geom} ft`;

            const flNumCell = document.createElement('td');
            flNumCell.setAttribute('class', 'cell flnum');
            flNumCell.textContent = fl.flight;

            tbody.append(flight);
            flight.append(headingCell);
            headingCell.append(icon);
            headingCell.append(heading)
            flight.append(altitudeCell)
            flight.append(flNumCell)


            flight.addEventListener('click', () => {
                modal.classList.add('show')
            })
        })

    }).catch((error) => {
        console.error(error);
      });
}

getLocation()
// renderPage()


closeM.addEventListener('click', ()=> {
    modal.classList.remove('show')
});












