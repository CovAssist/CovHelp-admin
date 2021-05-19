import React from "react";
import { useMediaQuery } from "@material-ui/core";
import {
  Datagrid,
  List,
  SimpleList,
  TextField,
  SimpleForm,
  Create,
  TextInput,
  NumberInput,
  BooleanInput,
  required,
} from "react-admin";
import { FilterBar } from "../../Utils/Filter";

export const OxygenVerified = (props) => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <List
      title="Verified Oxygen"
      filters={
        <FilterBar bars={[{ source: "city", label: "Search By City" }]} />
      }
      {...props}
      perPage={25}
      exporter={false}
      bulkActionButtons={false}
    >
      {isSmall ? (
        <SimpleList
          primaryText={(record) => record.supplierName}
          secondaryText={(record) => record.supplierContact}
          tertiaryText={(record) => record.city}
        />
      ) : (
        <Datagrid rowClick="">
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
export const OxygenVerifiedCreate = (props) => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="supplierName" validate={required()} />
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
export default OxygenVerified;
