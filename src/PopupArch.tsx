import React from 'react';

export interface PopupArchProps {
  name: string;
  hero?: string;
  department: string;
  subcategory?: string;
  building_type?: string;
  link?: string;
  description?: string;
}

export const PopupArch = ({
  name,
  hero,
  department,
  subcategory,
  building_type,
  link,
  description,
}: PopupArchProps) => {
  const truncateString = (str: string, num: number) => {
    if (str.length <= num) {
      return str;
    }
    return str.slice(0, num) + '...';
  };

  return (
    <div className="w-96 bg-white p-2">
      <div className="flex flex-col">
        {hero ? (
          <div className="mb-5">
            <img src={hero} alt={name ? name : 'Akseizer Design Group'} />
          </div>
        ) : (
          ''
        )}
      </div>
      <div className="flex italic text-slate-500 text-lg">
        {department ? department : ''}
        {subcategory ? ', ' + subcategory : ''}
        {building_type ? ', ' + building_type : ''}
      </div>
      <div className="font-bold text-4xl text-slate-900 mb-2">
        {name ? name : ''}
      </div>
      <div className="text-xl mb-6 text-slate-900 leading-normal">
        {description ? truncateString(description, 90) : ''}
      </div>
      <div>
        {link ? (
          <div className="bg-slate-900 rounded-lg w-1/2 flex justify-center align-middle mt-4">
            <div className="text-white py-2 text-xl">
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
