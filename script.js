var Info = {};

function map(id){
  switch(id) {
    case 1:
      Info.glmark = 'icons/marker_icons/icon1.png';
      Info.gllok = 'locations/lokacije_wifi.json';
      break;
    case 2:
      Info.glmark = 'icons/marker_icons/icon2.png';
      Info.gllok = 'locations/lokacije_bike.json';
      break;      
    case 3:
      Info.glmark = 'icons/marker_icons/icon3.png';
      Info.gllok = 'locations/lokacije_knjiz.json';
      break;
    case 4:
      Info.glmark = 'icons/marker_icons/icon4.png';
      Info.gllok = 'locations/lokacije_wifi.json';
      break;  
  }
  return Info;  
}

var info2 = map(1);
var url = info2.glmark;
var mappp = info2.gllok;

async function initMap() {

  const response2 = await fetch('dizajn.json');
  const data2 = await response2.json();
  const styledMapType = new google.maps.StyledMapType(
    data2,
    { name: "Styled Map" }
  );

  const response = await fetch(mappp);
  const data = await response.json();
  // //const lon1 = data.result.records[0].Longitude;
  // //const lat1 = data.result.records[0].Latitude;
  // const obj1 = {lat: lat1, lng: lon1};
  // console.log(obj1);
  const start_location = { lat: 45.81295836043709, lng: 15.974741839933875};
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: start_location,
    disableDefaultUI: true,
    keyboardShortcuts: false
  });

  map.mapTypes.set("styled_map", styledMapType);
  map.setMapTypeId("styled_map");

  const infowindow = new google.maps.InfoWindow({
    content: "contentString",
  });

  for (let i = 0; i < data.result.total; i++){
      const name = data.result.records[i].Naziv;
      const lon2 = data.result.records[i].Longitude;
      const lat2 = data.result.records[i].Latitude;
      const marker_location = { lat: lat2, lng: lon2};

      const infowindow = new google.maps.InfoWindow({
        content: "<h3>" + name + "</h3>",
      });
    
      const marker = new google.maps.Marker({
          position: marker_location,
          map: map,
          icon: {
            url
          }
      });
    
      marker.addListener("click", () => {
        infowindow.open({
          anchor: marker,
          map,
          shouldFocus: false,
        });
      });

  }
}
  
window.initMap = initMap;