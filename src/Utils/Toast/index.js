import React, { useContext } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { ContextProvider } from "../../contextapi/Context";
export default function ToastMessage() {
  const { alertProps, setAlertProps } = useContext(ContextProvider);
  return (
    <Snackbar
      open={alertProps.open}
      autoHideDuration={4000}
      onClose={() => {
        setAlertProps({ open: false, alert: "success" });
      }}
    >
      <MuiAlert
        onClose={() => {
          setAlertProps({ open: false, alert: "success" });
        }}
        severity={alertProps.alert}
        elevation={6}
        variant="filled"
      >
        {alertProps.msg}
      </MuiAlert>
    </Snackbar>
  );
}
