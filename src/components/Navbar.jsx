import { Stack } from '@mui/material';
import React from 'react';
import { logo } from '../utils/constants';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: 'sticky',
        background: '#000',
        top: '0',
        justifyContent: 'space-between',
      }}
    >
      <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src={logo}
          alt="something that looks like youtube logo"
          height={45}
        />
      </Link>
      <SearchBar />
    </Stack>
  );
};

export default Navbar;
