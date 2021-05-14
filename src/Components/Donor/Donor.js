import React from "react";
import { useMediaQuery } from "@material-ui/core";
import { Datagrid, List, SimpleList, TextField } from "react-admin";
import { FilterBar } from "../../Utils/Filter";
export const OxygenVerified = (props) => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <List
      title="Volunteers"
      filters={
        <FilterBar
          bars={[{ source: "blood", label: "Search By Blood Group" }]}
        />
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
          <TextField source="city" />
          <TextField source="state" />
          <TextField source="blood" />
          <TextField source="date" />
        </Datagrid>
      )}
    </List>
  );
};

export default OxygenVerified;
