import React from 'react'
import styled from '@emotion/styled';
import { Box } from '@mui/material';
import { Button } from '@mui/material';

const SidebarBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin-bottom: 12px;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;
  // border: 1px solid red;
  border-radius: 4px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const EqualBtn = styled(Button)`
  height: 64px;
  padding-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  text-align: center;
  color: #FFFFFF;
  background: #5D5FEF;
  border-radius: 6px;

  &:hover {
    background: #5D5FEF;
    filter: brightness(90%);
  }
`;


const EqualBtnItem: React.FC = () => {
  return (
    <SidebarBox >
      <EqualBtn>
        =
      </EqualBtn>
    </SidebarBox>
  )
};

export default EqualBtnItem;
