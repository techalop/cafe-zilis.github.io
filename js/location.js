var map, marker;
function initMap() {
    map = new google.maps.Map(document.getElementById("map"),{
        center : {lat:33.967877, lng: -6.896971},
        zoom : 13
    }); 
    marker = new google.maps.Marker({
        position : {lat:33.967877, lng:-6.896971},
        map : map,
        title : 'Café Zilis',
        icon : "coffee-shop.png"
    });
}