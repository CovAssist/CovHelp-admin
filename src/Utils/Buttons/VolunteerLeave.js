import React, { useContext, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "react-admin";
import { changeVolunteerStatus } from "../../api/index";
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
const VolunteerLeave = ({ record }) => {
  const classes = useStyles();
  const { setAlertProps } = useContext(ContextProvider);
  const [status, setStatus] = useState(record.status);
  return status ? (
    <Button
      className={classes.btn}
      label="Remove Volunteer"
      onClick={async (event) => {
        event.stopPropagation();
        const data = await changeVolunteerStatus({ id: record.id });
        setStatus(false);
        setAlertProps({
          open: true,
          alert: data.success ? "success" : "error",
          msg: data.message,
        });
      }}
    />
  ) : (
    <Button label="Remove Volunteer" className={classes.btn} disabled />
  );
};

export default VolunteerLeave;
