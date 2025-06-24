var size = 0;
var placement = 'point';
function categories_UsodoSolo_1(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'Aceso Terra':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(0,0,0,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Acesso Pavimentado':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(150,150,150,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Afloramento de Rocha':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(128,101,22,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Água':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(37,195,239,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Área Urbana':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(254,168,9,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Brejo':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(129,158,66,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Campo Cerrado':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(163,255,65,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Campo Ferruginoso Arbustivo':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(56,254,21,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Campo Ferruginoso Herbáceo':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(16,224,141,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Cerrado':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(198,206,50,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Cultivo':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(20,148,127,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Edificação':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(254,25,0,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Floresta Semidecidual':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(20,168,28,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Mineração':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(140,32,72,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Pastagem':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(182,217,149,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Sivicultura':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(245,245,12,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Solo Exposto':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(210,144,0,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_UsodoSolo_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("NOME");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
    var style = categories_UsodoSolo_1(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
