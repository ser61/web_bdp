var marker;
var markerS;
var markerContacto;
initMap = function (){
    mapContacto = new google.maps.Map(document.getElementById('mapContacto'), {
        center: {lat: -17.343778, lng: -63.248016},
        zoom: 15
    });

    marker = new google.maps.Marker({
        map: mapContacto,
        draggable: true,
        animation: google.maps.Animation.DROP,
        position: new google.maps.LatLng(-17.343778,-63.248016),

    });
    marker.addListener('click', toggleBounceContacto);
}

function montero() {
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

function santaCruz() {
    mapS = new google.maps.Map(document.getElementById('map-s'), {
        center: {lat: -17.775419, lng: -63.183382},
        zoom: 15
    });

    markerS = new google.maps.Marker({
        map: mapS,
        draggable: true,
        animation: google.maps.Animation.DROP,
        position: new google.maps.LatLng(-17.775419,-63.183382),

    });
    markerS.addListener('click', toggleBounce2);
}

//callback al hacer clic en el marcador lo que hace es quitar y poner la animacion BOUNCE
function toggleBounce() {
    if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
    } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
    }
}

function toggleBounce2() {
    if (markerS.getAnimation() !== null) {
        markerS.setAnimation(null);
    } else {
        markerS.setAnimation(google.maps.Animation.BOUNCE);
    }
}

function toggleBounceContacto() {
    if (markerContacto.getAnimation() !== null) {
        markerContacto.setAnimation(null);
    } else {
        markerContacto.setAnimation(google.maps.Animation.BOUNCE);
    }
}