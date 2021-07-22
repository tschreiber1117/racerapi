console.log( document.getElementsByTagName('h1')[1].innerHTML = 'New Text Alert!!') 

console.log( document.getElementsByTagName('h1'))

let color_button = document.getElementById('color-button')

let current_class = document.getElementsByTagName('h1')[0].getAttribute('class')



const racer_data = async () => {
    let response = await axios.get(`https://ergast.com/api/f1/2020/1/driverStandings.json`)
    console.log(response)

    let url = `https://ergast.com/api/f1/${season}/${round}/driverStandings.json`

    console.log(`This is the given name from f1 racer ${response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.givenName}`)
}

const form = document.querySelector('#standingDataForm');
console.log(form);
form.addEventListener('submit', ( event ) => {
    
  event.preventDefault();
  let query_season = document.querySelector('#season');
  let query_round = document.querySelector('#round');
  console.log(event);
  let season = event.path
  let round = event.path
  

}
)