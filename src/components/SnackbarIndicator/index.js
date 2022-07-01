import { useState, useEffect, forwardRef } from 'react';
import { Snackbar, Alert } from '@mui/material';

import styles from './styles';

function SnackbarIndicator({ isOpen, severity, message }) {
  const [open, setOpen] = useState(false);
  const { snackbarContainer, customAlert } = styles;

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  const onClose = reason => {
    if (reason !== 'clickaway') {
      setOpen(false);
    }
  };

  return (
    <Snackbar
      anchorOrigin={snackbarContainer}
      open={open}
      autoHideDuration={5000}
      onClose={onClose}
    >
      <CustomAlert onClose={onClose} severity={severity} sx={customAlert}>
        {message}
      </CustomAlert>
    </Snackbar>
  );
}

const CustomAlert = forwardRef(function MuiAlert(props, ref) {
  return <Alert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default SnackbarIndicator;
