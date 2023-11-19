import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';

function FormDialog({
  isOpened,
  title,
  contentText,
  inputs,
  onDismiss,
  onSave,
}) {
  return (
    <Dialog open={isOpened} onClose={onDismiss}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{contentText}</DialogContentText>
        {[...inputs]}
      </DialogContent>
      <DialogActions>
        <Button onClick={onDismiss}>Cancelar</Button>
        <Button onClick={onSave}>Salvar</Button>
      </DialogActions>
    </Dialog>
  );
}

export default FormDialog;
