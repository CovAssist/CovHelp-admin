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
export const MedicineVerified = (props) => {
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
          secondaryText={(record) => record.supplierContact}
          tertiaryText={(record)=>record.city}
        />
      ) : (
        <Datagrid rowClick="">
          <TextField source="name" />
          <TextField source="supplierContact" />
          <TextField source="city" />
          <TextField source="state" />
          <TextField source="price" />
          <TextField source="verificationTime"/>
          <TextField source="delivery"/>
        </Datagrid>
      )}
    </List>
  );
};

export default MedicineVerified;
