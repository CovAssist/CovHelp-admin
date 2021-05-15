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
} from "react-admin";
import { FilterBar } from "../../Utils/Filter";
import { ApproveBtn } from "../../Utils/Buttons";

export const MedicineUnverified = (props) => {
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
          <TextField source="name" />
          <TextField source="supplierContact" />
          <TextField source="city" />
          <TextField source="state" />
          <TextField source="price" />
          <TextField source="verificationTime" />
          <TextField source="delivery" />
          <ApproveBtn verified={true} model="medicine" />
        </Datagrid>
      )}
    </List>
  );
};
export const MedicineUnverifiedCreate = (props) => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="name" />
        <TextInput source="supplierContact" />
        <TextInput source="city" />
        <TextInput source="state" />
        <NumberInput source="price" />
        <TextInput source="verifiedBy" />
        <BooleanInput source="delivery" />
      </SimpleForm>
    </Create>
  );
};
export default MedicineUnverified;