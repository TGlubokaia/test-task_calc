import React from 'react'
import { TextField } from '@mui/material';
import styled from '@emotion/styled';
import { Box } from '@mui/material';

const SidebarBox = styled(Box)`
  margin-bottom: 12px;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;
  // border: 1px solid red;
  border-radius: 4px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const DisplayItem: React.FC = () => {
  return (
    <SidebarBox >
      <TextField variant={'filled'} >
      </TextField>
    </SidebarBox>
  );
};

export default DisplayItem;
