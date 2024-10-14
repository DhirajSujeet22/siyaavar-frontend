import React, { useState } from "react";

const SizeGuide = () => {
  const [unit, setUnit] = useState("inches");

  const convertToCm = (value) => {
    const inches = parseFloat(value.split("-")[0]);
    return `${(inches * 2.54).toFixed(1)}-${(
      parseFloat(value.split("-")[1]) * 2.54
    ).toFixed(1)} cm`;
  };

  const sizeData = [
    { size: "XS", chest: '32-34"', waist: '24-26"', hips: '34-36"' },
    { size: "S", chest: '34-36"', waist: '26-28"', hips: '36-38"' },
    { size: "M", chest: '36-38"', waist: '28-30"', hips: '38-40"' },
    { size: "L", chest: '38-40"', waist: '30-32"', hips: '40-42"' },
    { size: "XL", chest: '40-42"', waist: '32-34"', hips: '42-44"' },
  ];

  return (
    <div className=" mx-auto px-[12%] py-12 bg-[#fffbf2]">
      <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
        Size Guide
      </h2>

      {/* Description Section */}
      <p className="text-center text-lg text-gray-600 mb-10">
        Find your perfect fit with our detailed size guide. Ensure your clothing
        fits just right for any occasion, from traditional sherwanis to casual
        kurtas.
      </p>

      {/* Unit Toggle */}
      <div className="text-center mb-6">
        <span className={`mr-4 ${unit === "inches" ? "font-bold" : ""}`}>
          Inches
        </span>
        <button
          onClick={() => setUnit(unit === "inches" ? "cm" : "inches")}
          className="px-4 py-2 bg-orange-400 text-white rounded hover:bg-orange-500 transition"
        >
          Switch to {unit === "inches" ? "cm" : "inches"}
        </button>
        <span className={`ml-4 ${unit === "cm" ? "font-bold" : ""}`}>
          Centimeters
        </span>
      </div>

      {/* Responsive Table */}
      <div className="overflow-x-auto shadow-lg rounded-lg mb-10">
        <table className="min-w-full table-auto bg-[#fffbf2] border border-gray-200">
          <thead>
            <tr className="bg-orange-400">
              <th className="px-6 py-4 border border-gray-300 text-left text-sm font-semibold text-gray-700">
                Size
              </th>
              <th className="px-6 py-4 border border-gray-300 text-left text-sm font-semibold text-gray-700">
                Chest ({unit})
              </th>
              <th className="px-6 py-4 border border-gray-300 text-left text-sm font-semibold text-gray-700">
                Waist ({unit})
              </th>
              <th className="px-6 py-4 border border-gray-300 text-left text-sm font-semibold text-gray-700">
                Hips ({unit})
              </th>
            </tr>
          </thead>
          <tbody>
            {sizeData.map((size, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-gray-50" : "bg-transparent"
                } text-gray-800`}
              >
                <td className="px-6 py-4 border border-gray-300">
                  {size.size}
                </td>
                <td className="px-6 py-4 border border-gray-300">
                  {unit === "inches" ? size.chest : convertToCm(size.chest)}
                </td>
                <td className="px-6 py-4 border border-gray-300">
                  {unit === "inches" ? size.waist : convertToCm(size.waist)}
                </td>
                <td className="px-6 py-4 border border-gray-300">
                  {unit === "inches" ? size.hips : convertToCm(size.hips)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footnote */}
      <p className="text-sm text-gray-500 mt-6 text-center">
        Note: Measurements are in {unit} and may vary slightly based on design
        and fabric.
      </p>
    </div>
  );
};

export default SizeGuide;
