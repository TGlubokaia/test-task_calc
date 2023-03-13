import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const CanvasBox = styled(Box)`
  width: 243px;
  height: 480px;
  background-color: salmon;
`;

const Canvas: React.FC = () => {
  return <CanvasBox></CanvasBox>;
};

export default Canvas;
