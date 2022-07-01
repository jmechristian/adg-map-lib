import React from 'react';

export interface ListViewProps {
  height: string;
  width: string;
  fontSize: string;
}

export const ListViewButton = ({ height, width, fontSize }: ListViewProps) => {
  const ListIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${height} ${width} fill-slate-900`}
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
        <div className={`ml-2 ${fontSize} hidden sm:inline-block`}>
          List View
        </div>
      </div>
    </div>
  );
};
