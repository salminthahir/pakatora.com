function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 8,
      center: { lat: -0.488055, lng: 127.452054 },
    });
    const ctaLayer = new google.maps.KmlLayer({
      url: "mapbox://styles/wohale/cld7ua3ju000901mtvc181j7g",
      map: map,
    });
  }
  
  window.initMap = initMap;