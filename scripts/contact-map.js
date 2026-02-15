/* ===================================================================
   ContactMap – OpenLayers map with a location marker
   =================================================================== */

function ContactMap(container, lon, lat, zoom) {
  zoom = zoom || 15;

  container.innerHTML =
    '<div class="map-container">' +
      '<div class="map-inner">' +
        '<div id="ol-map"></div>' +
      '</div>' +
    '</div>';

  var mapDiv = container.querySelector('#ol-map');

  var center = ol.proj.fromLonLat([lon, lat]);

  var markerFeature = new ol.Feature({
    geometry: new ol.geom.Point(center),
  });

  markerFeature.setStyle(
    new ol.style.Style({
      image: new ol.style.Circle({
        radius: 10,
        fill: new ol.style.Fill({ color: '#22577A' }),
        stroke: new ol.style.Stroke({ color: '#FFFFFF', width: 2 }),
      }),
    })
  );

  var vectorLayer = new ol.layer.Vector({
    source: new ol.source.Vector({
      features: [markerFeature],
    }),
  });

  var map = new ol.Map({
    target: mapDiv,
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM(),
      }),
      vectorLayer,
    ],
    view: new ol.View({
      center: center,
      zoom: zoom,
    }),
    controls: [],
  });

  /* Fix map sizing */
  requestAnimationFrame(function () {
    map.updateSize();
    requestAnimationFrame(function () {
      map.updateSize();
    });
  });

  window.addEventListener('resize', function () {
    map.updateSize();
  });

  return map;
}
