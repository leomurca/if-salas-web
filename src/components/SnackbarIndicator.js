import { useState, useEffect, forwardRef } from 'react';
import { Snackbar, Alert } from '@mui/material';

function SnackbarIndicator({ isOpen, severity, message }) {
  const [open, setOpen] = useState(false);

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
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      open={open}
      autoHideDuration={5000}
      onClose={onClose}
    >
      <CustomAlert onClose={onClose} severity={severity} sx={{ width: '100%' }}>
        {message}
      </CustomAlert>
    </Snackbar>
  );
}

const CustomAlert = forwardRef(function MuiAlert(props, ref) {
  return <Alert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default SnackbarIndicator;
