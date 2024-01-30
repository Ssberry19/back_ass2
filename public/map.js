const coords = document.getElementsByClassName('coords')[0].innerText;
console.log(coords);
console.log(coords.split(", ")[0]);
mapboxgl.accessToken = 'pk.eyJ1Ijoic3NiZXJyeSIsImEiOiJjbHJ6YmVvaDAxaHhuMmtvNjIzZTNhNDV5In0.8SkBJAthrTZMBUZ2sOkc3A';
const map = new mapboxgl.Map({
container: 'map',
center: [ coords.split(", ")[1], coords.split(", ")[0].split(' ')[1 ]], 
zoom: 9
});