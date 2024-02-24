

document.addEventListener("DOMContentLoaded", ()=>{
    const selectElm = document.querySelector('select#countries')
    
    fetch('http://api.population.io:80/1.0/countries', {
        headers:{
            accept: 'application/json; charset=utf=8'
        }
    })
        .then((res)=>{
            return res.json()
        })
        .then((json)=>{
            printCountries(json.countries)
        })
    
    function printCountries(list){
        console.log(list)
        list.forEach((item)=>{
            const elem = document.createElement('option')
            elem.textContent = item;
            selectElm.appendChild(elem)
        });

    }

})