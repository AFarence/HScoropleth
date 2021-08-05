mapboxgl.accessToken = 'pk.eyJ1IjoiYWZhcmVuY2UiLCJhIjoiY2tpaWNmZXNrMGF1bzJzcW1uMGRiZnRpbCJ9.uopR-f-9VC4hwT7aEGQpxg';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/afarence/ckry8lla501k217s132e0j3pc',
    zoom: 3.5,
    center: [-95, 40.725]
});
map.on('load', function(){
    map.addLayer({
        'id':'HSdata',
        'type':'fill',
        'source': {
            'type':'geojson',
            'data':'hs_data.geojson'
        },
        'paint':{
            'fill-color':'#00FF00',
            'fill-opacity': ['interpolate',['linear'],['get','Total_Num_of_students'],
0,0,
38142157,.10]
//            'fill-opacity': .25

        }
    })
})


