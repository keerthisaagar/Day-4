const xhr = new XMLHttpRequest ();
xhr.open("GET","https://restcountries.com/v3.1/all");
xhr.send();
xhr.responseType = "json";
xhr.onload = function displayResult (){
    const countries = xhr.response;
    for(let index in countries){
        console.log(countries[index].name.common);
        console.log(countries[index].flags);
    }
};