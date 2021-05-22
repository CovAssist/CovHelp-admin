import React, { useState } from "react";
import { TextField, IconButton } from "@material-ui/core";
import { TextField as TxtField } from "react-admin";
import { SendTwoTone } from "@material-ui/icons";
import { update } from "../../api";
const AssignVolunteer = ({ record }) => {
  const [vol, setVol] = useState(record.volunteerAssigned);
  const [name, setName] = useState();
  //   useEffect(() => {
  //     console.log(record);
  //   }, []);
  const handleSubmit = async (record) => {
    record.volunteerAssigned = name;
    const data = await update(record);
    if (data) {
      setVol(name);
    }
    return data;
  };
  return vol ? (
    <TxtField source="volunteerAssigned" />
  ) : (
    <>
      <TextField
        label="Assign a Volunteer"
        onChange={(e) => setName(e.target.value)}
        onKeyPress={(e) => {
          console.log(e.code);
          return e.code === "Enter" ? handleSubmit(record) : null;
        }}
      />
      <IconButton
        onClick={() => {
          return handleSubmit(record);
        }}
      >
        <SendTwoTone />
      </IconButton>
    </>
  );
};

export default AssignVolunteer;
