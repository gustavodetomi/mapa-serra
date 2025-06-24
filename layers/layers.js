var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_UsodoSolo_1 = new ol.format.GeoJSON();
var features_UsodoSolo_1 = format_UsodoSolo_1.readFeatures(json_UsodoSolo_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UsodoSolo_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UsodoSolo_1.addFeatures(features_UsodoSolo_1);
var lyr_UsodoSolo_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UsodoSolo_1, 
                style: style_UsodoSolo_1,
                popuplayertitle: 'Uso do Solo',
                interactive: true,
    title: 'Uso do Solo<br />\
    <img src="styles/legend/UsodoSolo_1_0.png" /> Aceso Terra<br />\
    <img src="styles/legend/UsodoSolo_1_1.png" /> Acesso Pavimentado<br />\
    <img src="styles/legend/UsodoSolo_1_2.png" /> Afloramento de Rocha<br />\
    <img src="styles/legend/UsodoSolo_1_3.png" /> Água<br />\
    <img src="styles/legend/UsodoSolo_1_4.png" /> Área Urbana<br />\
    <img src="styles/legend/UsodoSolo_1_5.png" /> Brejo<br />\
    <img src="styles/legend/UsodoSolo_1_6.png" /> Campo Cerrado<br />\
    <img src="styles/legend/UsodoSolo_1_7.png" /> Campo Ferruginoso Arbustivo<br />\
    <img src="styles/legend/UsodoSolo_1_8.png" /> Campo Ferruginoso Herbáceo<br />\
    <img src="styles/legend/UsodoSolo_1_9.png" /> Cerrado<br />\
    <img src="styles/legend/UsodoSolo_1_10.png" /> Cultivo<br />\
    <img src="styles/legend/UsodoSolo_1_11.png" /> Edificação<br />\
    <img src="styles/legend/UsodoSolo_1_12.png" /> Floresta Semidecidual<br />\
    <img src="styles/legend/UsodoSolo_1_13.png" /> Mineração<br />\
    <img src="styles/legend/UsodoSolo_1_14.png" /> Pastagem<br />\
    <img src="styles/legend/UsodoSolo_1_15.png" /> Sivicultura<br />\
    <img src="styles/legend/UsodoSolo_1_16.png" /> Solo Exposto<br />' });
var format_Limitemunicipal_2 = new ol.format.GeoJSON();
var features_Limitemunicipal_2 = format_Limitemunicipal_2.readFeatures(json_Limitemunicipal_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limitemunicipal_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limitemunicipal_2.addFeatures(features_Limitemunicipal_2);
var lyr_Limitemunicipal_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Limitemunicipal_2, 
                style: style_Limitemunicipal_2,
                popuplayertitle: 'Limite municipal',
                interactive: true,
                title: '<img src="styles/legend/Limitemunicipal_2.png" /> Limite municipal'
            });
var format_Zonadeamortecimento_3 = new ol.format.GeoJSON();
var features_Zonadeamortecimento_3 = format_Zonadeamortecimento_3.readFeatures(json_Zonadeamortecimento_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zonadeamortecimento_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zonadeamortecimento_3.addFeatures(features_Zonadeamortecimento_3);
var lyr_Zonadeamortecimento_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zonadeamortecimento_3, 
                style: style_Zonadeamortecimento_3,
                popuplayertitle: 'Zona de amortecimento',
                interactive: true,
                title: '<img src="styles/legend/Zonadeamortecimento_3.png" /> Zona de amortecimento'
            });
var format_MonumentoNaturalSerradaPiedade_4 = new ol.format.GeoJSON();
var features_MonumentoNaturalSerradaPiedade_4 = format_MonumentoNaturalSerradaPiedade_4.readFeatures(json_MonumentoNaturalSerradaPiedade_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MonumentoNaturalSerradaPiedade_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MonumentoNaturalSerradaPiedade_4.addFeatures(features_MonumentoNaturalSerradaPiedade_4);
var lyr_MonumentoNaturalSerradaPiedade_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MonumentoNaturalSerradaPiedade_4, 
                style: style_MonumentoNaturalSerradaPiedade_4,
                popuplayertitle: 'Monumento Natural Serra da Piedade',
                interactive: true,
                title: '<img src="styles/legend/MonumentoNaturalSerradaPiedade_4.png" /> Monumento Natural Serra da Piedade'
            });
var format_Estradasnopavimentadas_5 = new ol.format.GeoJSON();
var features_Estradasnopavimentadas_5 = format_Estradasnopavimentadas_5.readFeatures(json_Estradasnopavimentadas_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Estradasnopavimentadas_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Estradasnopavimentadas_5.addFeatures(features_Estradasnopavimentadas_5);
var lyr_Estradasnopavimentadas_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Estradasnopavimentadas_5, 
                style: style_Estradasnopavimentadas_5,
                popuplayertitle: 'Estradas não pavimentadas',
                interactive: true,
                title: '<img src="styles/legend/Estradasnopavimentadas_5.png" /> Estradas não pavimentadas'
            });
var format_Rodovias_6 = new ol.format.GeoJSON();
var features_Rodovias_6 = format_Rodovias_6.readFeatures(json_Rodovias_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rodovias_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rodovias_6.addFeatures(features_Rodovias_6);
var lyr_Rodovias_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rodovias_6, 
                style: style_Rodovias_6,
                popuplayertitle: 'Rodovias',
                interactive: true,
                title: '<img src="styles/legend/Rodovias_6.png" /> Rodovias'
            });
var format_Estradapavimentada_7 = new ol.format.GeoJSON();
var features_Estradapavimentada_7 = format_Estradapavimentada_7.readFeatures(json_Estradapavimentada_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Estradapavimentada_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Estradapavimentada_7.addFeatures(features_Estradapavimentada_7);
var lyr_Estradapavimentada_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Estradapavimentada_7, 
                style: style_Estradapavimentada_7,
                popuplayertitle: 'Estrada pavimentada',
                interactive: true,
                title: '<img src="styles/legend/Estradapavimentada_7.png" /> Estrada pavimentada'
            });
var format_BaslicaNossaSenhoradaPiedade_8 = new ol.format.GeoJSON();
var features_BaslicaNossaSenhoradaPiedade_8 = format_BaslicaNossaSenhoradaPiedade_8.readFeatures(json_BaslicaNossaSenhoradaPiedade_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BaslicaNossaSenhoradaPiedade_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaslicaNossaSenhoradaPiedade_8.addFeatures(features_BaslicaNossaSenhoradaPiedade_8);
var lyr_BaslicaNossaSenhoradaPiedade_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaslicaNossaSenhoradaPiedade_8, 
                style: style_BaslicaNossaSenhoradaPiedade_8,
                popuplayertitle: 'Basílica Nossa Senhora da Piedade',
                interactive: true,
                title: '<img src="styles/legend/BaslicaNossaSenhoradaPiedade_8.png" /> Basílica Nossa Senhora da Piedade'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_UsodoSolo_1.setVisible(true);lyr_Limitemunicipal_2.setVisible(true);lyr_Zonadeamortecimento_3.setVisible(true);lyr_MonumentoNaturalSerradaPiedade_4.setVisible(true);lyr_Estradasnopavimentadas_5.setVisible(true);lyr_Rodovias_6.setVisible(true);lyr_Estradapavimentada_7.setVisible(true);lyr_BaslicaNossaSenhoradaPiedade_8.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_UsodoSolo_1,lyr_Limitemunicipal_2,lyr_Zonadeamortecimento_3,lyr_MonumentoNaturalSerradaPiedade_4,lyr_Estradasnopavimentadas_5,lyr_Rodovias_6,lyr_Estradapavimentada_7,lyr_BaslicaNossaSenhoradaPiedade_8];
lyr_UsodoSolo_1.set('fieldAliases', {'ID': 'ID', 'NOME': 'NOME', 'TIPO': 'TIPO', 'AREA_HA': 'AREA_HA', 'REPRESENTATIVIDADE (%)': 'REPRESENTATIVIDADE (%)', 'DESCRIÇÃO': 'DESCRIÇÃO', 'LINK': 'LINK', });
lyr_Limitemunicipal_2.set('fieldAliases', {'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'SIGLA_UF': 'SIGLA_UF', 'AREA_KM2': 'AREA_KM2', });
lyr_Zonadeamortecimento_3.set('fieldAliases', {'ID': 'ID', 'SIGLA': 'SIGLA', 'NOME': 'NOME', 'ATO LEGAL': 'ATO LEGAL', 'DESCRIÇÃO': 'DESCRIÇÃO', 'ÁREA (m²)': 'ÁREA (m²)', });
lyr_MonumentoNaturalSerradaPiedade_4.set('fieldAliases', {'ID': 'ID', 'NOME': 'NOME', 'AREAKM²': 'AREAKM²', 'ATRIBUTOS': 'ATRIBUTOS', });
lyr_Estradasnopavimentadas_5.set('fieldAliases', {'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'tipo': 'tipo', 'TIPO2': 'TIPO2', });
lyr_Rodovias_6.set('fieldAliases', {'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'tipo': 'tipo', 'TIPO2': 'TIPO2', });
lyr_Estradapavimentada_7.set('fieldAliases', {'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'tipo': 'tipo', 'TIPO2': 'TIPO2', });
lyr_BaslicaNossaSenhoradaPiedade_8.set('fieldAliases', {'ID': 'ID', 'NOME': 'NOME', 'PROCESSO': 'PROCESSO', 'CATEGORIA': 'CATEGORIA', 'SUBCATEGORIA': 'SUBCATEGORIA', 'DESCRIÇÃO': 'DESCRIÇÃO', 'ETAPA': 'ETAPA', 'ATO LEGAL': 'ATO LEGAL', 'LIVRO': 'LIVRO', 'MUNICIPIO': 'MUNICIPIO', 'DISTRITO': 'DISTRITO', 'LONGITUDE': 'LONGITUDE', 'LATITUDE': 'LATITUDE', });
lyr_UsodoSolo_1.set('fieldImages', {'ID': 'TextEdit', 'NOME': 'TextEdit', 'TIPO': 'TextEdit', 'AREA_HA': 'TextEdit', 'REPRESENTATIVIDADE (%)': 'TextEdit', 'DESCRIÇÃO': 'TextEdit', 'LINK': 'TextEdit', });
lyr_Limitemunicipal_2.set('fieldImages', {'CD_MUN': '', 'NM_MUN': '', 'SIGLA_UF': '', 'AREA_KM2': '', });
lyr_Zonadeamortecimento_3.set('fieldImages', {'ID': '', 'SIGLA': '', 'NOME': '', 'ATO LEGAL': '', 'DESCRIÇÃO': '', 'ÁREA (m²)': '', });
lyr_MonumentoNaturalSerradaPiedade_4.set('fieldImages', {'ID': '', 'NOME': '', 'AREAKM²': '', 'ATRIBUTOS': '', });
lyr_Estradasnopavimentadas_5.set('fieldImages', {'fclass': 'TextEdit', 'name': 'TextEdit', 'ref': 'TextEdit', 'tipo': 'TextEdit', 'TIPO2': 'TextEdit', });
lyr_Rodovias_6.set('fieldImages', {'fclass': 'TextEdit', 'name': 'TextEdit', 'ref': 'TextEdit', 'tipo': 'TextEdit', 'TIPO2': 'TextEdit', });
lyr_Estradapavimentada_7.set('fieldImages', {'fclass': '', 'name': '', 'ref': '', 'tipo': '', 'TIPO2': '', });
lyr_BaslicaNossaSenhoradaPiedade_8.set('fieldImages', {'ID': '', 'NOME': '', 'PROCESSO': '', 'CATEGORIA': '', 'SUBCATEGORIA': '', 'DESCRIÇÃO': '', 'ETAPA': '', 'ATO LEGAL': '', 'LIVRO': '', 'MUNICIPIO': '', 'DISTRITO': '', 'LONGITUDE': '', 'LATITUDE': '', });
lyr_UsodoSolo_1.set('fieldLabels', {'ID': 'inline label - always visible', 'NOME': 'inline label - always visible', 'TIPO': 'inline label - always visible', 'AREA_HA': 'inline label - always visible', 'REPRESENTATIVIDADE (%)': 'inline label - always visible', 'DESCRIÇÃO': 'inline label - visible with data', 'LINK': 'inline label - visible with data', });
lyr_Limitemunicipal_2.set('fieldLabels', {'CD_MUN': 'no label', 'NM_MUN': 'no label', 'SIGLA_UF': 'no label', 'AREA_KM2': 'no label', });
lyr_Zonadeamortecimento_3.set('fieldLabels', {'ID': 'no label', 'SIGLA': 'no label', 'NOME': 'no label', 'ATO LEGAL': 'no label', 'DESCRIÇÃO': 'no label', 'ÁREA (m²)': 'no label', });
lyr_MonumentoNaturalSerradaPiedade_4.set('fieldLabels', {'ID': 'no label', 'NOME': 'no label', 'AREAKM²': 'no label', 'ATRIBUTOS': 'no label', });
lyr_Estradasnopavimentadas_5.set('fieldLabels', {'fclass': 'no label', 'name': 'no label', 'ref': 'no label', 'tipo': 'no label', 'TIPO2': 'no label', });
lyr_Rodovias_6.set('fieldLabels', {'fclass': 'no label', 'name': 'no label', 'ref': 'no label', 'tipo': 'no label', 'TIPO2': 'no label', });
lyr_Estradapavimentada_7.set('fieldLabels', {'fclass': 'no label', 'name': 'no label', 'ref': 'no label', 'tipo': 'no label', 'TIPO2': 'no label', });
lyr_BaslicaNossaSenhoradaPiedade_8.set('fieldLabels', {'ID': 'no label', 'NOME': 'no label', 'PROCESSO': 'no label', 'CATEGORIA': 'no label', 'SUBCATEGORIA': 'no label', 'DESCRIÇÃO': 'no label', 'ETAPA': 'no label', 'ATO LEGAL': 'no label', 'LIVRO': 'no label', 'MUNICIPIO': 'no label', 'DISTRITO': 'no label', 'LONGITUDE': 'no label', 'LATITUDE': 'no label', });
lyr_BaslicaNossaSenhoradaPiedade_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});