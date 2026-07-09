// ==============================================================================
// P1: AI-Assisted Surface Water Mapping using NDWI
// Location: Khandwa District, Madhya Pradesh
// ==============================================================================

// 1. Load Sentinel-2 surface reflectance imagery and apply cloud filtering
var image = ee.ImageCollection("COPERNICUS/S2_SR")
    .filterBounds(aoi)
    .filterDate('2022-01-01', '2022-12-31')
    .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 10))
    .select(['B3', 'B8'])
    .median();

// 2. Compute NDWI using a normalized difference function
var ndwi = image.normalizedDifference(['B3', 'B8']).rename('NDWI');

// 3. Apply AI-assisted rule-based classification by dynamically masking water pixels
var water = ndwi.gt(0);
var waterMasked = water.updateMask(water);

// 4. Area Statistics (Pixel-based area estimation)
var totalArea = ee.Image.pixelArea().reduceRegion({
    reducer: ee.Reducer.sum(),
    geometry: aoi,
    scale: 10,
    bestEffort: true
});
var total_km2 = ee.Number(totalArea.get('area')).divide(1e6);
print('Total AOI Area (sq km):', total_km2);

var waterArea = ee.Image.pixelArea()
    .updateMask(water)
    .reduceRegion({
        reducer: ee.Reducer.sum(),
        geometry: aoi,
        scale: 10,
        bestEffort: true
    });
var water_km2 = ee.Number(waterArea.get('area')).divide(1e6);
var percent_water = water_km2.divide(total_km2).multiply(100);
print('Water Area (sq km):', water_km2);
print('Water Percentage (%):', percent_water);

// 5. Export the AI-refined water mask to Google Drive
Export.image.toDrive({
    image: waterMasked,
    description: 'AI_Water_Mask_NDWI',
    scale: 30,
    region: aoi
});