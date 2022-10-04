async function initMap() {

  const url = "../markeri/marker4.svg";

  const response2 = await fetch('../dizajn.json');
  const data2 = await response2.json();
  const styledMapType = new google.maps.StyledMapType(
    data2,
    { name: "Styled Map" }
  );

  const response = await fetch("../lokacije/lokacije4.json");
  const data = await response.json();
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
      const name = data.result.records[i].detaljni_opis_lokacije;
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