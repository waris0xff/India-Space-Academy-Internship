# AI-Based Vegetation Health Assessment (NDVI)

This module evaluates canopy health and vegetation density using normalized difference thresholding and AI-inspired spatial filtering.

## ⚙️ Methodology
1. Computes the Normalized Difference Vegetation Index (NDVI) using Sentinel-2 B4 (Red) and B8 (NIR) bands.
2. Applies conditional clustering to separate the terrain into four distinct density classes (Barren, Sparse, Moderate, Dense).
3. Implements an AI-inspired neighborhood filter (`focal_mode`) to reduce noise from cloud shadows and mixed pixels.
4. Groups and calculates the total area for each vegetation class.

## 💻 Interactive Earth Engine Code
You can view and run the classification pipeline directly in your browser without any local setup:
👉 **[Run NDVI Script in Earth Engine](https://code.earthengine.google.com/5ffe1b67f5b7f99ac022f14beea6d3e7)**

## 📄 Documentation
* `Project_Report_2.pdf`: Full technical report detailing the classification matrix and error analysis.
* `NDVI_Vegetation_Classification.js`: The raw JavaScript pipeline.
