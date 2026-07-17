var wms_layers = [];

var lyr_ORTOMOSAICO_MARCONI_060223_UTM21S_modificado_0 = new ol.layer.Image({
        opacity: 1,
        
    title: 'ORTOMOSAICO_MARCONI_060223_UTM21S_modificado<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/ORTOMOSAICO_MARCONI_060223_UTM21S_modificado_0.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-6251724.264018, -4142157.517936, -6251059.926807, -4141434.552546]
        })
    });
var format_Cursosdeagua_1 = new ol.format.GeoJSON();
var features_Cursosdeagua_1 = format_Cursosdeagua_1.readFeatures(json_Cursosdeagua_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cursosdeagua_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cursosdeagua_1.addFeatures(features_Cursosdeagua_1);
var lyr_Cursosdeagua_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cursosdeagua_1, 
                style: style_Cursosdeagua_1,
                popuplayertitle: 'Cursos de agua',
                interactive: false,
                title: '<img src="styles/legend/Cursosdeagua_1.png" /> Cursos de agua'
            });
var format_Relevamiento_2 = new ol.format.GeoJSON();
var features_Relevamiento_2 = format_Relevamiento_2.readFeatures(json_Relevamiento_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Relevamiento_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Relevamiento_2.addFeatures(features_Relevamiento_2);
var lyr_Relevamiento_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Relevamiento_2, 
                style: style_Relevamiento_2,
                popuplayertitle: 'Relevamiento',
                interactive: false,
                title: '<img src="styles/legend/Relevamiento_2.png" /> Relevamiento'
            });
var format_Colectoresexistentes_3 = new ol.format.GeoJSON();
var features_Colectoresexistentes_3 = format_Colectoresexistentes_3.readFeatures(json_Colectoresexistentes_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Colectoresexistentes_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Colectoresexistentes_3.addFeatures(features_Colectoresexistentes_3);
var lyr_Colectoresexistentes_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Colectoresexistentes_3, 
                style: style_Colectoresexistentes_3,
                popuplayertitle: 'Colectores existentes',
                interactive: false,
                title: '<img src="styles/legend/Colectoresexistentes_3.png" /> Colectores existentes'
            });
var format_Padrones_4 = new ol.format.GeoJSON();
var features_Padrones_4 = format_Padrones_4.readFeatures(json_Padrones_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Padrones_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Padrones_4.addFeatures(features_Padrones_4);
var lyr_Padrones_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Padrones_4, 
                style: style_Padrones_4,
                popuplayertitle: 'Padrones ',
                interactive: false,
                title: '<img src="styles/legend/Padrones_4.png" /> Padrones '
            });
var format_CriadeCerdos_5 = new ol.format.GeoJSON();
var features_CriadeCerdos_5 = format_CriadeCerdos_5.readFeatures(json_CriadeCerdos_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CriadeCerdos_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CriadeCerdos_5.addFeatures(features_CriadeCerdos_5);
var lyr_CriadeCerdos_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CriadeCerdos_5, 
                style: style_CriadeCerdos_5,
                popuplayertitle: 'Cria de Cerdos',
                interactive: false,
                title: '<img src="styles/legend/CriadeCerdos_5.png" /> Cria de Cerdos'
            });
var format_cerdos_6 = new ol.format.GeoJSON();
var features_cerdos_6 = format_cerdos_6.readFeatures(json_cerdos_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cerdos_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cerdos_6.addFeatures(features_cerdos_6);
var lyr_cerdos_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_cerdos_6, 
                style: style_cerdos_6,
                popuplayertitle: 'cerdos',
                interactive: false,
                title: '<img src="styles/legend/cerdos_6.png" /> cerdos'
            });
var format_Clasificacin_7 = new ol.format.GeoJSON();
var features_Clasificacin_7 = format_Clasificacin_7.readFeatures(json_Clasificacin_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Clasificacin_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Clasificacin_7.addFeatures(features_Clasificacin_7);
var lyr_Clasificacin_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Clasificacin_7, 
                style: style_Clasificacin_7,
                popuplayertitle: 'Clasificación',
                interactive: false,
                title: '<img src="styles/legend/Clasificacin_7.png" /> Clasificación'
            });
var format_clacificadores1_8 = new ol.format.GeoJSON();
var features_clacificadores1_8 = format_clacificadores1_8.readFeatures(json_clacificadores1_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_clacificadores1_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clacificadores1_8.addFeatures(features_clacificadores1_8);
var lyr_clacificadores1_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_clacificadores1_8, 
                style: style_clacificadores1_8,
                popuplayertitle: 'clacificadores 1',
                interactive: false,
                title: '<img src="styles/legend/clacificadores1_8.png" /> clacificadores 1'
            });
var format_VertidodeBasura_9 = new ol.format.GeoJSON();
var features_VertidodeBasura_9 = format_VertidodeBasura_9.readFeatures(json_VertidodeBasura_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VertidodeBasura_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VertidodeBasura_9.addFeatures(features_VertidodeBasura_9);
var lyr_VertidodeBasura_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VertidodeBasura_9, 
                style: style_VertidodeBasura_9,
                popuplayertitle: 'Vertido de Basura',
                interactive: false,
                title: '<img src="styles/legend/VertidodeBasura_9.png" /> Vertido de Basura'
            });
var format_SinRecoleccin_10 = new ol.format.GeoJSON();
var features_SinRecoleccin_10 = format_SinRecoleccin_10.readFeatures(json_SinRecoleccin_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SinRecoleccin_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SinRecoleccin_10.addFeatures(features_SinRecoleccin_10);
var lyr_SinRecoleccin_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SinRecoleccin_10, 
                style: style_SinRecoleccin_10,
                popuplayertitle: 'Sin Recolección',
                interactive: false,
                title: '<img src="styles/legend/SinRecoleccin_10.png" /> Sin Recolección'
            });
var format_Sinclasificar_11 = new ol.format.GeoJSON();
var features_Sinclasificar_11 = format_Sinclasificar_11.readFeatures(json_Sinclasificar_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sinclasificar_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sinclasificar_11.addFeatures(features_Sinclasificar_11);
var lyr_Sinclasificar_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sinclasificar_11, 
                style: style_Sinclasificar_11,
                popuplayertitle: 'Sin clasificar',
                interactive: false,
                title: '<img src="styles/legend/Sinclasificar_11.png" /> Sin clasificar'
            });
var format_Depositosacopio1_12 = new ol.format.GeoJSON();
var features_Depositosacopio1_12 = format_Depositosacopio1_12.readFeatures(json_Depositosacopio1_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Depositosacopio1_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Depositosacopio1_12.addFeatures(features_Depositosacopio1_12);
var lyr_Depositosacopio1_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Depositosacopio1_12, 
                style: style_Depositosacopio1_12,
                popuplayertitle: 'Depositos acopio 1',
                interactive: false,
                title: '<img src="styles/legend/Depositosacopio1_12.png" /> Depositos acopio 1'
            });
var format_Edificacionesporexporpiarotros_13 = new ol.format.GeoJSON();
var features_Edificacionesporexporpiarotros_13 = format_Edificacionesporexporpiarotros_13.readFeatures(json_Edificacionesporexporpiarotros_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Edificacionesporexporpiarotros_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Edificacionesporexporpiarotros_13.addFeatures(features_Edificacionesporexporpiarotros_13);
var lyr_Edificacionesporexporpiarotros_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Edificacionesporexporpiarotros_13, 
                style: style_Edificacionesporexporpiarotros_13,
                popuplayertitle: 'Edificaciones por exporpiar otros',
                interactive: false,
                title: '<img src="styles/legend/Edificacionesporexporpiarotros_13.png" /> Edificaciones por exporpiar otros'
            });
var format_Edificacionesporexporpiarvivienda_14 = new ol.format.GeoJSON();
var features_Edificacionesporexporpiarvivienda_14 = format_Edificacionesporexporpiarvivienda_14.readFeatures(json_Edificacionesporexporpiarvivienda_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Edificacionesporexporpiarvivienda_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Edificacionesporexporpiarvivienda_14.addFeatures(features_Edificacionesporexporpiarvivienda_14);
var lyr_Edificacionesporexporpiarvivienda_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Edificacionesporexporpiarvivienda_14, 
                style: style_Edificacionesporexporpiarvivienda_14,
                popuplayertitle: 'Edificaciones por exporpiar vivienda',
                interactive: false,
                title: '<img src="styles/legend/Edificacionesporexporpiarvivienda_14.png" /> Edificaciones por exporpiar vivienda'
            });
var format_NuevosColectoresdeSaneamiento_15 = new ol.format.GeoJSON();
var features_NuevosColectoresdeSaneamiento_15 = format_NuevosColectoresdeSaneamiento_15.readFeatures(json_NuevosColectoresdeSaneamiento_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NuevosColectoresdeSaneamiento_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NuevosColectoresdeSaneamiento_15.addFeatures(features_NuevosColectoresdeSaneamiento_15);
var lyr_NuevosColectoresdeSaneamiento_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NuevosColectoresdeSaneamiento_15, 
                style: style_NuevosColectoresdeSaneamiento_15,
                popuplayertitle: 'Nuevos Colectores de Saneamiento',
                interactive: false,
                title: '<img src="styles/legend/NuevosColectoresdeSaneamiento_15.png" /> Nuevos Colectores de Saneamiento'
            });
var format_Nuevascamarasdeimpeccion_16 = new ol.format.GeoJSON();
var features_Nuevascamarasdeimpeccion_16 = format_Nuevascamarasdeimpeccion_16.readFeatures(json_Nuevascamarasdeimpeccion_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nuevascamarasdeimpeccion_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nuevascamarasdeimpeccion_16.addFeatures(features_Nuevascamarasdeimpeccion_16);
var lyr_Nuevascamarasdeimpeccion_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nuevascamarasdeimpeccion_16, 
                style: style_Nuevascamarasdeimpeccion_16,
                popuplayertitle: 'Nuevas camaras de impeccion',
                interactive: false,
                title: '<img src="styles/legend/Nuevascamarasdeimpeccion_16.png" /> Nuevas camaras de impeccion'
            });
var format_Nuevascamarasterminales_17 = new ol.format.GeoJSON();
var features_Nuevascamarasterminales_17 = format_Nuevascamarasterminales_17.readFeatures(json_Nuevascamarasterminales_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nuevascamarasterminales_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nuevascamarasterminales_17.addFeatures(features_Nuevascamarasterminales_17);
var lyr_Nuevascamarasterminales_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nuevascamarasterminales_17, 
                style: style_Nuevascamarasterminales_17,
                popuplayertitle: 'Nuevas camaras terminales',
                interactive: false,
                title: '<img src="styles/legend/Nuevascamarasterminales_17.png" /> Nuevas camaras terminales'
            });
var format_Nombresdecalles_18 = new ol.format.GeoJSON();
var features_Nombresdecalles_18 = format_Nombresdecalles_18.readFeatures(json_Nombresdecalles_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nombresdecalles_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nombresdecalles_18.addFeatures(features_Nombresdecalles_18);
var lyr_Nombresdecalles_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nombresdecalles_18, 
                style: style_Nombresdecalles_18,
                popuplayertitle: 'Nombres de calles',
                interactive: false,
                title: '<img src="styles/legend/Nombresdecalles_18.png" /> Nombres de calles'
            });
var format_Cateosplomoverde_19 = new ol.format.GeoJSON();
var features_Cateosplomoverde_19 = format_Cateosplomoverde_19.readFeatures(json_Cateosplomoverde_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cateosplomoverde_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cateosplomoverde_19.addFeatures(features_Cateosplomoverde_19);
var lyr_Cateosplomoverde_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cateosplomoverde_19, 
                style: style_Cateosplomoverde_19,
                popuplayertitle: 'Cateos plomo verde',
                interactive: false,
                title: '<img src="styles/legend/Cateosplomoverde_19.png" /> Cateos plomo verde'
            });
var format_Cateocromoverde_20 = new ol.format.GeoJSON();
var features_Cateocromoverde_20 = format_Cateocromoverde_20.readFeatures(json_Cateocromoverde_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cateocromoverde_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cateocromoverde_20.addFeatures(features_Cateocromoverde_20);
var lyr_Cateocromoverde_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cateocromoverde_20, 
                style: style_Cateocromoverde_20,
                popuplayertitle: 'Cateo cromo verde',
                interactive: false,
                title: '<img src="styles/legend/Cateocromoverde_20.png" /> Cateo cromo verde'
            });
var format_Cateosplomorojo_21 = new ol.format.GeoJSON();
var features_Cateosplomorojo_21 = format_Cateosplomorojo_21.readFeatures(json_Cateosplomorojo_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cateosplomorojo_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cateosplomorojo_21.addFeatures(features_Cateosplomorojo_21);
var lyr_Cateosplomorojo_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cateosplomorojo_21, 
                style: style_Cateosplomorojo_21,
                popuplayertitle: 'Cateos plomo rojo',
                interactive: false,
                title: '<img src="styles/legend/Cateosplomorojo_21.png" /> Cateos plomo rojo'
            });
var format_Cateoscromorojo_22 = new ol.format.GeoJSON();
var features_Cateoscromorojo_22 = format_Cateoscromorojo_22.readFeatures(json_Cateoscromorojo_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cateoscromorojo_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cateoscromorojo_22.addFeatures(features_Cateoscromorojo_22);
var lyr_Cateoscromorojo_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cateoscromorojo_22, 
                style: style_Cateoscromorojo_22,
                popuplayertitle: 'Cateos cromo rojo',
                interactive: false,
                title: '<img src="styles/legend/Cateoscromorojo_22.png" /> Cateos cromo rojo'
            });

lyr_ORTOMOSAICO_MARCONI_060223_UTM21S_modificado_0.setVisible(true);lyr_Cursosdeagua_1.setVisible(true);lyr_Relevamiento_2.setVisible(true);lyr_Colectoresexistentes_3.setVisible(true);lyr_Padrones_4.setVisible(true);lyr_CriadeCerdos_5.setVisible(true);lyr_cerdos_6.setVisible(true);lyr_Clasificacin_7.setVisible(true);lyr_clacificadores1_8.setVisible(true);lyr_VertidodeBasura_9.setVisible(true);lyr_SinRecoleccin_10.setVisible(true);lyr_Sinclasificar_11.setVisible(true);lyr_Depositosacopio1_12.setVisible(true);lyr_Edificacionesporexporpiarotros_13.setVisible(true);lyr_Edificacionesporexporpiarvivienda_14.setVisible(true);lyr_NuevosColectoresdeSaneamiento_15.setVisible(true);lyr_Nuevascamarasdeimpeccion_16.setVisible(true);lyr_Nuevascamarasterminales_17.setVisible(true);lyr_Nombresdecalles_18.setVisible(true);lyr_Cateosplomoverde_19.setVisible(true);lyr_Cateocromoverde_20.setVisible(true);lyr_Cateosplomorojo_21.setVisible(true);lyr_Cateoscromorojo_22.setVisible(true);
var layersList = [lyr_ORTOMOSAICO_MARCONI_060223_UTM21S_modificado_0,lyr_Cursosdeagua_1,lyr_Relevamiento_2,lyr_Colectoresexistentes_3,lyr_Padrones_4,lyr_CriadeCerdos_5,lyr_cerdos_6,lyr_Clasificacin_7,lyr_clacificadores1_8,lyr_VertidodeBasura_9,lyr_SinRecoleccin_10,lyr_Sinclasificar_11,lyr_Depositosacopio1_12,lyr_Edificacionesporexporpiarotros_13,lyr_Edificacionesporexporpiarvivienda_14,lyr_NuevosColectoresdeSaneamiento_15,lyr_Nuevascamarasdeimpeccion_16,lyr_Nuevascamarasterminales_17,lyr_Nombresdecalles_18,lyr_Cateosplomoverde_19,lyr_Cateocromoverde_20,lyr_Cateosplomorojo_21,lyr_Cateoscromorojo_22];
lyr_Cursosdeagua_1.set('fieldAliases', {'GID': 'GID', 'NATURALEZA': 'NATURALEZA', 'NOMBRE_CUR': 'NOMBRE_CUR', });
lyr_Relevamiento_2.set('fieldAliases', {'fid': 'fid', 'Calle': 'Calle', });
lyr_Colectoresexistentes_3.set('fieldAliases', {'GID': 'GID', 'ELEMRED': 'ELEMRED', 'TIPOTRA': 'TIPOTRA', 'DESC_TRAMO': 'DESC_TRAMO', 'DESC_SECCI': 'DESC_SECCI', 'DIM1': 'DIM1', 'DIM2': 'DIM2', 'ZARRIBA': 'ZARRIBA', 'ZABAJO': 'ZABAJO', 'LONGITUD': 'LONGITUD', 'DATO_OBRA': 'DATO_OBRA', });
lyr_Padrones_4.set('fieldAliases', {'GID': 'GID', 'PADRON': 'PADRON', 'AREATOT': 'AREATOT', 'AREACAT': 'AREACAT', 'PH': 'PH', 'IMPONIBLE': 'IMPONIBLE', 'CARPETA_PH': 'CARPETA_PH', });
lyr_CriadeCerdos_5.set('fieldAliases', {'fid': 'fid', });
lyr_cerdos_6.set('fieldAliases', {'id': 'id', });
lyr_Clasificacin_7.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'descriptio': 'descriptio', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'gx_media_l': 'gx_media_l', 'x': 'x', 'y': 'y', 'Dirección': 'Dirección', 'Tipo': 'Tipo', 'Sub-tipo': 'Sub-tipo', 'Padrón': 'Padrón', 'Tipo_suelo': 'Tipo_suelo', 'Titular': 'Titular', 'Padrón_2': 'Padrón_2', 'Desc.': 'Desc.', });
lyr_clacificadores1_8.set('fieldAliases', {'id': 'id', });
lyr_VertidodeBasura_9.set('fieldAliases', {'id': 'id', });
lyr_SinRecoleccin_10.set('fieldAliases', {'id': 'id', });
lyr_Sinclasificar_11.set('fieldAliases', {'id': 'id', });
lyr_Depositosacopio1_12.set('fieldAliases', {'id': 'id', });
lyr_Edificacionesporexporpiarotros_13.set('fieldAliases', {'id': 'id', });
lyr_Edificacionesporexporpiarvivienda_14.set('fieldAliases', {'id': 'id', });
lyr_NuevosColectoresdeSaneamiento_15.set('fieldAliases', {'id': 'id', });
lyr_Nuevascamarasdeimpeccion_16.set('fieldAliases', {'id': 'id', 'CI': 'CI', });
lyr_Nuevascamarasterminales_17.set('fieldAliases', {'id': 'id', 'CT': 'CT', });
lyr_Nombresdecalles_18.set('fieldAliases', {'NOM_CALLE': 'NOM_CALLE', 'COD_DEPTO': 'COD_DEPTO', 'COD_LOCALI': 'COD_LOCALI', 'GID': 'GID', 'COD_NOMBRE': 'COD_NOMBRE', 'TIPO': 'TIPO', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', });
lyr_Cateosplomoverde_19.set('fieldAliases', {'fid': 'fid', 'field_1': 'field_1', 'field_2': 'field_2', 'field_3': 'field_3', 'Resultados de cateos a 2cm de profundidad': 'Resultados de cateos a 2cm de profundidad', });
lyr_Cateocromoverde_20.set('fieldAliases', {'fid': 'fid', 'field_1': 'field_1', 'field_2': 'field_2', 'field_3': 'field_3', 'Resultados de cateos a 2cm de profundidaD': 'Resultados de cateos a 2cm de profundidaD', });
lyr_Cateosplomorojo_21.set('fieldAliases', {'fid': 'fid', 'field_1': 'field_1', 'field_2': 'field_2', 'field_3': 'field_3', 'Resultados de cateos a 2cm de profundidad': 'Resultados de cateos a 2cm de profundidad', });
lyr_Cateoscromorojo_22.set('fieldAliases', {'fid': 'fid', 'field_1': 'field_1', 'field_2': 'field_2', 'field_3': 'field_3', 'Resultados de cateos a 2cm de profundidad': 'Resultados de cateos a 2cm de profundidad', });
lyr_Cursosdeagua_1.set('fieldImages', {'GID': 'TextEdit', 'NATURALEZA': 'TextEdit', 'NOMBRE_CUR': 'TextEdit', });
lyr_Relevamiento_2.set('fieldImages', {'fid': 'Hidden', 'Calle': 'TextEdit', });
lyr_Colectoresexistentes_3.set('fieldImages', {'GID': 'TextEdit', 'ELEMRED': 'TextEdit', 'TIPOTRA': 'TextEdit', 'DESC_TRAMO': 'TextEdit', 'DESC_SECCI': 'TextEdit', 'DIM1': 'TextEdit', 'DIM2': 'TextEdit', 'ZARRIBA': 'TextEdit', 'ZABAJO': 'TextEdit', 'LONGITUD': 'TextEdit', 'DATO_OBRA': 'TextEdit', });
lyr_Padrones_4.set('fieldImages', {'GID': 'TextEdit', 'PADRON': 'TextEdit', 'AREATOT': 'TextEdit', 'AREACAT': 'TextEdit', 'PH': 'TextEdit', 'IMPONIBLE': 'TextEdit', 'CARPETA_PH': 'TextEdit', });
lyr_CriadeCerdos_5.set('fieldImages', {'fid': 'TextEdit', });
lyr_cerdos_6.set('fieldImages', {'id': 'TextEdit', });
lyr_Clasificacin_7.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'gx_media_l': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'Dirección': 'TextEdit', 'Tipo': 'TextEdit', 'Sub-tipo': 'TextEdit', 'Padrón': 'TextEdit', 'Tipo_suelo': 'TextEdit', 'Titular': 'TextEdit', 'Padrón_2': 'TextEdit', 'Desc.': 'TextEdit', });
lyr_clacificadores1_8.set('fieldImages', {'id': 'TextEdit', });
lyr_VertidodeBasura_9.set('fieldImages', {'id': 'TextEdit', });
lyr_SinRecoleccin_10.set('fieldImages', {'id': 'TextEdit', });
lyr_Sinclasificar_11.set('fieldImages', {'id': 'TextEdit', });
lyr_Depositosacopio1_12.set('fieldImages', {'id': 'TextEdit', });
lyr_Edificacionesporexporpiarotros_13.set('fieldImages', {'id': 'TextEdit', });
lyr_Edificacionesporexporpiarvivienda_14.set('fieldImages', {'id': '', });
lyr_NuevosColectoresdeSaneamiento_15.set('fieldImages', {'id': 'TextEdit', });
lyr_Nuevascamarasdeimpeccion_16.set('fieldImages', {'id': 'TextEdit', 'CI': 'TextEdit', });
lyr_Nuevascamarasterminales_17.set('fieldImages', {'id': 'TextEdit', 'CT': 'TextEdit', });
lyr_Nombresdecalles_18.set('fieldImages', {'NOM_CALLE': 'TextEdit', 'COD_DEPTO': 'Range', 'COD_LOCALI': 'TextEdit', 'GID': 'TextEdit', 'COD_NOMBRE': 'TextEdit', 'TIPO': 'TextEdit', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', });
lyr_Cateosplomoverde_19.set('fieldImages', {'fid': 'TextEdit', 'field_1': 'TextEdit', 'field_2': 'Range', 'field_3': 'Range', 'Resultados de cateos a 2cm de profundidad': 'TextEdit', });
lyr_Cateocromoverde_20.set('fieldImages', {'fid': 'TextEdit', 'field_1': 'TextEdit', 'field_2': 'Range', 'field_3': 'Range', 'Resultados de cateos a 2cm de profundidaD': 'TextEdit', });
lyr_Cateosplomorojo_21.set('fieldImages', {'fid': 'TextEdit', 'field_1': 'TextEdit', 'field_2': 'Range', 'field_3': 'Range', 'Resultados de cateos a 2cm de profundidad': 'TextEdit', });
lyr_Cateoscromorojo_22.set('fieldImages', {'fid': 'TextEdit', 'field_1': 'TextEdit', 'field_2': 'Range', 'field_3': 'Range', 'Resultados de cateos a 2cm de profundidad': 'TextEdit', });
lyr_Cursosdeagua_1.set('fieldLabels', {'GID': 'header label - visible with data', 'NATURALEZA': 'hidden field', 'NOMBRE_CUR': 'hidden field', });
lyr_Relevamiento_2.set('fieldLabels', {'Calle': 'inline label - visible with data', });
lyr_Colectoresexistentes_3.set('fieldLabels', {'GID': 'hidden field', 'ELEMRED': 'inline label - visible with data', 'TIPOTRA': 'no label', 'DESC_TRAMO': 'no label', 'DESC_SECCI': 'no label', 'DIM1': 'no label', 'DIM2': 'no label', 'ZARRIBA': 'no label', 'ZABAJO': 'no label', 'LONGITUD': 'no label', 'DATO_OBRA': 'no label', });
lyr_Padrones_4.set('fieldLabels', {'GID': 'header label - always visible', 'PADRON': 'inline label - always visible', 'AREATOT': 'header label - visible with data', 'AREACAT': 'header label - visible with data', 'PH': 'inline label - always visible', 'IMPONIBLE': 'inline label - always visible', 'CARPETA_PH': 'inline label - always visible', });
lyr_CriadeCerdos_5.set('fieldLabels', {'fid': 'no label', });
lyr_cerdos_6.set('fieldLabels', {'id': 'no label', });
lyr_Clasificacin_7.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'descriptio': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'gx_media_l': 'no label', 'x': 'no label', 'y': 'no label', 'Dirección': 'no label', 'Tipo': 'no label', 'Sub-tipo': 'no label', 'Padrón': 'no label', 'Tipo_suelo': 'no label', 'Titular': 'no label', 'Padrón_2': 'no label', 'Desc.': 'no label', });
lyr_clacificadores1_8.set('fieldLabels', {'id': 'inline label - visible with data', });
lyr_VertidodeBasura_9.set('fieldLabels', {'id': 'header label - visible with data', });
lyr_SinRecoleccin_10.set('fieldLabels', {'id': 'no label', });
lyr_Sinclasificar_11.set('fieldLabels', {'id': 'header label - visible with data', });
lyr_Depositosacopio1_12.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_Edificacionesporexporpiarotros_13.set('fieldLabels', {'id': 'no label', });
lyr_Edificacionesporexporpiarvivienda_14.set('fieldLabels', {'id': 'no label', });
lyr_NuevosColectoresdeSaneamiento_15.set('fieldLabels', {'id': 'no label', });
lyr_Nuevascamarasdeimpeccion_16.set('fieldLabels', {'id': 'no label', 'CI': 'no label', });
lyr_Nuevascamarasterminales_17.set('fieldLabels', {'id': 'no label', 'CT': 'no label', });
lyr_Nombresdecalles_18.set('fieldLabels', {'NOM_CALLE': 'header label - visible with data', 'COD_DEPTO': 'inline label - always visible', 'COD_LOCALI': 'inline label - visible with data', 'GID': 'inline label - always visible', 'COD_NOMBRE': 'inline label - visible with data', 'TIPO': 'inline label - visible with data', });
lyr_Cateosplomoverde_19.set('fieldLabels', {'fid': 'hidden field', 'field_1': 'hidden field', 'field_2': 'hidden field', 'field_3': 'hidden field', 'Resultados de cateos a 2cm de profundidad': 'inline label - visible with data', });
lyr_Cateocromoverde_20.set('fieldLabels', {'fid': 'hidden field', 'field_1': 'hidden field', 'field_2': 'hidden field', 'field_3': 'hidden field', 'Resultados de cateos a 2cm de profundidaD': 'inline label - visible with data', });
lyr_Cateosplomorojo_21.set('fieldLabels', {'fid': 'hidden field', 'field_1': 'hidden field', 'field_2': 'hidden field', 'field_3': 'hidden field', 'Resultados de cateos a 2cm de profundidad': 'inline label - visible with data', });
lyr_Cateoscromorojo_22.set('fieldLabels', {'fid': 'hidden field', 'field_1': 'hidden field', 'field_2': 'hidden field', 'field_3': 'hidden field', 'Resultados de cateos a 2cm de profundidad': 'inline label - visible with data', });
lyr_Cateoscromorojo_22.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});