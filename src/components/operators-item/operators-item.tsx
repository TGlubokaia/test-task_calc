import React from 'react'
import styled from '@emotion/styled';
import { Box } from '@mui/material';
import { Button } from '@mui/material';
import { operators } from '../../utils/util';

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

const OperatorsBox = styled(Box)`
  display: flex;
  justify-content: space-between;
`;

const OperatorButton = styled(Button)`
  min-width: 52px;
  height: 48px;
  color: #000000;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 15px;
  border: 1px solid #E2E3E5;
  border-radius: 6px;

  &:hover {
    background: #FFFFFF;
  }
`;

const OperatorsItem: React.FC = () => {
  return (
    <SidebarBox >
      <OperatorsBox >
        {operators.map((operator) => (
          <OperatorButton key={operator.id}>
            {operator.sign}
          </OperatorButton>
        ))}
      </OperatorsBox>
    </SidebarBox>
  );
};

export default OperatorsItem;
