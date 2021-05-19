import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "react-admin";
import { approve } from "../../api/index";
import { ContextProvider } from "../../contextapi/Context";
const useStyles = makeStyles({
  btn: {
    background: "#2196F3",
    color: "#fff",
    "&:hover": {
      background: "#115f9b",
    },
  },
});

const Approve = ({ record, model, verified }) => {
  const classes = useStyles();
  const { setAlertProps } = useContext(ContextProvider);
  const [status, setStatus] = useState(
    verified ? !record.verified : record.status
  );
  function jsUcfirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return status ? (
    <Button
      className={classes.btn}
      label={
        verified
          ? "Approve " + jsUcfirst(model)
          : "Deferred " + jsUcfirst(model)
      }
      onClick={async (event) => {
        event.stopPropagation();
        const data = await approve({ id: record.id }, verified, model);
        if (data.success) setStatus(false);
        setAlertProps({
          open: true,
          alert: data.success ? "success" : "error",
          msg: data.message,
        });
      }}
    />
  ) : (
    <Button className={classes.btn} label="Done" disabled />
  );
};

export default Approve;
