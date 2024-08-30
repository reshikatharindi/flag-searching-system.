let tblCountries=document.getElementById("tblCountries");
let tableBody=`<tr>
            <th><h1> Name<h1></th>
            <th><h1>Falg<h1></th>
        </tr>`;
    
fetch("https://restcountries.com/v3.1/all")
.then((res)=>res.json())
.then(data=>{
data.forEach(element=> {
tableBody+=`<tr>
          <td>
          <h2>${element.name.common}</h2>
          
          <p><br>Official Name : ${element.name.official}
         <br> Region : ${element.region}<br>
          Population : ${element.population}<br>
         </p>

          <a class="btn btn-outline-primary" href="${element.maps.googleMaps}">Go To Map</a>

          </td>
          <td><img src="${element.flags.png}" alt=""></td>   </tr>`
        console.log(element.name.common);
    });
    tblCountries.innerHTML=tableBody;
})

function searchCountry(){
    let userInput=document.getElementById("txtInput").value;

    let flagImg=document.getElementById("flagImg");
    let name=document.getElementById("name");
    let officialName=document.getElementById("officialName");
    let region=document.getElementById("region");
    let population=document.getElementById("population");

    fetch(`https://restcountries.com/v3.1/name/${userInput}`)
    .then(res=>res.json())
    .then(data=>{

        data.forEach(obj=>{
            console.log(obj);
            flagImg.src=obj.flags.png
            name.innerText=obj.name.common
            officialName.innerText=obj.name.official
            region.innerText=obj.region
            population.innerText=obj.population

        })
    })

}
