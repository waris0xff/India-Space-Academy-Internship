# India-Space-Academy-Internship
# Geospatial Terrain & Vegetation Mapping

## Overview
This repository contains the geospatial analysis pipelines and Google Earth Engine (GEE) scripts developed during the Winter Training Program on Space Science Technology at the **India Space Academy**.

The primary objective of this project was to establish an automated, AI-assisted workflow for mapping vegetation health and surface water distribution across the Khandwa District (Madhya Pradesh) utilizing multi-spectral satellite imagery.

## 🛰️ Tech Stack & Data Sources
* **Platform:** Google Earth Engine (GEE) API (JavaScript)
* **Datasets:** Sentinel-2 (Multispectral Surface Reflectance)
* **Spectral Indices Computed:**
    * **NDWI** (Normalized Difference Water Index) for surface water extraction.
    * **NDVI** (Normalized Difference Vegetation Index) for canopy health and density classification.

## 📂 Repository Structure
* `/P1_Surface_Water_Mapping`: Contains the NDWI masking scripts and technical report for water body extraction.
* `/P2_Vegetation_Assessment`: Contains the NDVI clustering scripts and technical report for vegetation classification.
* `/Official_Verification`: Contains the formal internship completion letter, project evaluation report, and certification.

## Execution & Interactive Scripts
The computational pipelines run entirely in the cloud via Google Earth Engine, requiring no local dataset downloads. You can execute the code directly in your browser using the interactive GEE links provided in the respective `P1` and `P2` folder READMEs.
