console.log('trafic')

// const t1 =  {"hex":"84b802","type":"mode_s","r":"JA216J","t":"E170","alt_baro":14775,"squawk":"7352","rr_lat":33.8,"rr_lon":129.7,"alert":0,"spi":0,"mlat":[],"tisb":[],"messages":11857556,"seen":1.2,"rssi":-8.1}

// const t2 = {"hex":"510143","type":"mode_s","flight":"BRU734  ","r":"EW-555PO","t":"E295","alt_baro":13325,"gs":262.0,"ias":209,"tas":260,"mach":0.400,"oat":5,"tat":14,"track":357.01,"track_rate":0.00,"roll":0.00,"mag_heading":351.04,"true_heading":356.84,"baro_rate":2752,"geom_rate":2848,"squawk":"3145","emergency":"none","category":"A3","nav_qnh":1013.6,"nav_altitude_mcp":19008,"nav_altitude_fms":19008,"nav_modes":["autopilot","vnav","tcas"],"rr_lat":40.0,"rr_lon":43.9,"version":2,"nic_baro":0,"nac_p":0,"nac_v":0,"sil":0,"sil_type":"persample","gva":0,"sda":2,"alert":0,"spi":0,"mlat":[],"tisb":[],"messages":23669131,"seen":0.2,"rssi":-1.6}


// console.log(t2)

//=======================================================================================

// CURRENT LOCATION
// let loc;

// function getLocation() {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(showPosition);
//     } else {
//         loc = "Geolocation is not supported by this browser.";
//     }
// }

// function showPosition(position) {
//     // console.log(position);
//     loc  = "Latitude: " + position.coords.latitude + " Longitude: " + position.coords.longitude;
//     console.log(loc)
// }

// getLocation()


//=======================================================================================

// modal
const flights = document.querySelectorAll('.flight');
const modal = document.querySelector('.modal');
const closeM = document.querySelector('.close-modal');


flights.forEach(el => {
    el.addEventListener('click', () => {
        modal.classList.add('show')
        console.log(el.querySelector('.flnum').textContent)
    })

    
})

closeM.addEventListener('click', ()=> {
    modal.classList.remove('show')
})



// pagination
const buttons = document.querySelectorAll('.pagination p');

buttons.forEach(el => {
    el.addEventListener('click', () => {
       if(el.className === 'active') el.classList.toggle('active');
       else {
           buttons.forEach(el => el.classList.remove('active'))
           el.classList.add('active')
       }
    })
})