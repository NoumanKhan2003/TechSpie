import React from "react";

const FilterDropdown = ({
  dropdownRef,
  filters,
  setFilters,
  filterOptions,
  toggleTechFilter,
  resetFilters,
  setShowFilterDropdown,
}) => {
  return (
    <div
      ref={dropdownRef}
      className="absolute right-0 top-full mt-2 w-72 bg-white rounded-lg shadow-lg p-4 z-20 border border-gray-100"
    >
      <div className="mb-3">
        <h4 className="font-semibold text-gray-800 mb-2">Category</h4>
        <select
          value={filters.category}
          onChange={(e) => setFilters({ ...filters, category: e.target.value })}
          className="w-full p-2 border border-gray-200 rounded-md text-sm"
        >
          {filterOptions.categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-3">
        <h4 className="font-semibold text-gray-800 mb-2">Year</h4>
        <select
          value={filters.year}
          onChange={(e) => setFilters({ ...filters, year: e.target.value })}
          className="w-full p-2 border border-gray-200 rounded-md text-sm"
        >
          {filterOptions.years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-3">
        <h4 className="font-semibold text-gray-800 mb-2">Technologies</h4>
        <div className="max-h-40 overflow-y-auto flex flex-wrap gap-2">
          {filterOptions.techs.map((tech) => (
            <button
              key={tech}
              onClick={() => toggleTechFilter(tech)}
              className={`px-2 py-1 rounded-full text-xs ${
                filters.technologies.includes(tech)
                  ? "bg-blue-100 text-blue-600"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {tech}
            </button>
          ))}
        </div>
      </div>

      <div className="flex justify-between pt-3 border-t border-gray-100">
        <button
          onClick={resetFilters}
          className="text-sm text-gray-600 hover:text-blue-600"
        >
          Reset All
        </button>
        <button
          onClick={() => setShowFilterDropdown(false)}
          className="text-sm px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default FilterDropdown;
