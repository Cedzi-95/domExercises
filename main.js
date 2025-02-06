// const element = document.createElement('div');
// element.textContent = "Hello world!";
// document.body.appendChild(element);

//övning 2
// let buttonElement = document.createElement("button");
// buttonElement.textContent = "Click here";
// document.body.appendChild(buttonElement);

//Övning 3
// let divElement = document.createElement("div");
// divElement.textContent = "this is a div";
// document.body.appendChild(divElement);

//Övning 4

// let olElement = document.createElement("ol");

// let foods = ["Tacos", "Hamburger", "Pancakes", "Meatballs"];

// foods.forEach(food => {
//     let liElement = document.createElement("li")
//     liElement.textContent = food;
//     olElement.appendChild(liElement);
// });
// document.body.appendChild(olElement);


//Övning 5

let countries = [
    { name: "France", region: "Europe", population: 64766868 },
    { name: "Sweden", region: "Europe", population: 10617537 },
    { name: "Japan", region: "Asia", population: 123235518 },
    { name: "China", region: "Asia", population: 1425627628 },
    { name: "Spain", region: "Europe", population: 47515521 },
    { name: "Brazil", region: "South America", population: 216529995 },
    { name: "Canada", region: "North America", population: 38810093 },
  ];
  
  let table = document.createElement("table");

  //skapa tabellhuvud
  let thead = document.createElement("tr");
  let headers = ["Name", "Region", "Population"];

  headers.forEach(headerText => {
    let th = document.createElement("th");
    th.textContent = headerText;
    thead.appendChild(th);
    thead.appendChild(th);
  });
  table.appendChild(thead);

  //lägg till data i tabellen
  countries.forEach(country => {
    let tr = document.createElement("tr");
    //skapa celler för varje land
    let nameTd = document.createElement("td");
    nameTd.textContent = country.name;
    
    let regionTd = document.createElement("td");
    regionTd.textContent = country.region;

    let populationTd = document.createElement("td");
    populationTd.textContent = country.population.toLocaleString();

    //lägg till cellerna i raden
    tr.appendChild(nameTd);
    tr.appendChild(regionTd);
    tr.appendChild(populationTd);

    //lägg till raden i tabellen
    table.appendChild(tr);
  });
  //lägg till tabellen i dokumentet
  document.body.appendChild(table);



