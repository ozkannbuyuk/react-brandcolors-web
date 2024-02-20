import React, { useContext, useState, useEffect } from "react";

import MainContext from "./MainContext";

import { FcClearFilters, FcDownload } from "react-icons/fc";

export default function Download() {
  const { selectedBrands, setSelectedBrands, brands } = useContext(MainContext);
  const [downloadURL, setDownloadURL] = useState();

  useEffect(() => {
    if (selectedBrands.length > 0) {
      let output = "root {\n";
      output += selectedBrands
        .map((slug) => {
          let brand = brands.find((brand) => brand.slug === slug);
          return brand.colors
            .map((color, key) => {
              return `  --${slug}-${key}: #${color};\n`;
            })
            .join("");
        })
        .join("");
      output += "}";

      const blob = new Blob([output], { type: "text/css" });
      const url = URL.createObjectURL(blob);
      setDownloadURL(url);
      return () => {
        URL.revokeObjectURL(url);
        setDownloadURL("");
      };
    }
  }, [selectedBrands, brands]);

  return (
    <div className="download">
      <div className="download-item">
        <button
          type="button"
          className="action-button"
          onClick={() => {
            setSelectedBrands([]);
          }}
        >
          <FcClearFilters />
        </button>
        <p
          onClick={() => {
            setSelectedBrands([]);
          }}
        >
          Clear <strong>{selectedBrands.length}</strong> selected brands.
        </p>
      </div>
      <div className="download-item">
        <a
          href={selectedBrands.length > 0 ? downloadURL : null}
          download="brand-colors.css"
        >
          <FcDownload style={{ marginRight: "5px" }} /> Selected brands download
        </a>
      </div>
    </div>
  );
}
