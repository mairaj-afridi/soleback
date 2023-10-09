import React from 'react';
import { Switch } from '@mantine/core';

const Categories = () => {
  return (
    <>
      <h1 className="text-brand-main cursor-pointer pl-5 text-[22px] sm:text-[24px] font-semibold font-jakarta">
        Shopping Category
      </h1>
      <p className="text-[17px] sm:text-[20px] pl-5 text-black-main">
        Lorem Ipsum is simply dummy text of the printing and typesetting <br /> industry. Lorem Ipsum has been the industry's
        standard dummy text
      </p>

      {Category.map((category) => (
        <div key={category.id} className="px-3 pb-5 sm:px-6 w-full">
          <div className="bg-white-main border border-solid cash-box gap-4 sm:gap-10 p-3 sm:p-6 w-full h-[65px] flex items-center justify-start">
            <div className="flex justify-between w-full items-center">
              <h1 className="text-black-main text-[17px] sm:text-[24px] font-semibold leading-5 font-jakarta">
                {category.name}
              </h1>
              <div className="inline-flex items-center">
                <Switch
                  color="rgba(255, 201, 25, 1)"
                  size="md"
                  aria-label={`Toggle ${category.name}`}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Categories;

const Category = [
  {
    id: 1,
    name: 'All',
  },
  {
    id: 2,
    name: 'Health & Beauty',
  },
  {
    id: 3,
    name: 'Apparel',
  },
  {
    id: 4,
    name: 'Electronics corporation',
  },
  {
    id: 5,
    name: 'Travel Company',
  },
  
];
