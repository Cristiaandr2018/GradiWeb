Bogota = "https://api.openweathermap.org/data/2.5/weather?q=Bogota&appid=dcd769968e53f53b5168da6777d0dbb6";
Lyon = "https://api.openweathermap.org/data/2.5/weather?q=Lyon&appid=dcd769968e53f53b5168da6777d0dbb6";
Paris = "https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=dcd769968e53f53b5168da6777d0dbb6";

window.onload = function () {
    ConsumeForecastingService('TemperaturaBogota', 'ClimaBogota', 1);
    ConsumeForecastingService('paris', 'ClimaParis', 0);
    ConsumeForecastingService('lyon', 'ClimaLyon', 2);
};

var ConsumeForecastingService = function (tagId, tagIdImage, city) {

    var request = new XMLHttpRequest();

    switch (city) {
        case 1:
            request.open('GET', Bogota, true);
            break;
        case 2:
            request.open('GET', Lyon, true);
            break;
        default:
            request.open('GET', Paris, true);
            break;
    }

    request.onload = function () {

        var obj = JSON.parse(this.response)
        console.log(obj);

        var temperature = Math.trunc(obj.main.temp - 273.15);
        document.getElementById(tagId).innerHTML = temperature;
        AssignImageOfTheDay(temperature, tagIdImage);
    }
    if (request.status == 200) {
        console.log("error");
    }
    request.send();
}

var AssignImageOfTheDay = function (temperature, tagId) {

    if (temperature < 5) {
        document.getElementById(tagId).src = "./img/frio.png";    
    } 
    if (temperature > 6 && temperature < 12) {
        document.getElementById(tagId).src = "./img/relampagos.png";    
    } 
    if (temperature > 12 && temperature < 22) {
        document.getElementById(tagId).src = "./img/parcialmente-nublado.png";    
    } 
    if (temperature > 22 ) {
        document.getElementById(tagId).src = "./img/sol.png";    
    } 
    
}