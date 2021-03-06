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
    <div className="w-64 bg-white">
      <div className="flex flex-col">
        {hero ? (
          <div className="mb-2">
            <img src={hero} alt={name ? name : 'Akseizer Design Group'} />
          </div>
        ) : (
          ''
        )}
      </div>
      <div className="flex italic text-slate-500 text-sm">
        <div className="mr-0.5">{department ? department + ',' : ''}</div>
        <div className="mr-0.5">{subcategory ? subcategory + ',' : ''}</div>
        <div>{building_type ? building_type : ''}</div>
      </div>
      <div className="font-bold text-lg text-slate-900 mb-1">
        {name ? name : ''}
      </div>
      <div className="text-md mb-4 text-slate-900">
        {description ? truncateString(description, 90) : ''}
      </div>
      <div>
        {link ? (
          <div className="bg-slate-900 rounded-lg w-1/2 flex justify-center align-middle">
            <div className="text-white py-2 text-md">
              <a href={link} target="_blank">
                View Project
              </a>
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};
