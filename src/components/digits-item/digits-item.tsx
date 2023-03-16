import React from 'react'
import styled from '@emotion/styled';
import { Box } from '@mui/material';
import { Button } from '@mui/material';
import { digits } from '../../utils/util';

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

const DigitsBox = styled(Box)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
`;

const DigitsButton = styled(Button)`
  height: 48px;
  padding: 0;
  color: #000000;
  font-weight: 500;
  font-size: 14px;
  line-height: 15px;
  border: 1px solid #E2E3E5;
  border-radius: 6px;

  &:hover {
    background: #FFFFFF;
  }

  & + #zero-digit {
    grid-column: 1 / 3;
    grid-row: 4 / 5;
  }
`;

const DigitsItem: React.FC = () => {
  return (
    <SidebarBox >
      <DigitsBox >
        {digits.map((digit) => (
          <DigitsButton key={digit} id={digit === '0' ? 'zero-digit' : ''}>
            {digit}
          </DigitsButton>
        ))}
      </DigitsBox>
    </SidebarBox>
  )
};

export default DigitsItem;
