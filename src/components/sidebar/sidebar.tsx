import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const SideBarBox = styled(Box)`
  width: 243px;
  height: 480px;
  background-color: salmon;
`;

const Sidebar: React.FC = () => {
  return <SideBarBox></SideBarBox>;
};

export default Sidebar;
