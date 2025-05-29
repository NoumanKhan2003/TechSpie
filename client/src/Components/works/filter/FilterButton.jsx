import React from "react";
import { FaChevronDown } from "react-icons/fa";

const FilterButton = ({
  showFilterDropdown,
  setShowFilterDropdown,
  filters,
  resetFilters,
}) => {
  const hasActiveFilters =
    filters.category !== "All" ||
    filters.year !== "All" ||
    filters.technologies.length > 0;

  const activeFilterCount =
    (filters.category !== "All" ? 1 : 0) +
    (filters.year !== "All" ? 1 : 0) +
    filters.technologies.length;

  return (
    <div className="flex gap-2 mt-4 md:mt-0 relative">
      <button
        onClick={() => resetFilters()}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        All Projects
      </button>
      <button
        onClick={() => setShowFilterDropdown(!showFilterDropdown)}
        className={`px-4 py-2 rounded-lg border transition-colors flex items-center gap-2 ${
          showFilterDropdown || hasActiveFilters
            ? "bg-blue-50 text-blue-600 border-blue-200"
            : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
        }`}
      >
        Filter
        {hasActiveFilters && (
          <span className="inline-flex items-center justify-center h-5 w-5 text-xs bg-blue-600 text-white rounded-full">
            {activeFilterCount}
          </span>
        )}
        <FaChevronDown size={12} />
      </button>
    </div>
  );
};

export default FilterButton;
