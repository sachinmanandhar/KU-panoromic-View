import 'ol/ol.css';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
// import { fromLonLat } from 'ol/proj';
import { ScaleLine, defaults as defaultControls } from 'ol/control';
import MousePosition from 'ol/control/MousePosition';
import { createStringXY } from 'ol/coordinate';
import { Tile, Vector as VectorLayer } from 'ol/layer';
import { TileWMS } from 'ol/source';
// import { Group } from 'ol/layer';
import Style from 'ol/style/Style';
import Stroke from 'ol/style/Stroke';
import Fill from 'ol/style/Fill';
import VectorSource from 'ol/source/Vector';
import GeoJSON from 'ol/format/GeoJSON';
import { asArray } from 'ol/color';
import Select from 'ol/interaction/Select';
import { altKeyOnly, click, pointerMove } from 'ol/events/condition';
// import RasterSource from 'ol/source/Raster';
// import { Image as ImageLayer } from 'ol/layer';
import XYZ from 'ol/source/XYZ';
import * as pano from 'panolens';
import { Vector3 } from 'three';
import { Icon } from 'ol/style';
import { LineString, Point } from 'ol/geom';
import { Feature } from 'ol';
// import { selectFeatureControl } from 'ol/control';
// import OLCesium from 'olcs/OLCesium.js';

// import { easeIn, easeOut } from 'ol/easing';

import Shadow from 'ol-ext/style/Shadow';
import { RegularShape } from 'ol/style';
import Path from 'ol-ext/featureanimation/Path';
import * as easing from 'ol/easing';
// import Static from 'ol/source/ImageStatic';
import * as stringSimilarity from 'string-similarity';
import Overlay from 'ol/Overlay';

// document.querySelector('.ol-zoom').style.top = "6rem";






//import Vue from 'vue';
//import VuePannellum from 'vue-pannellum';
//import {ImagePanorama,Viewer} from 'panolens';
const RouteDataa = require('./js/routeData');
const BuildingDataa = require('./js/buildingData');

var container = document.getElementById('popup');

var content = document.getElementById('popup-content');
var closer = document.getElementById('popup-closer');

var panoContainer = document.getElementById('panoDiv');

/**
 * Create an overlay to anchor the popup to the map.
 */
var overlay = new Overlay({
  element: container,
  autoPan: true,
  autoPanAnimation: {
    duration: 250,
  },
});
closer.onclick = function () {
  overlay.setPosition(undefined);
  closer.blur();
  return false;
};
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

const panoDivChangeStyle1 = () => {
  panoContainer.style.height = "230px";
  panoContainer.style.width = "230px";
}
const panoDivChangeStyle2 = () => {
  panoContainer.style.height = "auto";
  panoContainer.style.width = "auto";
}
// const panoImage = document.querySelector('#popup-content');

const panoFunction = (imagePan, divElement) => {
  document.getElementById('InfoDiv').innerHTML = ""
  var panoContainer = document.getElementById(divElement);
  content.style.overflow = "hidden";
  panoContainer.innerHTML = "";
  panoDivChangeStyle1();
  document.getElementById('BuildingTable').innerHTML = ""
  const Pelton_Turbine = 'image/pano5.jpg';
  const Block_10 = 'image/pano8.jpg';
  const Bus_Park = 'image/pano1.jpg';
  const Boys_Hostel = 'image/pano2.jpg';
  const Civil_Department = 'image/pano3.jpg';
  const Fountain = 'image/pano4.jpg';
  const Multipurpose_Hall_road = 'image/pano7.jpg';
  const KU_Admin = 'image/pano9.jpg';
  const KU_Corner = 'image/pano10.jpg';
  const Block_9 = 'image/pano11.jpg';
  const inge = 'image/pano12.jpg';
  const ttl = 'image/pano13.jpg';
  const khetan = 'image/pano14.jpg';
  const bt = 'image/pano15.jpg';
  const golo_ghar = 'image/pano16.jpg';
  const science = 'image/pano17.jpg';
  const fountainii = 'image/pano19.jpg';
  const library = 'image/pano20.jpg';
  const KU_gate = 'image/pano6.jpg';




  const ku_gate_panorama = new pano.ImagePanorama(KU_gate);
  const pelton_turbine_panorama = new pano.ImagePanorama(Pelton_Turbine);
  const Block_10_panorama = new pano.ImagePanorama(Block_10);
  const Multipurpose_Hall_road_panorama = new pano.ImagePanorama(Multipurpose_Hall_road);
  const Civil_Department_panorama = new pano.ImagePanorama(Civil_Department);
  const Bus_Park_panorama = new pano.ImagePanorama(Bus_Park);
  const Boys_Hostel_panorama = new pano.ImagePanorama(Boys_Hostel);
  const Block_9_panorama = new pano.ImagePanorama(Block_9);
  const inge_panorama = new pano.ImagePanorama(inge);
  const ttl_panorama = new pano.ImagePanorama(ttl);
  const khetan_panorama = new pano.ImagePanorama(khetan);
  const bt_panorama = new pano.ImagePanorama(bt);
  const golo_ghar_panorama = new pano.ImagePanorama(golo_ghar);
  const science_panorama = new pano.ImagePanorama(science);
  const fountainii_panorama = new pano.ImagePanorama(fountainii);
  const Fountain_panorama = new pano.ImagePanorama(Fountain);
  const library_panorama = new pano.ImagePanorama(library);
  const KU_Corner_panorama = new pano.ImagePanorama(KU_Corner);
  const KU_Admin_panorama = new pano.ImagePanorama(KU_Admin);



  //const otherPanorama=new pano.ImagePanorama(imagePan1);
  //const otherPanorama1=new pano.ImagePanorama(imagePan2);



  const viewer = new pano.Viewer({
    container: panoContainer
  });

  const ViewerFunction = () => {
    viewer.add(ku_gate_panorama);
    viewer.add(pelton_turbine_panorama);
    viewer.add(Block_10_panorama);
    viewer.add(Multipurpose_Hall_road_panorama);
    viewer.add(Civil_Department_panorama);
    viewer.add(Bus_Park_panorama);
    viewer.add(Boys_Hostel_panorama);
    viewer.add(Block_9_panorama);
    viewer.add(inge_panorama);
    viewer.add(ttl_panorama);
    viewer.add(khetan_panorama);
    viewer.add(bt_panorama);
    viewer.add(golo_ghar_panorama);
    viewer.add(science_panorama);
    viewer.add(fountainii_panorama);
    viewer.add(Fountain_panorama);
    viewer.add(library_panorama);
    viewer.add(KU_Corner_panorama);
    viewer.add(KU_Admin_panorama);


  }
  if (imagePan == "KU gate") {
    viewer.add(ku_gate_panorama);
    ViewerFunction();

  }
  else if (imagePan == "Pelton Turbine") {
    viewer.add(pelton_turbine_panorama);
    ViewerFunction();
  }
  else if (imagePan == "Block 10") {
    viewer.add(Block_10_panorama);
    ViewerFunction();
  }
  else if (imagePan == "Multipurpose Hall road") {
    viewer.add(Multipurpose_Hall_road_panorama);
    ViewerFunction();
  }
  else if (imagePan == "Civil Department") {
    viewer.add(Civil_Department_panorama);
    ViewerFunction();
  }
  else if (imagePan == "Bus Park") {
    viewer.add(Bus_Park_panorama);
    ViewerFunction();
  }
  else if (imagePan == "Boys Hostel") {
    viewer.add(Boys_Hostel_panorama);
    ViewerFunction();
  }
  else if (imagePan == "Block 9") {
    viewer.add(Block_9_panorama);
    ViewerFunction();
  }
  else if (imagePan == "inge") {
    viewer.add(inge_panorama);
    ViewerFunction();
  }
  else if (imagePan == "TTL") {
    viewer.add(ttl_panorama);
    ViewerFunction();
  }
  else if (imagePan == "khetan") {
    viewer.add(khetan_panorama);
    ViewerFunction();
  }
  else if (imagePan == "BT") {
    viewer.add(bt_panorama);
    ViewerFunction();
  }
  else if (imagePan == "Golo Ghar") {
    viewer.add(golo_ghar_panorama);
    ViewerFunction();
  }
  else if (imagePan == "science") {
    viewer.add(science_panorama);
    ViewerFunction();
  }
  else if (imagePan == "kufountainII") {
    viewer.add(fountainii_panorama);
    ViewerFunction();
  }
  else if (imagePan == "Fountain") {
    viewer.add(Fountain_panorama);
    ViewerFunction();
  }
  else if (imagePan == "library") {
    viewer.add(library_panorama);
    ViewerFunction();
  }
  else if (imagePan == "KU corner") {
    viewer.add(KU_Corner_panorama);
    ViewerFunction();
  }
  else if (imagePan == "KU Admin") {
    viewer.add(KU_Admin_panorama);
    ViewerFunction();

  }

  //viewer.add(ku_gate_panorama);

  /*
  viewer.add(Multipurpose_Hall_road_panorama);
  viewer.add(Civil_Department_panorama);
  viewer.add(Bus_Park_panorama);
  viewer.add(Boys_Hostel_panorama);
  */
  //viewer.add(otherPanorama);
  //viewer.add(otherPanorama1);


  const panoPosition1 = new Vector3(5800, 0, 200)
  const panoPosition2 = new Vector3(1000, 300, 1000);
  const imageScale = 300;
  const imageSrc = pano.DataImage.Arrow;

  ku_gate_panorama.link(pelton_turbine_panorama, panoPosition1, 300, imageSrc);

  pelton_turbine_panorama.link(Block_10_panorama, new Vector3(3000, 0, -2500), 300, imageSrc);
  pelton_turbine_panorama.link(Block_9_panorama, new Vector3(500, 0, 1000), 100, imageSrc);
  pelton_turbine_panorama.link(KU_Admin_panorama, new Vector3(1500, 100, 0), 100, imageSrc);
  pelton_turbine_panorama.link(ku_gate_panorama, new Vector3(-700, -100, 1000), 100, imageSrc);


  Block_10_panorama.link(Multipurpose_Hall_road_panorama, new Vector3(-1500, -1000, -4500), 300, imageSrc);
  Block_10_panorama.link(pelton_turbine_panorama, new Vector3(300, -100, 1000), 100, imageSrc);

  Multipurpose_Hall_road_panorama.link(Civil_Department_panorama, new Vector3(-2500, -1000, -4500), 300, imageSrc);
  Multipurpose_Hall_road_panorama.link(Block_10_panorama, new Vector3(1500, -100, 1000), 200, imageSrc);

  Civil_Department_panorama.link(Bus_Park_panorama, new Vector3(-100, -1000, -4500), 300, imageSrc);
  Civil_Department_panorama.link(Multipurpose_Hall_road_panorama, new Vector3(0, -100, 1000), 100, imageSrc);

  Bus_Park_panorama.link(Civil_Department_panorama, new Vector3(-2000, -100, -1000), 200, imageSrc);
  Bus_Park_panorama.link(Boys_Hostel_panorama, new Vector3(3000, -100, -1000), 300, imageSrc);
  //Boys_Hostel_panorama.link(,panoPosition1,300,imageSrc);

  Block_9_panorama.link(inge_panorama, new Vector3(1000, -200, 1000), 100, imageSrc);
  inge_panorama.link(ttl_panorama, new Vector3(1000, -200, -100), 100, imageSrc);
  ttl_panorama.link(khetan_panorama, new Vector3(1000, 700, -1500), 300, imageSrc);
  khetan_panorama.link(bt_panorama, new Vector3(1000, -200, -100), 100, imageSrc);
  bt_panorama.link(golo_ghar_panorama, new Vector3(100, -300, 1000), 100, imageSrc);
  golo_ghar_panorama.link(science_panorama, new Vector3(5800, 0, 200), 300, imageSrc);
  science_panorama.link(fountainii_panorama, new Vector3(5800, 2000, 200), 300, imageSrc);
  fountainii_panorama.link(Fountain_panorama, new Vector3(-2000, 300, -10), 200, imageSrc);
  Fountain_panorama.link(library_panorama, new Vector3(-2000, 300, -10), 300, imageSrc);

  library_panorama.link(KU_Admin_panorama, new Vector3(-1000, 70, 700), 200, imageSrc);
  library_panorama.link(KU_Corner_panorama, new Vector3(-1000, 70, -700), 200, imageSrc);

  KU_Corner_panorama.link(KU_Admin_panorama, panoPosition1, 300, imageSrc);
  KU_Admin_panorama.link(Block_9_panorama, panoPosition2, 300, imageSrc);

};


// const panoImageIn = document.querySelector('#content1_3');

// const panoFunctionInner = (imagePan) => {
//   const panorama = new pano.ImagePanorama(imagePan);
//   const viewer = new pano.Viewer({
//     container: panoImageIn
//   });
//   viewer.add(panorama);

//   const infospot = new pano.Infospot(300, pano.DataImage.info);
//   infospot.position.set(0, 0, -5000);
//   infospot.addHoverText('Office of Dean', 40);
//   panorama.add(infospot);

//   const infospot1 = new pano.Infospot(300, pano.DataImage.info);
//   infospot1.position.set(0, 0, 5000);
//   infospot1.addHoverText('Office of Asoociate Dean', 40);
//   panorama.add(infospot1);

// };





var mousePositionControl = new MousePosition({
  coordinateFormat: createStringXY(6),
  projection: 'EPSG:4326',
  // comment the following two lines to have the mouse position
  // be placed within the map.
  className: 'MouseCord',
  target: document.getElementById('MouseCord'),
  undefinedHTML: '&nbsp;',
});

var view = new View({
  projection: 'EPSG:4326',
  center: [85.5386, 27.6195],
  zoom: 0,
});
var highlightStyle = new Style({
  fill: new Fill({
    color: 'rgba(255,255,255,0.7)',
  }),
  stroke: new Stroke({
    color: '#3399CC',
    width: 3,
  }),
});

var StrokecolorArray = asArray('red').slice();
StrokecolorArray[3] = 0.0;

var BuildingStyle = new Style({
  fill: new Fill({
    color: 'rgba(255,255,0,0.63)',
  }),
  stroke: new Stroke({
    color: StrokecolorArray,
    width: 1,
  }),
});

var color = BuildingStyle.getFill().getColor();
var colorArray = asArray(color).slice();
colorArray[3] = 0.0;
BuildingStyle.getFill().setColor(colorArray);

/*
var PointStyle = new Style({
  fill: new Fill({
  color:'rgba(0,0,255,0.9)',
  }),
  stroke: new Stroke({
    color: 'rgba(0,0,255,0.1)',
    width: 1,
  }),
});
*/
var iconStyle = new Style({
  image: new Icon({
    anchor: [0.5, 46],
    anchorXUnits: 'fraction',
    anchorYUnits: 'pixels',
    src: 'image/cameraIcon.png',
    scale: 0.057
  }),
});
var campusStyle = new Style({
  image: new Icon({
    anchor: [0.5, 46],
    anchorXUnits: 'fraction',
    anchorYUnits: 'pixels',
    src: 'image/attraction.png',
    scale: 0.057
  })
})

var style_selected = new Style({
  fill: new Fill({
    color: 'rgba(44, 28, 143, 3)',
  }),
  stroke: new Stroke({
    color: 'rgba(44, 28, 143, 3)',
    width: 3,
  }),
});
var parking_style = new Style({
  image: new Icon({
    anchor: [0.5, 46],
    anchorXUnits: 'fraction',
    anchorYUnits: 'pixels',
    src: 'image/parking.png',
    scale: 0.057
  })
})

var sports_style = new Style({
  image: new Icon({
    anchor: [0.5, 46],
    anchorXUnits: 'fraction',
    anchorYUnits: 'pixels',
    src: 'image/sport.png',
    scale: 0.057
  })
})
// var style_sports = new Style({
//   fill: new Fill({
//     color: 'rgba(0, 155, 0, 1)',
//   }),
//   stroke: new Stroke({
//     color: 'rgba(0, 155, 0, 1)',
//     width: 3,
//   }),
// });
var style_route = new Style({
  fill: new Fill({
    color: 'rgba(255,0,0,0.9)',
  }),
  stroke: new Stroke({
    color: 'rgba(255,0,0,0.8)',
    width: 6,
  }),
});
var style = [
  new Style({
    image: new Shadow({
      radius: 15,
    }),
    stroke: new Stroke({
      color: [0, 0, 0, 0.3],
      width: 2
    }),
    fill: new Fill({
      color: [0, 0, 0, 0.3]
    }),
    zIndex: -1
  }),
  new Style({
    image: new RegularShape({
      radius: 10,
      radius2: 5,
      points: 5,
      fill: new Fill({ color: 'blue' })
    }),
    stroke: new Stroke({
      color: [0, 0, 255],
      width: 2
    }),
    fill: new Fill({
      color: [0, 0, 255, 0.3]
    })
  })
];
// Offset image
style[1].getImage().getAnchor()[1] += 10

// Triangle style
var triangle = new RegularShape({
  radius: 14,
  points: 3,
  fill: new Fill({ color: '#00f' }),
  stroke: new Stroke({ color: '#fff', width: 2 })
});

// stretch the symbol
var c = triangle.getImage();
var ctx = c.getContext("2d");
var c2 = document.createElement('canvas');
c2.width = c2.height = c.width;
c2.getContext("2d").drawImage(c, 0, 0);
ctx.clearRect(0, 0, c.width, c.height);
ctx.drawImage(c2, 0, 0, c.width, c.height, 6, 0, c.width - 12, c.height);

var styleTriangle =
  new Style({
    image: triangle,
    stroke: new Stroke({
      color: [0, 0, 255],
      width: 2
    }),
    fill: new Fill({
      color: [0, 0, 255, 0.3]
    })
  });
/*
var routeSource=new VectorSource({
    features:new GeoJSON().readFeatures(RouteDataa.routeD),
  })
 
var route=new VectorLayer({
  source: routeSource ,
 visible: true
});
*/

var BuildSource = new VectorSource({
  url: 'data/building.geojson',
  format: new GeoJSON(),
})

var vector = new VectorLayer({
  source: BuildSource,
  style: BuildingStyle,
});

/*
vector.getProperties().source.map((data)=>{
    
    if (data.properties.Id==RouteSelect.value)
    {

    }
  });
*/

var pointSource = new VectorSource({
  url: 'data/points.geojson',
  format: new GeoJSON(),
  title: 'PointSource'
});

var points = new VectorLayer({
  source: pointSource,
  style: iconStyle,
  visible: false
});

var campusSource = new VectorSource({
  url: 'data/campus.geojson',
  format: new GeoJSON(),
  title: 'campusSource'
})

var parkingSource = new VectorSource({
  url: 'data/parking.geojson',
  format: new GeoJSON(),
  title: 'parkingSource'
})
var parking = new VectorLayer({
  source: parkingSource,
  style: parking_style,
  visible: false
})
var campusAttraction = new VectorLayer({
  source: campusSource,
  style: campusStyle,
  visible: false
})

var sports_source = new VectorSource({
  url: 'data/sports.geojson',
  format: new GeoJSON(),
  title: 'sports_source'
})
var sports_layer = new VectorLayer({
  source: sports_source,
  style: sports_style,
  visible: false
})

var getCoordinates = (key, value, source) => {
  var features = source.getFeatures().find(feature => feature.get(key) === value);
  if (features) {
    return features.getGeometry().getCoordinates()

  }
}
var getAttribBuild = (val) => {
  var feat = BuildSource.getFeatures().find(feature => feature.get('Build_Name') === val);
  return {
    name: feat.get('Build_Name'),
    first: feat.get('Office1') || '',
    second: feat.get('Office2') || '',
    third: feat.get('Office3') || '',
    fourth: feat.get('Office4') || ''
  }
}




/*
var key = 'Get your own API key at https://www.maptiler.com/cloud/';
var attributions =
  '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> ' +
  '<a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>';		
var aerial = new XYZ({
  attributions: attributions,
  url: 'image/',
  maxZoom: 20,
  crossOrigin: '',
});


var RasterImg = new ImageLayer({
  source: new RasterSource({
    url: 'data/odm_orthophoto.tif',

  })
});

*/
var wmsSource = new TileWMS({
  url: 'http://localhost:8080/geoserver/wms',
  params: { 'LAYERS': 'KU:geotiff_coverage', 'TILED': true },
  serverType: 'geoserver',
});

var wmsLayer = new TileLayer({
  source: wmsSource,
  zIndex: -1
});




// var bingMap = new TileLayer({
//   source: new BingMaps({
//     key: 'AoTlmaazzog43ImdKts9HVztFzUI4PEOT0lmo2V4q7f20rfVorJGAgDREKmfQAgd',
//     imagerySet: 'AerialWithLabels',
//     maxZoom: 19
//   }),
//   zIndex: -2,
// })

// var BaseMap = new TileLayer({
//   source: new XYZ({
//     attributions:
//       'Tiles © <a href="https://services.arcgisonline.com/ArcGIS/' +
//       'rest/services/World_Topo_Map/MapServer">ArcGIS</a>',
//     url:
//       'https://server.arcgisonline.com/ArcGIS/rest/services/' +
//       'World_Topo_Map/MapServer/tile/{z}/{y}/{x}',
//   }),
//   zIndex: -2,
// })

var BaseMap = new TileLayer({
  source: new OSM(),
  zIndex: -2,
})

var map = new Map({
  controls: defaultControls().extend([
    new ScaleLine({
      units: 'degrees',
    }), mousePositionControl]),
  target: 'map',
  layers: [BaseMap, wmsLayer, vector, points],
  overlays: [overlay],
  view: view,

});
map.addLayer(campusAttraction);
map.addLayer(parking);
map.addLayer(sports_layer);
/*
var routeValue=RouteSelect.value;
return routeValue;
*/
/*
var source = layer.getSource();
var params = source.getParams();
params.t = new Date().getMilliseconds();
source.updateParams(params);
*/
var SourceV = new VectorSource({});

var layer = new VectorLayer({
  source: SourceV,
  zIndex: -1,
  style: style_route,
});

map.addLayer(layer);

// Animation
var path;
SourceV.on('change', function (e) {
  if (SourceV.getState() === 'ready') {
    path = SourceV.getFeatures()[0];
  }
});

// Add a feature on the map
var f, anim;

function animateFeature() {

  if (path) {
    f = new Feature(new Point([0, 0]));
    f.setStyle(styleTriangle);

    anim = new Path({
      path: path,
      rotate: 25,
      easing: easing[easing.easeIn],
      speed: Number(0)
    });
    /** / 
    source.addFeature(f);
    anim.on('animationend', function(e)
    {	if (e.feature) source.removeFeature(e.feature);
    });
    /**/
    /** /
    anim.on('animating', (e) => {
      map.getView().setCenter(e.geom.getCoordinates())
      map.getView().setRotation(e.rotation||0)
    })
    /**/
    vector.animateFeature(f, anim);
  }
}



const SubmitFunction = (RouteName) => {


  RouteDataa.routeD.features.map((data) => {

    if (data.properties.Id == RouteName) {
      var coordinates = data.geometry.coordinates[0];
      var LineFeature = new Feature({
        geometry: new LineString(coordinates),
        name: 'routing'
      });
      SourceV.clear();
      SourceV.addFeature(LineFeature);
    }


  });
  animateFeature();



};



const SearchFunction = () => {
  var VarSearch = document.getElementById('searchValue').value;
  BuildingDataa.BuildingD.features.map((data) => {

    var building_name = data.properties.Build_Name;
    var office_one = data.properties.Office1 || "";
    var office_two = data.properties.Office2 || "";
    var office_three = data.properties.Office3 || "";
    var office_four = data.properties.Office4 || "";

    var compare1 = stringSimilarity.compareTwoStrings(building_name.toUpperCase(), VarSearch.toUpperCase());
    var compare2 = stringSimilarity.compareTwoStrings(office_one.toUpperCase(), VarSearch.toUpperCase());
    var compare3 = stringSimilarity.compareTwoStrings(office_two.toUpperCase(), VarSearch.toUpperCase());
    var compare4 = stringSimilarity.compareTwoStrings(office_three.toUpperCase(), VarSearch.toUpperCase());
    var compare5 = stringSimilarity.compareTwoStrings(office_four.toUpperCase(), VarSearch.toUpperCase());

    if (compare1 > 0.9 || compare2 > 0.9 || compare3 > 0.9 || compare4 > 0.9 || compare5 > 0.9) {

      var coordinates = data.geometry.coordinates[0];
      var LineFeature = new Feature({
        geometry: new LineString(coordinates),
        name: 'Building'
      });
      SourceV.clear();
      SourceV.addFeature(LineFeature);
      panoContainer.innerHTML = ""
      var Btable = document.getElementById('BuildingTable');


      tableFunction(Btable, building_name, office_one, office_two, office_three, office_four);
      document.getElementById("RouteBtnSec").style.display = "inline";
      var RBtn = document.getElementById("RouteBtnCore");
      RBtn.onclick = () => {

        SubmitFunction(data.properties.Id || null);

      }
    }
  });
}

var SearchSubmitBtn = document.getElementById("search-addon");

SearchSubmitBtn.onclick = () => {

  SearchFunction();
};

var routeSubmitBtn = document.getElementById("routeSubmitBtn");

routeSubmitBtn.onclick = () => {
  var RouteSelect = document.getElementById('RouteSelectID');
  SubmitFunction(RouteSelect.value);

  topFunction();

};
function readTextFile(file, callback) {
  var rawFile = new XMLHttpRequest();
  rawFile.overrideMimeType("application/json");
  rawFile.open("GET", file, true);
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4 && rawFile.status == "200") {
      callback(rawFile.responseText);
    }
  }
  rawFile.send(null);
}
var OfficeInfoTable = (office) => {
  var FinalData = null;
  // document.getElementById('InfoDiv').innerHTML = "";
  readTextFile("data/DepartmentContacts.json", (text) => {
    var data = JSON.parse(text);
    // console.log(data)
    console.log(office)
    var dat = data.find(element => element.Office = office);
    for (var i = 0; i < data.length; i++) {
      // console.log(data[i].Office)
      if (data[i].Office == office) {
        FinalData = data[i]
      }
    }

    console.log(FinalData || "No Data");

    var DepartmentInfo = document.createElement('table')
    DepartmentInfo.classList.add("table");
    var Drow0 = DepartmentInfo.insertRow(0);
    var Drow1 = DepartmentInfo.insertRow(1);
    var Drow2 = DepartmentInfo.insertRow(2);
    var Drow3 = DepartmentInfo.insertRow(3);

    var Drow4 = DepartmentInfo.insertRow(4);

    Drow0.insertCell(0).innerHTML = Object.keys(FinalData)[0];
    Drow0.insertCell(1).innerHTML = FinalData.Office;

    Drow1.insertCell(0).innerHTML = Object.keys(FinalData)[1];
    Drow1.insertCell(1).innerHTML = FinalData.Person_Incharge;

    Drow2.insertCell(0).innerHTML = Object.keys(FinalData)[2];
    Drow2.insertCell(1).innerHTML = FinalData.Email;

    Drow3.insertCell(0).innerHTML = Object.keys(FinalData)[3];
    Drow3.insertCell(1).innerHTML = FinalData.Phone_Number;

    Drow4.insertCell(0).innerHTML = Object.keys(FinalData)[4];
    Drow4.insertCell(1).innerHTML = FinalData.Floor;

    document.getElementById('InfoDiv').appendChild(DepartmentInfo);

  });


}
const officeClickInfo = (office) => {
  document.getElementById('BuildingTable').style.display = "none";
  var BackBtn = document.createElement("BUTTON");

  var backImage = document.createElement("img");
  backImage.style.width = "20px"
  backImage.src = "image/left-arrow.png";

  // var BtnText = document.createTextNode("Back");
  BackBtn.appendChild(backImage);

  OfficeInfoTable(office)

  document.getElementById('InfoDiv').appendChild(BackBtn);
  BackBtn.style.position = "absolute"
  BackBtn.style.bottom = "5px";
  BackBtn.style.left = "5px";

  BackBtn.addEventListener("click", () => {
    panoContainer.innerHTML = "";
    document.getElementById('InfoDiv').innerHTML = "";
    document.getElementById('BuildingTable').style.display = "block";
  });

}
const tableFunction = (Btable, Building, Office1, Office2, Office3, Office4) => {
  var ArgumentsLength = 1;
  const Arguments = [Building, Office1, Office2, Office3, Office4]

  // for (var i = 1; i < arguments.length; i++) {
  //   console.log(arguments[i])

  // }


  if (Office1 != " ") { ArgumentsLength += 1; }
  if (Office2 != " ") { ArgumentsLength += 1; }
  if (Office3 != " ") { ArgumentsLength += 1; }
  if (Office4 != " ") { ArgumentsLength += 1; }






  panoContainer.innerHTML = ""
  document.getElementById('InfoDiv').innerHTML = ""
  panoDivChangeStyle2();
  content.style.overflow = "auto";
  Btable.style.display = "block";
  Btable.innerHTML = "";

  // var rowF = Btable.insertRow(0);
  // rowF.insertCell(0).innerHTML = "Building Name";
  // rowF.insertCell(1).innerHTML = Building;

  for (var row = 0; row < ArgumentsLength; row++) {

    var Row = Btable.insertRow(row);
    if (row == 0) { Row.insertCell(0).innerHTML = "Building"; }
    else {
      Row.insertCell(0).innerHTML = "Office" + " " + (row + 1).toString();
    };
    const cellVal = Row.insertCell(1);
    cellVal.innerHTML = Arguments[row];

    if (row !== 0) {
      cellVal.onmouseover = () => {
        cellVal.style.textDecoration = "underline";
      }
      cellVal.onmouseout = () => {
        cellVal.style.textDecoration = "none";
      }
    }
    // cellVal.addEventListener("click", () => {
    //   console.log(row)
    //   console.log(Arguments[row]);
    //   // officeClickInfo(Arguments[row])

    // });
  }
  Btable.rows[1].cells[1].addEventListener("click", () => {

    officeClickInfo(Arguments[1])

  });

  Btable.rows[2].cells[1].addEventListener("click", () => {

    officeClickInfo(Arguments[2])

  });

  Btable.rows[3].cells[1].addEventListener("click", () => {

    officeClickInfo(Arguments[3])

  });

  Btable.rows[4].cells[1].addEventListener("click", () => {

    officeClickInfo(Arguments[4])

  });





  // var row0 = Btable.insertRow(0);
  // var row1 = Btable.insertRow(1);
  // var row2 = Btable.insertRow(2);
  // var row3 = Btable.insertRow(3);
  // var row4 = Btable.insertRow(4);

  // var cell01 = row0.insertCell(0);
  // var cell02 = row0.insertCell(1);

  // var cell11 = row1.insertCell(0);
  // var cell12 = row1.insertCell(1);

  // var cell21 = row2.insertCell(0);
  // var cell22 = row2.insertCell(1);

  // var cell31 = row3.insertCell(0);
  // var cell32 = row3.insertCell(1);

  // var cell41 = row4.insertCell(0);
  // var cell42 = row4.insertCell(1);


  // cell01.innerHTML = "Building Name";

  // // cell01.addEventListener("click", () => {
  // //   panoContainer.innerHTML = "";
  // // });

  // cell02.innerHTML = Building;


  // cell11.innerHTML = "Office 1";
  // cell12.innerHTML = Office1

  // cell12.onmouseover = () => {
  //   cell12.style.textDecoration = "underline";
  // }
  // cell12.onmouseout = () => {
  //   cell12.style.textDecoration = "none";
  // }

  // cell12.addEventListener("click", () => {
  //   officeClickInfo(Office1)

  // });


  // cell21.innerHTML = "Office 2";
  // cell22.innerHTML = Office2;

  // cell22.onmouseover = () => {
  //   cell22.style.textDecoration = "underline";
  // }
  // cell22.onmouseout = () => {
  //   cell22.style.textDecoration = "none";
  // }

  // cell22.addEventListener("click", () => {
  //   officeClickInfo(Office2)

  // });

  // cell31.innerHTML = "Office 3";
  // cell32.innerHTML = Office3;

  // cell32.onmouseover = () => {
  //   cell32.style.textDecoration = "underline";
  // }
  // cell32.onmouseout = () => {
  //   cell32.style.textDecoration = "none";
  // }

  // cell32.addEventListener("click", () => {
  //   officeClickInfo(Office3)

  // });


  // cell41.innerHTML = "Office 4";
  // cell42.innerHTML = Office4;

  // cell42.onmouseover = () => {
  //   cell42.style.textDecoration = "underline";
  // }
  // cell42.onmouseout = () => {
  //   cell42.style.textDecoration = "none";
  // }

  // cell42.addEventListener("click", () => {
  //   officeClickInfo(Office4)

  // });
}





var Btable = document.getElementById('BuildingTable');

map.on('click', evt => {
  overlay.setPosition(undefined);
  closer.blur();
  SourceV.clear();
  Btable.innerHTML = "";
  var coordinate = evt.coordinate;




  var select = null; // ref to currently selected interaction

  var selectClick = new Select({
    condition: click,
    style: style_selected,
  });

  var changeInteraction = function () {
    if (select !== null) {
      map.removeInteraction(select);
    }

    select = selectClick;

    if (select !== null) {
      map.addInteraction(select);
    }
  };

  changeInteraction();

  map.forEachFeatureAtPixel(evt.pixel, function (f) {
    select = f;
    return true;
  });

  var AtrribName = select.get('Build_Name');
  var PointName = select.get('Point_name');


  if (PointName) {

    overlay.setPosition(coordinate);
    panoFunction(PointName, "panoDiv");


  }


  if (select) {

    if (AtrribName) {
      var coord = getCoordinates("Build_Name", AtrribName, BuildSource)
      overlay.setPosition(coord[0][0]);


      tableFunction(Btable, select.get('Build_Name'), select.get('Office1') || " ", select.get('Office2') || " ", select.get('Office3') || " ", select.get('Office4') || " ");
      document.getElementById("RouteBtnSec").style.display = "inline";
    }
    else {
      document.getElementById("RouteBtnSec").style.display = "none";
    }
    var RBtn = document.getElementById("RouteBtnCore");
    RBtn.onclick = () => {

      SubmitFunction(select.get('Id') || null);

    }




  }



})
var LayerOnOff = (layerId, pointLayer) => {
  var LayerShowHide = document.getElementById(layerId);
  if (LayerShowHide.checked == true) {
    pointLayer.setVisible(true);
  }
  else {
    pointLayer.setVisible(false);
  }
}

document.getElementById('panoCheckbox').onclick = () => {
  LayerOnOff('panoCheckbox', points);
};

document.getElementById('campusCheckbox').onclick = () => {
  LayerOnOff('campusCheckbox', campusAttraction);
};
document.getElementById('parking').onclick = () => {
  LayerOnOff('parking', parking);
};

document.getElementById('sports').onclick = () => {
  LayerOnOff('sports', sports_layer);
};



// document.getElementById('ku_corner_campus').onclick = () => {
//   overlay.setPosition(getCoordinates('name', 'ku_corner', campusSource));
// }
// document.getElementById('silver_jublee').onclick = () => {
//   overlay.setPosition(getCoordinates('name', 'silver_jublee_monument', campusSource));
// }
// document.getElementById('ku_fountain_campus').onclick = () => {
//   overlay.setPosition(getCoordinates('name', 'ku_fountain', campusSource));
// }
// document.getElementById('saraswati_mandir').onclick = () => {
//   overlay.setPosition(getCoordinates('name', 'saraswati_mandir', campusSource));
// }

// document.getElementById('ku_lawn').onclick = () => {
//   overlay.setPosition(getCoordinates('name', 'ku_lawn', campusSource));
// }


// document.querySelectorAll('.Layer-controller').forEach(el => {
//   el.addEventListener('click', evt => {
//     console.log(evt.target.id)
//     console.log(evt.target.id,evt.target.id)
//     // LayerOnOff(evt.target.id, parking);
//   })
// });
var dispImage = (imageName, source) => {
  document.getElementById('InfoDiv').innerHTML = ""
  document.getElementById('panoDiv').innerHTML = "";
  document.getElementById('BuildingTable').innerHTML = "";
  overlay.setPosition(getCoordinates('name_id', imageName, source));
  var img = document.createElement("img");
  img.style.width = "248px";
  img.style.marginTop = "13px";
  img.src = "image/campus/" + imageName + ".jpg";
  console.log(img.src)
  var src = document.getElementById("panoDiv");
  src.innerHTML = "";
  src.appendChild(img);
}
document.querySelectorAll('.layerToggler').forEach(el => {
  el.addEventListener('click', evt => {
    var StrLength = evt.target.id.length;
    if (evt.target.id.slice(StrLength - 6, StrLength) == "sports") {
      document.getElementById('InfoDiv').innerHTML = ""
      document.getElementById('panoDiv').innerHTML = "";
      document.getElementById('BuildingTable').innerHTML = "";
      overlay.setPosition(getCoordinates('name_id', evt.target.id, sports_source));
    }
    else if (evt.target.id.slice(StrLength - 7, StrLength) == "parking") {
      dispImage(evt.target.id, parkingSource)
      // overlay.setPosition(getCoordinates('name_id', evt.target.id, parkingSource));
    }
    else if (evt.target.id.slice(StrLength - 6, StrLength) == "campus") {
      dispImage(evt.target.id, campusSource)

    }

  })

})









// var openPanoFunctionLayer = (PointAttribKey, PointAttribValue, pointSourceLayer) => {
//   overlay.setPosition(getCoordinates(PointAttribKey, PointAttribValue, pointSourceLayer));
//   panoFunction(PointAttribValue);
// }

document.getElementById('adminA').onclick = () => {
  var coord = getCoordinates("Build_Name", 'Administrative Building', BuildSource);
  overlay.setPosition(coord[0][0]);
  var officeInfo = getAttribBuild('Administrative Building')
  tableFunction(Btable, officeInfo.name, officeInfo.first, officeInfo.second, officeInfo.third, officeInfo.fourth)
}

document.getElementById('adminB').onclick = () => {
  var coord = getCoordinates("Build_Name", 'Administrative Building', BuildSource);
  overlay.setPosition(coord[0][0]);
  var officeInfo = getAttribBuild('Administrative Building')
  tableFunction(Btable, officeInfo.name, officeInfo.first, officeInfo.second, officeInfo.third, officeInfo.fourth)
}


document.getElementById('adminC').onclick = () => {
  var coord = getCoordinates("Build_Name", 'Block 9', BuildSource);
  overlay.setPosition(coord[0][0]);
  var officeInfo = getAttribBuild('Block 9');
  tableFunction(Btable, officeInfo.name, officeInfo.first, officeInfo.second, officeInfo.third, officeInfo.fourth)
}

document.getElementById('adminD').onclick = () => {
  var coord = getCoordinates("Build_Name", 'Block 6', BuildSource);
  overlay.setPosition(coord[0][0]);
  var officeInfo = getAttribBuild('Block 6');
  tableFunction(Btable, officeInfo.name, officeInfo.first, officeInfo.second, officeInfo.third, officeInfo.fourth)
}

document.getElementById('canteen').onclick = () => {
  var coord = getCoordinates("Build_Name", 'CV Raman Auditorium', BuildSource);
  overlay.setPosition(coord[0][0]);
  var officeInfo = getAttribBuild('CV Raman Auditorium');
  tableFunction(Btable, officeInfo.name, officeInfo.first, officeInfo.second, officeInfo.third, officeInfo.fourth)
}

document.getElementById('ku_mess').onclick = () => {
  var coord = getCoordinates("Build_Name", 'KU Mess', BuildSource);
  overlay.setPosition(coord[0][0]);
  var officeInfo = getAttribBuild('KU Mess');
  tableFunction(Btable, officeInfo.name, officeInfo.first, officeInfo.second, officeInfo.third, officeInfo.fourth)
}
document.getElementById('ku_cafe').onclick = () => {
  var coord = getCoordinates("Build_Name", 'KU Cafe', BuildSource);
  overlay.setPosition(coord[0][0]);
  var officeInfo = getAttribBuild('KU Cafe');
  tableFunction(Btable, officeInfo.name, officeInfo.first, officeInfo.second, officeInfo.third, officeInfo.fourth);
}

var getAttribBuildNew = (val) => {
  var feat = BuildSource.getFeatures().find(feature => feature.get('name_id') === val);
  return {
    name: feat.get('Build_Name'),
    first: feat.get('Office1') || '',
    second: feat.get('Office2') || '',
    third: feat.get('Office3') || '',
    fourth: feat.get('Office4') || ''
  }
}
document.querySelectorAll('.BuildingLayer').forEach(el => {
  el.addEventListener('click', evt => {
    var coord = getCoordinates("name_id", evt.target.id, BuildSource);
    document.getElementById('InfoDiv').innerHTML = ""
    overlay.setPosition(coord[0][0]);
    var officeInfo = getAttribBuildNew(evt.target.id);
    tableFunction(Btable, officeInfo.name, officeInfo.first, officeInfo.second, officeInfo.third, officeInfo.fourth);

  })
})





map.on('pointermove', function (evt) {
  if (evt.dragging) {
    return;
  }
  var pixel = map.getEventPixel(evt.originalEvent);
  var hit = map.forEachLayerAtPixel(pixel, function () {
    return true;
  });
  map.getTargetElement().style.cursor = hit ? 'pointer' : '';
});

// const ol3d = new OLCesium({ map: map }); // map is the ol.Map instance

// ol3d.setEnabled(true);

var KU = [85.53803, 27.61946]

function onClick(id, callback) {
  document.getElementById(id).addEventListener('click', callback);
}

var OL3dDisable_ViewAnimation = () => {
  // ol3d.setEnabled(false);
  view.animate({
    center: KU,
    duration: 2000,

    zoom: 18.5,
  });

}
var homeBtn = document.getElementById('homeIcon')
homeBtn.onclick = () => {
  OL3dDisable_ViewAnimation();

}
// function mainContentDisplay(event, contentName) {
// 	var i, x, tablinks;
// 	x = document.getElementsByClassName("main-content-display");
// 	for (i = 0; i < x.length; i++) {
// 		x[i].style.display = "none";
// 	};
// 	document.getElementById(contentName).style.display = "block";
// }

document.querySelectorAll('.tab-selector').forEach(el => {
  el.addEventListener('click', evt => {
    var i, x;
    x = document.getElementsByClassName("main-content-display");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    };
    document.getElementById(evt.target.id.slice(0, evt.target.id.length - 1)).style.display = "block";
    if (evt.target.id == "panoramic-sectionB") {
      document.getElementById('panoDiv').innerHTML = "";
      document.getElementById('BuildingTable').innerHTML = "";
      panoFunction("KU gate", "panoramic-section")
    }
  })
})
// document.getElementById("panoramic-button").onclick = () => {
//   console.log("running")
//   document.getElementById("map").style.display = "block";
//   document.getElementById("panoramic-section").style.display = "block";
//   document.getElementById("panoramic-section").innerHTML = "Function Calling";
//   // 
// }

const toggleModal = () => {
  document.querySelector('.modal')
    .classList.toggle('modal--hidden');
};
/*
document.querySelector('#show-modal')
  .addEventListener('click',toggleModal);
*/
document.querySelector('#more')
  .addEventListener('submit', (event) => {
    event.preventDefault();
    OL3dDisable_ViewAnimation();
    toggleModal();


  });

document.querySelector('.modal_close-bar span')
  .addEventListener('click', toggleModal);




/*
document.querySelector('#show-modal')
    .addEventListener('click',toggleModal);
  */

