var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ComEntry_Communities_1 = new ol.format.GeoJSON();
var features_ComEntry_Communities_1 = format_ComEntry_Communities_1.readFeatures(json_ComEntry_Communities_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ComEntry_Communities_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ComEntry_Communities_1.addFeatures(features_ComEntry_Communities_1);
var lyr_ComEntry_Communities_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ComEntry_Communities_1, 
                style: style_ComEntry_Communities_1,
                popuplayertitle: 'Com-Entry_Communities',
                interactive: true,
    title: 'Com-Entry_Communities<br />\
    <img src="styles/legend/ComEntry_Communities_1_0.png" /> KARAGA<br />\
    <img src="styles/legend/ComEntry_Communities_1_1.png" /> KUNBUNGU<br />\
    <img src="styles/legend/ComEntry_Communities_1_2.png" /> MION<br />\
    <img src="styles/legend/ComEntry_Communities_1_3.png" /> TOLON<br />\
    <img src="styles/legend/ComEntry_Communities_1_4.png" /> <br />' });

lyr_OSMStandard_0.setVisible(true);lyr_ComEntry_Communities_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_ComEntry_Communities_1];
lyr_ComEntry_Communities_1.set('fieldAliases', {'qc_id': 'qc_id', 'district': 'district', 'community': 'community', 'gpslatitude': 'gpslatitude', 'gpslongitude': 'gpslongitude', });
lyr_ComEntry_Communities_1.set('fieldImages', {'qc_id': '', 'district': 'TextEdit', 'community': 'TextEdit', 'gpslatitude': 'TextEdit', 'gpslongitude': 'TextEdit', });
lyr_ComEntry_Communities_1.set('fieldLabels', {'qc_id': 'no label', 'district': 'inline label - always visible', 'community': 'inline label - always visible', 'gpslatitude': 'no label', 'gpslongitude': 'no label', });
lyr_ComEntry_Communities_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});