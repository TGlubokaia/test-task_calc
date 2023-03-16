import React from 'react'
import { Box } from '@mui/material';
import styled from '@emotion/styled';
import DisplayItem from '../display-item/display-item';
import OperatorsItem from '../operators-item/operators-item';
import DigitsItem from '../digits-item/digits-item';
import EqualBtnItem from '../equal-btn-item/equal-btn-item';

const SideBarBox = styled(Box)`
  width: 243px;
  height: 480px;
  // background-color: gainsboro;
`;

const Sidebar: React.FC = () => {
  return (
    <SideBarBox>
      <DisplayItem />
      <OperatorsItem />
      <DigitsItem />
      <EqualBtnItem />
    </SideBarBox>
  );
};

export default Sidebar;
