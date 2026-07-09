// ==============================================================================
// P2: AI-Based Vegetation Health Assessment using NDVI
// Location: Khandwa District, Madhya Pradesh
// ==============================================================================

// 1. Load Sentinel-2 surface reflectance imagery and apply filtering
var image = ee.ImageCollection("COPERNICUS/S2_SR")
    .filterBounds(aoi)
    .filterDate('2022-01-01', '2022-12-31')
    .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 10))
    .select(['B4', 'B8'])
    .median();

// 2. Compute NDVI using normalized difference
var ndvi = image.normalizedDifference(['B8', 'B4']).rename('NDVI');

// 3. Apply AI-based NDVI classification logic using conditional expressions
var classified = ndvi.expression(
    "(b('NDVI') < 0.2) ? 1 " +
    ": (b('NDVI') < 0.4) ? 2 " +
    ": (b('NDVI') < 0.6) ? 3 " +
    ": 4"
).rename('NDVI_Class');

// 4. AI-Inspired Neighborhood Filtering (Smoothing)
var smooth = classified.focal_mode(1);

// 5. Area Statistics (reduceRegion grouping)
var areaImage = ee.Image.pixelArea().addBands(smooth);
var stats = areaImage.reduceRegion({
    reducer: ee.Reducer.sum().group({
        groupField: 1,
        groupName: 'Class'
    }),
    geometry: aoi,
    scale: 10,
    bestEffort: true
});
print('Vegetation Area Stats:', stats);

// 6. Export the AI-refined vegetation map to Google Drive
Export.image.toDrive({
    image: smooth,
    description: 'AI_Vegetation_Map_NDVI',
    scale: 10,
    region: aoi
});