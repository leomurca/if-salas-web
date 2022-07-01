import { Box, LinearProgress } from '@mui/material';

import styles from './styles';

function LoadingIndicator({ isLoading }) {
  const { box, linearProgress } = styles;

  if (isLoading) {
    return (
      <Box sx={box}>
        <LinearProgress sx={linearProgress} />
      </Box>
    );
  }
}

export default LoadingIndicator;
