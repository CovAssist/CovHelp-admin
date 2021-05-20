import React from "react";
import { useMediaQuery } from "@material-ui/core";
import {
  Datagrid,
  List,
  SimpleList,
  TextField,
  Create,
  SimpleForm,
  TextInput,
  NumberInput,
  BooleanInput,
  required,
} from "react-admin";
import { FilterBar } from "../../Utils/Filter";

export const MedicineVerified = (props) => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <List
      title="Volunteers"
      filters={
        <FilterBar bars={[{ source: "name", label: "Search Volunteer" }]} />
      }
      {...props}
      perPage={25}
      exporter={false}
      bulkActionButtons={false}
    >
      {isSmall ? (
        <SimpleList
          primaryText={(record) => record.name}
          secondaryText={(record) => record.supplierContact}
          tertiaryText={(record) => record.city}
        />
      ) : (
        <Datagrid rowClick="">
          <TextField source="medName" />
          <TextField source="supplierName" />
          <TextField source="supplierContact" />
          <TextField source="city" />
          <TextField source="state" />
          <TextField source="price" />
          <TextField source="verificationTime" />
          <TextField source="delivery" />
        </Datagrid>
      )}
    </List>
  );
};
export const MedicineVerifiedCreate = (props) => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="medName" validate={required()} />
        <TextInput source="supplierName" />
        <TextInput source="supplierContact" validate={required()} />
        <TextInput source="city" validate={required()} />
        <TextInput source="state" validate={required()} />
        <NumberInput source="price" validate={required()} />
        <TextInput source="verifiedBy" />
        <BooleanInput source="delivery" />
      </SimpleForm>
    </Create>
  );
};
export default MedicineVerified;
