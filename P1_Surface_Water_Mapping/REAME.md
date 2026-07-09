# AI-Assisted Surface Water Mapping (NDWI)

This module utilizes Sentinel-2 surface reflectance imagery to dynamically extract and calculate the total surface water area within the Khandwa District.

## ⚙️ Methodology
1. Applies cloud masking (filtering for <10% cloud cover) over a full temporal year.
2. Computes the Normalized Difference Water Index (NDWI) using bands B3 (Green) and B8 (NIR).
3. Utilizes AI-assisted rule-based classification to isolate pixels where NDWI > 0.
4. Dynamically calculates the total square kilometer area of the extracted water mask.

## 💻 Interactive Earth Engine Code
You can view and run the extraction pipeline directly in your browser without any local setup:
👉 **[Run NDWI Script in Earth Engine](https://code.earthengine.google.com/275575f43c05f1eebb619832297401e7)**

## 📄 Documentation
* `Project_Report_1.pdf`: Full technical report detailing the study area, methodology, and accuracy analysis.
* `NDWI_Water_Extraction.js`: The raw JavaScript pipeline.
