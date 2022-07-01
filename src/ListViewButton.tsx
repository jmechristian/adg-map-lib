import React from 'react';

export const ListViewButton = () => {
  const ListIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 fill-slate-900"
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
        clipRule="evenodd"
      />
    </svg>
  );

  return (
    <div className="bg-white rounded-lg inline-block text-slate-900">
      <div className="flex py-2 px-3 items-center ">
        <div>{ListIcon}</div>
        <div className="ml-2 text-md hidden sm:inline-block">List View</div>
      </div>
    </div>
  );
};
