import React from 'react';

export interface PopupProps {
  name: string;
  hero?: string;
  department: string;
  subcategory?: string;
  building_type?: string;
  link?: string;
  description?: string;
}

export const PopupBody = ({
  name,
  hero,
  department,
  subcategory,
  building_type,
  link,
  description,
}: PopupProps) => {
  const truncateString = (str: string, num: number) => {
    if (str.length <= num) {
      return str;
    }
    return str.slice(0, num) + '...';
  };

  return (
    <div className="w-64 p-4">
      <div className="flex flex-col">
        {hero ? (
          <div className="mb-2">
            <img src={hero} alt={name ? name : 'Akseizer Design Group'} />
          </div>
        ) : (
          ''
        )}
      </div>
      <div className="flex italic text-slate-500 text-xs">
        <div className="mr-0.5">{department ? department + ',' : ''}</div>
        <div className="mr-0.5">{subcategory ? subcategory + ',' : ''}</div>
        <div>{building_type ? building_type : ''}</div>
      </div>
      <div className="font-bold text-lg text-slate-900 mb-1">
        {name ? name : ''}
      </div>
      <div className="text-sm mb-4">
        {description ? truncateString(description, 90) : ''}
      </div>
      <div>
        <div className="bg-slate-900 rounded-lg w-2/3 flex justify-center align-middle">
          <div className="text-white p-3">
            <a href={link} target="_blank">
              View Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
