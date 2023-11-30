let cars=[];

function addCar(brand,model,year){
    cars.push({
        brand : brand.value,
        model:model.value,
        year:year.value
    });
    loadMyCar();
    brand.value = "";
    model.value = "";
    year.value = "";
}

function loadMyCar(){
    let result="";

    result += "<tr>";
    result += "<th>Brand</th>";
    result += "<th>Model</th>";
    result += "<th>Year</th>";
    result += "</tr>";

    //Way 1 to traverse through cars array
   /* for(let i=0 ; i <cars.length ; i++)
    {
        result += "<tr>";
        result += "<td>" + cars[i].brand + "</td>";
        result += "<td>" + cars[i].model + "</td>";
        result += "<td>" + cars[i].year + "</td>";
        result += "</tr>";
    }*/

    //Way 2 to traverse through cars array
    cars.forEach(Element =>
    {
        result += "<tr>";
        result += "<td>" + Element.brand + "</td>";
        result += "<td>" + Element.model + "</td>";
        result += "<td>" + Element.year + "</td>";
        result += "</tr>";
    });

    result += "<h3>Total number of cars :" + cars.length + "</h3>";
    document.getElementById("carTable").innerHTML=result;

}