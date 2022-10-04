async function initMap() {

  const response2 = await fetch('dizajn.json');
  const data2 = await response2.json();
  const styledMapType = new google.maps.StyledMapType(
    data2,
    { name: "Styled Map" }
  );

  const start_location = { lat: 45.81295836043709, lng: 15.974741839933875 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: start_location,
    disableDefaultUI: true,
    keyboardShortcuts: false
  });

  map.mapTypes.set("styled_map", styledMapType);
  map.setMapTypeId("styled_map");

}

window.initMap = initMap;