import React from "react";
import { useMediaQuery } from "@material-ui/core";
import { Datagrid, List, SimpleList, TextField } from "react-admin";
import { FilterBar } from "../../Utils/Filter";
import { VolApproveBtn, ApproveBtn } from "../../Utils/Buttons";
const VolunteerUnverified = (props) => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <List
      title="Volunteer Registrations"
      filters={
        <FilterBar bars={[{ source: "name", label: "Search By Name" }]} />
      }
      {...props}
      perPage={25}
      exporter={false}
      bulkActionButtons={false}
    >
      {isSmall ? (
        <SimpleList
          primaryText={(record) => record.name}
          secondaryText={(record) => record.contact}
          tertiaryText={(record) => record.city}
        />
      ) : (
        <Datagrid rowClick="">
          <TextField source="name" />
          <TextField source="contact" />
          <TextField source="email" />
          <TextField source="city" />
          <TextField source="state" />
          <ApproveBtn verified={true} model="volunteer" />
        </Datagrid>
      )}
    </List>
  );
};
export default VolunteerUnverified;
