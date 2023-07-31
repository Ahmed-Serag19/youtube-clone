import { Stack } from '@mui/material';
import React from 'react';
import { categories } from '../utils/constants';

const Sidebar = ({
  selectedCategory,
  setSelectedCategoryHandler,
}) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: 'auto',
        height: { sx: 'auto', md: '95%' },
        flexDirection: { md: 'column' },
      }}
    >
      {categories.map((category) => {
        return (
          <button
            className="category-btn"
            style={{
              background:
                category.name === selectedCategory && '#FC1503',
              color: 'white',
            }}
            key={category.name}
            onClick={() => setSelectedCategoryHandler(category.name)}
          >
            <span
              style={{
                color:
                  category.name === selectedCategory
                    ? 'white'
                    : 'red',
                marginRight: '15px',
              }}
            >
              {category.icon}
            </span>
            <span
              style={{
                opacity:
                  category.name === selectedCategory ? '1' : '0.7',
              }}
            >
              {category.name}
            </span>
          </button>
        );
      })}
    </Stack>
  );
};

export default Sidebar;
