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
export const BedsVerified = (props) => {
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
          primaryText={(record) => record.hosName}
          secondaryText={(record) => record.hosCity}
          tertiaryText={(record)=>record.numOfBeds}
        />
      ) : (
        <Datagrid rowClick="">
          <TextField source="hosName" />
          <TextField source="hosCity" />
          <TextField source="state" />
          <TextField source="numOfBeds" />
          <TextField source="hosFees" />
          <TextField source="verificationTime"/>
        </Datagrid>
      )}
    </List>
  );
};

export default BedsVerified;
