window.onload = function () {
    document.getElementById("form1")
        .addEventListener("submit", function (event) {
            event.preventDefault();
            getWeather();
        });
}

function getWeather() {
    var enteredCity = document.getElementById('userCity').value;

    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=' + enteredCity + '&appid=3c6464a2f6bcbeecf2f55441edb741ce', false);
    //xhr.open('GET', 'mock.json', false);
    xhr.send();

    if (xhr.status !== 200) {
        var pagefnerror = doT.template(document.getElementById('errortmpl').text, undefined);
        var error = {}
        if (xhr.status == 404) {
            error = {
                text: xhr.statusText,
                picurl: "http://razborka-rio.ru/upload/404.jpg",
                code: xhr.status
            }
        } else {
            error = {
                text: xhr.statusText,
                picurl: "https://i.ytimg.com/vi/Qjlj4b27dlo/sddefault.jpg",
                code: xhr.status

            }
        }

        document.getElementById('content').innerHTML = pagefnerror(error);

    } else {
        var response = JSON.parse(xhr.responseText);
        var data = {
            city: response.name,
            temp: (response.main.temp - 273.15).toFixed(2),
            windSpeed: response.wind.speed,
            sky: response.weather[0].description,
            pressure: response.main.pressure,
            humidity: response.main.humidity,
        }

        var pagefn = doT.template(document.getElementById('pagetmpl').text, undefined);
        document.getElementById('content').innerHTML = pagefn(data);

    }


}