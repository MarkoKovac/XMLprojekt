async function initMap() {


  const response2 = await fetch('dizajn.json');
  const data2 = await response2.json();
  const styledMapType = new google.maps.StyledMapType(
    data2,
    { name: "Styled Map" }
  );

    const response = await fetch('lokacije.json');
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

    for (let i = 0; i < 90; i++){
        const lon2 = data.result.records[i].Longitude;
        const lat2 = data.result.records[i].Latitude;
        const marker_location = { lat: lat2, lng: lon2};
        const marker = new google.maps.Marker({
          position: marker_location,
          map: map,
        });
    }
  }
  
window.initMap = initMap;


