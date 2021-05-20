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
  DateInput,
  required,
  NumberField,
} from "react-admin";
import { FilterBar } from "../../Utils/Filter";
import { ApproveBtn } from "../../Utils/Buttons";
export const PatientUnverified = (props) => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <List
      title="Volunteers"
      filters={
        <FilterBar
          bars={[{ source: "name", label: "Search Patients By Name" }]}
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
          secondaryText={(record) => record.hospitalcity}
          tertiaryText={(record) => record.contact}
        />
      ) : (
        <Datagrid rowClick="">
          <TextField source="name" />
          <TextField source="attenderName" />
          <TextField source="oxygenLevel" />
          <TextField source="requirement" />
          <TextField source="name" />
          <NumberField source="age" />
          <TextField source="contact" />
          <TextField source="hospital" />
          <TextField source="hospitalcity" />
          <ApproveBtn verified={true} model="patient" />
        </Datagrid>
      )}
    </List>
  );
};
export const PatientUnverifiedCreate = (props) => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="name" validate={required()} />
        <TextInput source="attenderName" />
        <TextInput source="requirement" />
        <TextInput source="attenderName" />
        <TextInput source="bloodGroup" />
        <NumberInput source="age" validate={required()} />
        <TextInput source="hospitalcity" validate={required()} />
        <TextInput source="state" validate={required()} />
        <TextInput source="hospital" />
        <TextInput source="remarks" />
        <NumberInput source="contact" validate={required()} />
      </SimpleForm>
    </Create>
  );
};
export default PatientUnverified;
