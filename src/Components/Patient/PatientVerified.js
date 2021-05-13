import React from "react";
import { useMediaQuery } from "@material-ui/core";
import {
  Datagrid,
  List,
  SimpleList,
  TextField,
  Filter,
  TextInput,
} from "react-admin";

export const NameFilter = (props) => {
  return (
    <Filter {...props}>
      <TextInput resettable label="Search Volunteer" source="name" alwaysOn />
    </Filter>
  );
};
export const PatientVerified = (props) => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <List
      title="Volunteers"
      filters={<NameFilter />}
      {...props}
      perPage={25}
      exporter={false}
      bulkActionButtons={false}
    >
      {isSmall ? (
        <SimpleList
          primaryText={(record) => record.name}
          secondaryText={(record) => record.hospitalcity}
          tertiaryText={(record)=>record.contact}
        />
      ) : (
        <Datagrid rowClick="">
          <TextField source="name" />
          <TextField source="contact" />
          <TextField source="email" />
          <TextField source="hospital" />
          <TextField source="hospitalcity" />
        </Datagrid>
      )}
    </List>
  );
};

export default PatientVerified;
