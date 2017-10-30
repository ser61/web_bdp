var marker;
var coords = {};

initMap = function (){
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -17.343778, lng: -63.248016},
        zoom: 15
    });

    marker = new google.maps.Marker({
        map: map,
        draggable: true,
        animation: google.maps.Animation.DROP,
        position: new google.maps.LatLng(-17.343778,-63.248016),

    });
    marker.addListener('click', toggleBounce);
}

//callback al hacer clic en el marcador lo que hace es quitar y poner la animacion BOUNCE
function toggleBounce() {
    if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
    } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
    }
}
