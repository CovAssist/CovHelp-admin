import React from "react";
import { useMediaQuery } from "@material-ui/core";
import { Datagrid, List, SimpleList, TextField } from "react-admin";
import { FilterBar } from "../../Utils/Filter";
const VolunteerPast = (props) => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <List
      title="Volunteers"
      filters={
        <FilterBar bars={[{ source: "name", label: "Search By Name" }]} />
      }
      {...props}
      perPage={25}
      bulkActionButtons={false}
    >
      {isSmall ? (
        <SimpleList
          primaryText={(record) => record.name}
          secondaryText={(record) => record.contact}
        />
      ) : (
        <Datagrid rowClick="">
          <TextField source="name" />
          <TextField source="contact" />
          <TextField source="email" />
          <TextField source="city" />
          <TextField source="state" />
        </Datagrid>
      )}
    </List>
  );
};
export default VolunteerPast;
