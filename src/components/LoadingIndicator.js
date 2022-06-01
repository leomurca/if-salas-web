import { Box, LinearProgress } from '@mui/material';

function LoadingIndicator({ isLoading }) {
  if (isLoading) {
    return (
      <Box sx={box}>
        <LinearProgress sx={linearProgress} />
      </Box>
    );
  }
}

const box = {
  width: '100%',
  position: 'absolute',
  top: 0,
};

const linearProgress = {
  height: '7px',
};

export default LoadingIndicator;
