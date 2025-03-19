ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([-1.636375, 9.224731, -0.003037, 10.159438]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleMaps_1 = new ol.layer.Tile({
            'title': 'Google Maps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_2 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Refactored_3 = new ol.format.GeoJSON();
var features_Refactored_3 = format_Refactored_3.readFeatures(json_Refactored_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Refactored_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Refactored_3.addFeatures(features_Refactored_3);
var lyr_Refactored_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Refactored_3, 
                style: style_Refactored_3,
                popuplayertitle: 'Refactored',
                interactive: false,
                title: '<img src="styles/legend/Refactored_3.png" /> Refactored'
            });
var format_communities_4 = new ol.format.GeoJSON();
var features_communities_4 = format_communities_4.readFeatures(json_communities_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_communities_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_communities_4.addFeatures(features_communities_4);
var lyr_communities_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_communities_4, 
                style: style_communities_4,
                popuplayertitle: 'communities',
                interactive: false,
                title: '<img src="styles/legend/communities_4.png" /> communities'
            });
var format_VIP_new_CommunityList_NoNewCommunities_5 = new ol.format.GeoJSON();
var features_VIP_new_CommunityList_NoNewCommunities_5 = format_VIP_new_CommunityList_NoNewCommunities_5.readFeatures(json_VIP_new_CommunityList_NoNewCommunities_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_VIP_new_CommunityList_NoNewCommunities_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VIP_new_CommunityList_NoNewCommunities_5.addFeatures(features_VIP_new_CommunityList_NoNewCommunities_5);
var lyr_VIP_new_CommunityList_NoNewCommunities_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VIP_new_CommunityList_NoNewCommunities_5, 
                style: style_VIP_new_CommunityList_NoNewCommunities_5,
                popuplayertitle: 'VIP_new_CommunityList_NoNewCommunities',
                interactive: true,
                title: 'VIP_new_CommunityList_NoNewCommunities'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_GoogleMaps_1.setVisible(true);lyr_OSMStandard_2.setVisible(true);lyr_Refactored_3.setVisible(false);lyr_communities_4.setVisible(false);lyr_VIP_new_CommunityList_NoNewCommunities_5.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_GoogleMaps_1,lyr_OSMStandard_2,lyr_Refactored_3,lyr_communities_4,lyr_VIP_new_CommunityList_NoNewCommunities_5];
lyr_Refactored_3.set('fieldAliases', {'district': 'district', 'district_id': 'district_id', 'community': 'community', 'community_id': 'community_id', 'commcode': 'commcode', 'gpslatitude': 'gpslatitude', 'gpslongitude': 'gpslongitude', 'gpsaltitude': 'gpsaltitude', 'gpsaccuracy': 'gpsaccuracy', 'Census target': 'Census target', 'baseline_target': 'baseline_target', 'interval to skip': 'interval to skip', 'Cohort': 'Cohort', 'Google_Directions': 'Google_Directions', });
lyr_communities_4.set('fieldAliases', {'district': 'district', 'district_id': 'district_id', 'community': 'community', 'community_id': 'community_id', 'commcode': 'commcode', 'gpslatitude': 'gpslatitude', 'gpslongitude': 'gpslongitude', 'gpsaltitude': 'gpsaltitude', 'gpsaccuracy': 'gpsaccuracy', 'Census target': 'Census target', 'baseline_target': 'baseline_target', 'interval to skip': 'interval to skip', 'Cohort': 'Cohort', 'Google_Directions': 'Google_Directions', });
lyr_VIP_new_CommunityList_NoNewCommunities_5.set('fieldAliases', {'district': 'District Name', 'district_id': 'ID of DIstrict', 'community': 'Name of Community', 'community_id': 'ID of Community', 'commcode': 'Code of Community', 'gpslatitude': 'Y Coordinate', 'gpslongitude': 'X Coordinate', 'gpsaltitude': 'point above sea level', 'gpsaccuracy': 'Accuracy of GPS point', 'Census target': 'Total Number of Households to Census', 'baseline_target': 'Total Number of Households selected for Baseline', 'interval to skip': 'Number of Households to Skip', 'Cohort': 'Type of Cohort', });
lyr_Refactored_3.set('fieldImages', {'district': 'TextEdit', 'district_id': 'Range', 'community': 'TextEdit', 'community_id': 'Range', 'commcode': 'Range', 'gpslatitude': 'TextEdit', 'gpslongitude': 'TextEdit', 'gpsaltitude': 'TextEdit', 'gpsaccuracy': 'TextEdit', 'Census target': 'Range', 'baseline_target': 'Range', 'interval to skip': 'Range', 'Cohort': 'Range', 'Google_Directions': 'TextEdit', });
lyr_communities_4.set('fieldImages', {'district': 'TextEdit', 'district_id': 'Range', 'community': 'TextEdit', 'community_id': 'Range', 'commcode': 'Range', 'gpslatitude': 'TextEdit', 'gpslongitude': 'TextEdit', 'gpsaltitude': 'TextEdit', 'gpsaccuracy': 'TextEdit', 'Census target': 'Range', 'baseline_target': 'Range', 'interval to skip': 'Range', 'Cohort': 'Range', 'Google_Directions': 'TextEdit', });
lyr_VIP_new_CommunityList_NoNewCommunities_5.set('fieldImages', {'district': 'TextEdit', 'district_id': 'Range', 'community': 'TextEdit', 'community_id': 'Range', 'commcode': 'Range', 'gpslatitude': 'TextEdit', 'gpslongitude': 'TextEdit', 'gpsaltitude': 'TextEdit', 'gpsaccuracy': 'TextEdit', 'Census target': 'Range', 'baseline_target': 'Range', 'interval to skip': 'Range', 'Cohort': 'Range', });
lyr_Refactored_3.set('fieldLabels', {'district': 'inline label - always visible', 'district_id': 'inline label - always visible', 'community': 'inline label - always visible', 'community_id': 'inline label - always visible', 'commcode': 'inline label - always visible', 'gpslatitude': 'inline label - always visible', 'gpslongitude': 'inline label - always visible', 'gpsaltitude': 'inline label - always visible', 'gpsaccuracy': 'inline label - always visible', 'Census target': 'inline label - always visible', 'baseline_target': 'inline label - always visible', 'interval to skip': 'inline label - always visible', 'Cohort': 'inline label - always visible', 'Google_Directions': 'inline label - always visible', });
lyr_communities_4.set('fieldLabels', {'district': 'inline label - always visible', 'district_id': 'inline label - always visible', 'community': 'inline label - always visible', 'community_id': 'inline label - always visible', 'commcode': 'inline label - always visible', 'gpslatitude': 'inline label - always visible', 'gpslongitude': 'inline label - always visible', 'gpsaltitude': 'inline label - always visible', 'gpsaccuracy': 'inline label - always visible', 'Census target': 'inline label - always visible', 'baseline_target': 'inline label - always visible', 'interval to skip': 'inline label - always visible', 'Cohort': 'inline label - always visible', 'Google_Directions': 'inline label - always visible', });
lyr_VIP_new_CommunityList_NoNewCommunities_5.set('fieldLabels', {'district': 'inline label - always visible', 'district_id': 'inline label - always visible', 'community': 'inline label - always visible', 'community_id': 'inline label - always visible', 'commcode': 'inline label - always visible', 'gpslatitude': 'inline label - always visible', 'gpslongitude': 'inline label - always visible', 'gpsaltitude': 'inline label - always visible', 'gpsaccuracy': 'inline label - always visible', 'Census target': 'inline label - always visible', 'baseline_target': 'inline label - always visible', 'interval to skip': 'inline label - always visible', 'Cohort': 'inline label - always visible', });
lyr_VIP_new_CommunityList_NoNewCommunities_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});