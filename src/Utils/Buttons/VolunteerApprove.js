import React, { useContext, useState } from "react";
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

const VolunteerApprove = ({ record }) => {
  const classes = useStyles();
  const { setAlertProps } = useContext(ContextProvider);
  const [status, setStatus] = useState(!record.verified);
  return status ? (
    <Button
      className={classes.btn}
      label="Approve Volunteer"
      onClick={async (event) => {
        event.stopPropagation();
        const data = await changeVolunteerStatus({ id: record.id }, true);
        setStatus(false);
        setAlertProps({
          open: true,
          alert: data.success ? "success" : "error",
          msg: data.message,
        });
      }}
    />
  ) : (
    <Button className={classes.btn} label="Approved" disabled />
  );
};

export default VolunteerApprove;
