import React from 'react';

export const FiltersButton = () => {
  const FilterIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
        clipRule="evenodd"
      />
    </svg>
  );

  return (
    <div className="bg-white rounded-lg inline-block text-slate-900">
      <div className="flex py-2 px-3 items-center ">
        <div>{FilterIcon}</div>
        <div className="ml-2 text-md hidden sm:inline-block">Filter</div>
      </div>
    </div>
  );
};
