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
import { DstAlphaFactor, Vector3 } from 'three';
import { Icon } from 'ol/style';
import { LineString, Point } from 'ol/geom';
import { Feature } from 'ol';
import Geolocation from 'ol/Geolocation';
import {Circle as CircleStyle} from 'ol/style';
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
import BaseLayer from 'ol/layer/Base';

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
  panoContainer.style.height = "98%";
  panoContainer.style.width = "98%";
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

    readTextFile("data/ImageLink.json", (text) => {
      var ImageUrl = JSON.parse(text);
      const ImagePanorama = {};
      for (const items in ImageUrl){
        
        var itemsData= new pano.ImagePanorama(ImageUrl[items]);
        var itemsName = items + '_panorama';
        ImagePanorama[itemsName] = itemsData

        //  eval(itemsName + "=" + itemsData);
      }
      const viewer = new pano.Viewer({
        container: panoContainer
      });
      // var type_snake_case = imagePan.split(/(?=[A-Z])/).join("_").toLowerCase();
      // console.log(type_snake_case);
      // viewer.add(ImagePanorama[type_snake_case]);
    if (imagePan == "KU gate") {
      viewer.add(ImagePanorama['ku_gate_panorama']);
    }
    else if (imagePan == "Pelton Turbine") {
      viewer.add(ImagePanorama['pelton_turbine_panorama']);
    }
    else if (imagePan == "Block 10") {
      viewer.add(ImagePanorama['block_10_panorama']);
    }
    else if (imagePan == "Multipurpose Hall road") {
      viewer.add(ImagePanorama['multi_purpose_hall_road_panorama']);
    }
    else if (imagePan == "Civil Department") {
      viewer.add(ImagePanorama['civil_department_panorama']);
    }
    else if (imagePan == "Bus Park") {
      viewer.add(ImagePanorama['bus_park_panorama']);
    }
    else if (imagePan == "Boys Hostel") {
      viewer.add(ImagePanorama['boys_hostel_panorama']);
    }
    else if (imagePan == "Block 9") {
      viewer.add(ImagePanorama['block_9_panorama']);
    }
    else if (imagePan == "inge") {
      viewer.add(ImagePanorama['inge_panorama']);
    }
    else if (imagePan == "TTL") {
      viewer.add(ImagePanorama['ttl_panorama']);
    }
    else if (imagePan == "khetan") {
      viewer.add(ImagePanorama['khetan_panorama']);
    }
    else if (imagePan == "BT") {
      viewer.add(ImagePanorama['bt_panorama']);
    }
    else if (imagePan == "Golo Ghar") {
      viewer.add(ImagePanorama['golo_ghar_panorama']);
    }
    else if (imagePan == "science") {
      viewer.add(ImagePanorama['science_panorama']);
    }
    else if (imagePan == "kufountainII") {
      viewer.add(ImagePanorama['fountainii_panorama']);
    }
    else if (imagePan == "Fountain") {
      viewer.add(ImagePanorama['Fountain_panorama']);
    }
    else if (imagePan == "library") {
      viewer.add(ImagePanorama['library_panorama']);
    }
    else if (imagePan == "KU corner") {
      viewer.add(ImagePanorama['ku_corner_panorama']);
    }
    else if (imagePan == "KU Admin") {
      viewer.add(ImagePanorama['ku_admin_panorama']);
    }
    for (const panorama in ImagePanorama){
      viewer.add(ImagePanorama[panorama]);
    };
    const panoPosition1 = new Vector3(5800, 0, 200)
    const panoPosition2 = new Vector3(1000, 300, 1000);
    const imageScale = 300;
    const imageSrc = pano.DataImage.Arrow;
    const DataInfoIcon = pano.DataImage.Info 
    
  var infospotFunction = (HoverText,ImagePanoramaArgument,vectorPositionObject,iconSize=100) => {
    let infospot = new pano.Infospot(iconSize, DataInfoIcon);
    infospot.position.set(vectorPositionObject.x, vectorPositionObject.y, vectorPositionObject.z);
   infospot.addHoverText(HoverText, 30);
   ImagePanorama[ImagePanoramaArgument].add(infospot);
  }

    ImagePanorama['ku_gate_panorama'].link(ImagePanorama['pelton_turbine_panorama'], panoPosition1, 300, imageSrc);

      infospotFunction('Kathmandu Univeristy Main Entrance','ku_gate_panorama',{x:5800, y:400, z:200},200);

  // var infospot = new pano.Infospot(300, DataInfoIcon);
  // infospot.position.set(5800, 200, 200);
  // infospot.addHoverElement(document.getElementById('desc-container'), 100);
  // ku_gate_panorama.add(infospot);

    ImagePanorama['pelton_turbine_panorama'].link(ImagePanorama['block_10_panorama'], new Vector3(3000, 0, -2500), 300, imageSrc);


    infospotFunction('[Block 10, Block 11, Block 12, KU Boys Hostel]','pelton_turbine_panorama',{x:3000, y:300, z:-2500},);
    infospotFunction('[Block 9, Office of Dean, Office of Associate Dean]','pelton_turbine_panorama',{x:500, y:100, z:1000},30);
    infospotFunction('[Administrative Block, Office of Vice Chancellor, Office of Registrar]','pelton_turbine_panorama',{x:1500, y:200, z:0},50);
    infospotFunction('[KU Canteen, Fountain]','pelton_turbine_panorama',{x:1500, y:600, z:700},80);


    ImagePanorama['pelton_turbine_panorama'].link(ImagePanorama['block_9_panorama'], new Vector3(500, 0, 1000), 100, imageSrc);
    ImagePanorama['pelton_turbine_panorama'].link(ImagePanorama['ku_corner_panorama'], new Vector3(1500, 100, 0), 100, imageSrc);
    ImagePanorama['pelton_turbine_panorama'].link(ImagePanorama['ku_gate_panorama'], new Vector3(-700, -100, 1000), 100, imageSrc);
    ImagePanorama['pelton_turbine_panorama'].link(ImagePanorama['ku_admin_panorama'], new Vector3(1500, 400, 700), 100, imageSrc);  


    ImagePanorama['block_10_panorama'].link(ImagePanorama['multi_purpose_hall_road_panorama'], new Vector3(-1500, -1000, -4500), 300, imageSrc);

    infospotFunction('[Block 11, Block 12, KU Boys Hostel]','block_10_panorama',{x:-1500, y:-800, z:-4500},110);

    ImagePanorama['block_10_panorama'].link(ImagePanorama['pelton_turbine_panorama'], new Vector3(300, -100, 1000), 100, imageSrc);
  
    ImagePanorama['multi_purpose_hall_road_panorama'].link(ImagePanorama['civil_department_panorama'], new Vector3(-2500, -1000, -4500), 300, imageSrc);

    infospotFunction('[Block 12, KU Mess, KU Boys Hostel]','multi_purpose_hall_road_panorama',{x:-2500, y:-800, z:-4500},120);

    ImagePanorama['multi_purpose_hall_road_panorama'].link(ImagePanorama['block_10_panorama'], new Vector3(1500, -100, 1000), 200, imageSrc);

    ImagePanorama['civil_department_panorama'].link(ImagePanorama['bus_park_panorama'], new Vector3(-100, -1000, -4500), 300, imageSrc);
    infospotFunction('[KU Mess, KU Boys Hostel]','civil_department_panorama',{x:-100, y:-800, z:-4500},160);

    ImagePanorama['civil_department_panorama'].link(ImagePanorama['ku_corner_panorama'], new Vector3(1500, 200, 0), 100, imageSrc);

    infospotFunction('[KU Library, KU Administrative Office]','civil_department_panorama',{x:1500, y:300, z:0},100);

    ImagePanorama['civil_department_panorama'].link(ImagePanorama['multi_purpose_hall_road_panorama'], new Vector3(0, -100, 1000), 100, imageSrc);

    ImagePanorama['bus_park_panorama'].link(ImagePanorama['civil_department_panorama'], new Vector3(-2000, -100, -1000), 200, imageSrc);
    ImagePanorama['bus_park_panorama'].link(ImagePanorama['fountainii_panorama'], new Vector3(-1, -1, 10), 1, imageSrc);

    infospotFunction('[KU Fountain, Bank]','bus_park_panorama',{x:-1, y:1, z:10},0.5);

    ImagePanorama['bus_park_panorama'].link(ImagePanorama['boys_hostel_panorama'], panoPosition1, 500, imageSrc);
    //ImagePanorama['boys_hostel_panorama'].link(,panoPosition1,300,imageSrc);

    ImagePanorama['boys_hostel_panorama'].link(ImagePanorama['bus_park_panorama'], new Vector3(-2000, -100, -1000), 200, imageSrc);


    infospotFunction('[Block 8, Turbine Testing Lab,School of Sciences]','block_9_panorama',{x:1000, y:0, z:1000},50);


    ImagePanorama['block_9_panorama'].link(ImagePanorama['inge_panorama'], new Vector3(1000, -200, 1000), 100, imageSrc);
    ImagePanorama['block_9_panorama'].link(ImagePanorama['pelton_turbine_panorama'], new Vector3(-750, 100, -350), 100, imageSrc);


    infospotFunction('[Block 8,School of Sciences]','inge_panorama',{x:1000, y:0, z:-100},50);

    // var infospot14 = new pano.Infospot(100, imageSrc);
    // infospot14.position.set(1000, -200, -100);
    // infospot14.addHoverText('Block 8,School of Sciences', 30);
    // ImagePanorama['inge_panorama'].add(infospot14);

    ImagePanorama['inge_panorama'].link(ImagePanorama['ttl_panorama'], new Vector3(1000, -200, -100), 100, imageSrc);
    ImagePanorama['inge_panorama'].link(ImagePanorama['block_9_panorama'], new Vector3(-2000, -100, -300), 200, imageSrc);

    infospotFunction('[Block 8,School of Sciences]','ttl_panorama',{x:1000, y:900, z:-1500},100);

    // var infospot15 = new pano.Infospot(100, imageSrc);
    // infospot15.position.set(1000, 700, -1500);
    // infospot15.addHoverText('Block 8,School of Sciences', 30);
    // ImagePanorama['ttl_panorama'].add(infospot15);

    ImagePanorama['ttl_panorama'].link(ImagePanorama['khetan_panorama'], new Vector3(1000, 700, -1500), 300, imageSrc);
    ImagePanorama['ttl_panorama'].link(ImagePanorama['inge_panorama'], new Vector3(-500, 0, 100), 50, imageSrc);


    infospotFunction('[School of Sciences]','khetan_panorama',{x:1500, y:-400, z:100},50);

    // var infospot16 = new pano.Infospot(100, imageSrc);
    // infospot16.position.set(1500, -500, 100);
    // infospot16.addHoverText('School of Sciences', 80);
    // ImagePanorama['khetan_panorama'].add(infospot16);


    infospotFunction('[Library, Canteen]','khetan_panorama',{x:-800, y:80, z:-100},30);

    // var infospot17 = new pano.Infospot(100, imageSrc);
    // infospot17.position.set(-800, 0, -100);
    // infospot17.addHoverText('Library, Canteen', 90);
    // ImagePanorama['khetan_panorama'].add(infospot17);

    ImagePanorama['khetan_panorama'].link(ImagePanorama['bt_panorama'], new Vector3(1500, -500, 100), 100, imageSrc);
    ImagePanorama['khetan_panorama'].link(ImagePanorama['ttl_panorama'], new Vector3(100, -400, 500), 100, imageSrc);
    ImagePanorama['khetan_panorama'].link(ImagePanorama['ku_admin_panorama'], new Vector3(-800, 0, -100), 100, imageSrc);


    infospotFunction('[Golo Ghar, Shade]','bt_panorama',{x:100, y:-150, z:1000},60);
    infospotFunction('[School of Sciences, Library]','bt_panorama',{x:1000, y:20, z:-100},60);

    // var infospot18 = new pano.Infospot(100, imageSrc);
    // infospot18.position.set(100, -300, 1000);
    // infospot18.addHoverText('Golo Ghar, Shade', 80);
    // var infospot19 = new pano.Infospot(100, imageSrc);
    // infospot19.position.set(1000, 10, -100);
    // infospot19.addHoverText('School of Sciences, Library', 80);

    // ImagePanorama['bt_panorama'].add(infospot19);
    // ImagePanorama['bt_panorama'].add(infospot18);

    ImagePanorama['bt_panorama'].link(ImagePanorama['golo_ghar_panorama'], new Vector3(100, -300, 1000), 100, imageSrc);
    ImagePanorama['bt_panorama'].link(ImagePanorama['khetan_panorama'], new Vector3(-20, 0, -100), 10, imageSrc);
    ImagePanorama['bt_panorama'].link(ImagePanorama['ku_admin_panorama'], new Vector3(1000, 10, -100), 100, imageSrc);

    ImagePanorama['golo_ghar_panorama'].link(ImagePanorama['science_panorama'], new Vector3(800, 0, -200), 100, imageSrc);
    ImagePanorama['golo_ghar_panorama'].link(ImagePanorama['bt_panorama'], new Vector3(-800, 0, -100), 100, imageSrc);


    infospotFunction('[KU Fountain]','science_panorama',{x:25, y:35, z:-100},30);

    // var infospot20 = new pano.Infospot(100, imageSrc);
    // infospot20.position.set(25, 25, -100);
    // infospot20.addHoverText('KU Fountain', 8);
    // ImagePanorama['science_panorama'].add(infospot20);

    ImagePanorama['science_panorama'].link(ImagePanorama['Fountain_panorama'], new Vector3(25, 25, -100), 10, imageSrc);
    ImagePanorama['science_panorama'].link(ImagePanorama['golo_ghar_panorama'], new Vector3(1000, -200, 1000), 100, imageSrc);

    ImagePanorama['fountainii_panorama'].link(ImagePanorama['fountainii_panorama'], new Vector3(-2000, 300, -10), 200, imageSrc);

    infospotFunction('[KU Library]','science_panorama',{x:-2000, y:400, z:-10},60);

    // var infospot9 = new pano.Infospot(200, imageSrc);
    // infospot9.position.set(-2000, 300, -10);
    // infospot9.addHoverText('KU Library', 40);
    // ImagePanorama['fountainii_panorama'].add(infospot9);

    ImagePanorama['fountainii_panorama'].link(ImagePanorama['bus_park_panorama'], new Vector3(1, -2, -10), 2, imageSrc);

    ImagePanorama['Fountain_panorama'].link(ImagePanorama['library_panorama'], new Vector3(-15, 2, 10), 2, imageSrc);
    ImagePanorama['Fountain_panorama'].link(ImagePanorama['fountainii_panorama'], new Vector3(2000, -100, 100), 200, imageSrc);
    ImagePanorama['Fountain_panorama'].link(ImagePanorama['ku_corner_panorama'], new Vector3(-500, -200, -3000), 200, imageSrc);
    ImagePanorama['Fountain_panorama'].link(ImagePanorama['science_panorama'], new Vector3(500, -100, 1000), 100, imageSrc);
    ImagePanorama['Fountain_panorama'].link(ImagePanorama['ku_admin_panorama'], new Vector3(-15, -2, 100), 10, imageSrc);

    ImagePanorama['library_panorama'].link(ImagePanorama['ku_admin_panorama'], new Vector3(100, 30, 700), 100, imageSrc);
    ImagePanorama['library_panorama'].link(ImagePanorama['ku_corner_panorama'], new Vector3(0, 0, -100), 10, imageSrc);
    ImagePanorama['library_panorama'].link(ImagePanorama['Fountain_panorama'], new Vector3(1000, 30, 700), 100, imageSrc);

    ImagePanorama['ku_corner_panorama'].link(ImagePanorama['library_panorama'], panoPosition1, 500, imageSrc);
    ImagePanorama['ku_corner_panorama'].link(ImagePanorama['pelton_turbine_panorama'], new Vector3(0, 0, 10), 1, imageSrc);
    ImagePanorama['ku_corner_panorama'].link(ImagePanorama['Fountain_panorama'], new Vector3(2, 0, -10), 2, imageSrc);

    infospotFunction('[School of Science]','ku_admin_panorama',{x:-1500, y:-800, z:-4500},100);

    // var infospot21 = new pano.Infospot(100, imageSrc);
    // infospot21.position.set(-1500, -1000, -4500);
    // infospot21.addHoverText('School of Science', 200);
    // ImagePanorama['ku_admin_panorama'].add(infospot21);
    
    ImagePanorama['ku_admin_panorama'].link(ImagePanorama['pelton_turbine_panorama'], new Vector3(2, 0, -20), 2, imageSrc);
    
    ImagePanorama['ku_admin_panorama'].link(ImagePanorama['Fountain_panorama'], new Vector3(0, 0, 10), 1, imageSrc);

    infospotFunction('[Fountain]','ku_admin_panorama',{x:0, y:1, z:10},0.5);

    // var infospot10 = new pano.Infospot(300, imageSrc);
    // infospot10.position.set(0, 0, 10);
    // infospot10.addHoverText('Fountain', 40);
    // ImagePanorama['ku_admin_panorama'].add(infospot10);

    ImagePanorama['ku_admin_panorama'].link(ImagePanorama['bt_panorama'], new Vector3(-1500, -1000, -4500), 300, imageSrc);

    infospotFunction('[Block 7]','ku_admin_panorama',{x:-1500, y:-800, z:-4500},100);

    // var infospot10 = new pano.Infospot(300, imageSrc);
    // infospot11.position.set(-1500, -1000, -4500);
    // infospot11.addHoverText('Block 7', 40);
    // ImagePanorama['ku_admin_panorama'].add(infospot11);

    ImagePanorama['ku_admin_panorama'].link(ImagePanorama['library_panorama'], panoPosition1, 400, imageSrc);
    // var infospot10 = new pano.Infospot(300, imageSrc);

    infospotFunction('[Library]','ku_admin_panorama',{x:5800, y:1, z:200},80);

    // infospot12.position.set(5800, 0, 200);
    // infospot12.addHoverText('Library', 40);
    // ImagePanorama['ku_admin_panorama'].add(infospot12);
  });


  // /*
  // viewer.add(multi_purpose_hall_road_panorama);
  // viewer.add(civil_department_panorama);
  // viewer.add(ImagePanorama['bus_park_panorama']);
  // viewer.add(boys_hostel_panorama);
  // */
  // //viewer.add(otherPanorama);
  // //viewer.add(otherPanorama1);












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


//Geolocations
const geolocation = new Geolocation({
  // enableHighAccuracy must be set to true to have the heading value.
  trackingOptions: {
    enableHighAccuracy: true,
  },
  projection: view.getProjection(),
});
const accuracyFeature = new Feature();
geolocation.on('change:accuracyGeometry', function () {
  accuracyFeature.setGeometry(geolocation.getAccuracyGeometry());
});

const positionFeature = new Feature();
positionFeature.setStyle(
  new Style({
    image: new CircleStyle({
      radius: 6,
      fill: new Fill({
        color: '#3399CC',
      }),
      stroke: new Stroke({
        color: '#fff',
        width: 2,
      }),
    }),
  })
);
geolocation.on('change:position', function () {
  const coordinates = geolocation.getPosition();
  positionFeature.setGeometry(coordinates ? new Point(coordinates) : null);
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
  params: { 'LAYERS': 'KU:odm_orthophoto', 'TILED': true },
  serverType: 'geoserver',
});

var wmsLayer = new TileLayer({
  source: wmsSource,
  zIndex: -1
});


var GeoLocationLayer = new VectorLayer({
  map: map,
  source: new VectorSource({
    features: [accuracyFeature, positionFeature],
  }),
});


function el(id) {
  return document.getElementById(id);
}


// document.querySelectorAll('.tab-selector').forEach(el => {
  el('geo-location-icon').addEventListener('click', evt => {
    // let IsLocation = el("geo-location-icon").value;
      geolocation.setTracking(true);
      const coordinates = geolocation.getPosition();
      view.animate({
        center: coordinates,
        duration: 2000,
    
        zoom: 18.5,
      });
  })
// })

// el('geo-location-icon').on('change', function (e){
//   console.log(el("geo-location-icon").value)
//   el("geo-location-icon").value = !el("geo-location-icon")
//   geolocation.setTracking(this.checked);
// });


// geolocation.setTracking(true);

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
  layers: [BaseMap, wmsLayer, vector, points,GeoLocationLayer],
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

    var tags = data.properties.tags || "";
    var tagsArray = tags.split(',');

    var compare1 = stringSimilarity.compareTwoStrings(building_name.toUpperCase(), VarSearch.toUpperCase());
    var compare2 = stringSimilarity.compareTwoStrings(office_one.toUpperCase(), VarSearch.toUpperCase());
    var compare3 = stringSimilarity.compareTwoStrings(office_two.toUpperCase(), VarSearch.toUpperCase());
    var compare4 = stringSimilarity.compareTwoStrings(office_three.toUpperCase(), VarSearch.toUpperCase());
    var compare5 = stringSimilarity.compareTwoStrings(office_four.toUpperCase(), VarSearch.toUpperCase());

    let compare6 = 0
    tagsArray.every(tag => {
      compare6 = stringSimilarity.compareTwoStrings(tag.toUpperCase(), VarSearch.toUpperCase());
      console.log(compare6,"compare 6")
      if (compare6>0.9){return false}
      return true
    })
    let TotalCompare = compare1 + compare2+ compare3 +compare4+compare5+compare6
    console.log(TotalCompare,"total compare")
    if (TotalCompare > 0.9) {

      var coordinates = data.geometry.coordinates[0];
      var LineFeature = new Feature({
        geometry: new LineString(coordinates),
        name: 'Building'
      });
      SourceV.clear();
      SourceV.addFeature(LineFeature);
      const SearchCoordinate = LineFeature.getGeometry().getCoordinates();
      map.getView().setCenter(SearchCoordinate[0]);
      map.getView().setZoom(21);

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

// var routeSubmitBtn = document.getElementById("routeSubmitBtn");

// routeSubmitBtn.onclick = () => {
//   var RouteSelect = document.getElementById('RouteSelectID');
//   SubmitFunction(RouteSelect.value);

//   topFunction();

// };
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
  // console.log(office,"this is office nigaar")
  var FinalData = null;
  // document.getElementById('InfoDiv').innerHTML = "";
  readTextFile("data/DepartmentContacts.json", (text) => {
    var data = JSON.parse(text);

    // console.log(data)

    var dat = data.find(element => element.Office = office);
    for (var i = 0; i < data.length; i++) {
      // console.log(data[i].Office)
      if (data[i].Office == office.trim()) {
        FinalData = data[i]
      }
      // else 
      // {
      //   FinalData = {
      //     Office:"",
      //     Person_Incharge:"",
      //     Email:"",
      //     Phone_Number:"",
      //     Floor:""
      //   }
      // }
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
      Row.insertCell(0).innerHTML = "Office" + " " + (row).toString();
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
  if (Btable.rows[1]) {
    Btable.rows[1].cells[1].addEventListener("click", () => {

      officeClickInfo(Arguments[1])

    });
  }
  Btable.rows[0].cells[0].style.width = "21%";
  if (Btable.rows[2]) {
    Btable.rows[2].cells[1].addEventListener("click", () => {

      officeClickInfo(Arguments[2])

    });
  }
  if (Btable.rows[3]) {
    Btable.rows[3].cells[1].addEventListener("click", () => {

      officeClickInfo(Arguments[3])

    });
  }
  if (Btable.rows[4]) {
    Btable.rows[4].cells[1].addEventListener("click", () => {

      officeClickInfo(Arguments[4])

    });
  }




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
  img.style.width = "100%";
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


var HoverLabelSelected = null;
var BuildLabel = document.getElementById('VectorLabel');
map.on('pointermove', function (e) {
  // if (selected !== null) {
  //   selected.setStyle(undefined);
  //   selected = null;
  // }

  map.forEachFeatureAtPixel(e.pixel, function (f) {
    HoverLabelSelected = f;
    return true;
  });
  if (HoverLabelSelected) {
    // console.log(HoverLabelSelected.get('Build_Name'));
    BuildLabel.innerHTML = HoverLabelSelected.get('Build_Name');
  } else {
    BuildLabel.innerHTML = '&nbsp;';
  }
});

map.on('pointermove', function (evt) {
  if (evt.dragging) {
    return;
  }
  var pixel = map.getEventPixel(evt.originalEvent);
  var hit = map.forEachLayerAtPixel(pixel, function () {
    return true;
  });
  // map.getTargetElement().style.cursor = hit ? 'pointer' : '';
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
    // setTimeout(function () { map.removeLayer(BaseMap) }, 4000);
    OL3dDisable_ViewAnimation();
    toggleModal();
    // setTimeout(function () { document.getElementById('map').style.backgroundColor = 'black' }, 5000);


  });

document.querySelector('.modal_close-bar span')
  .addEventListener('click', toggleModal);




/*
document.querySelector('#show-modal')
    .addEventListener('click',toggleModal);
  */

