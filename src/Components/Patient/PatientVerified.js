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
  required,
} from "react-admin";
import { FilterBar } from "../../Utils/Filter";
import AssignVolunteer from "../../Utils/Buttons/AssignVolunteer";
export const PatientVerified = (props) => {
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
        <Datagrid rowClick="" style={{ minHeight: "50px" }}>
          <TextField source="name" />
          <TextField source="attenderName" />
          <TextField source="contact" />
          <TextField source="age" />
          <TextField source="bloodGroup" />
          <TextField source="requirement" />
          <TextField source="hospital" />
          <TextField source="hospitalcity" />
          <TextField source="remarks" />
          <TextField source="description" />
          <AssignVolunteer label="Volunteer Assigned" />
        </Datagrid>
      )}
    </List>
  );
};
export const PatientVerifiedCreate = (props) => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="name" validate={required()} />
        <NumberInput source="age" validate={required()} />
        <TextInput source="attenderName" validate={required()} />
        <TextInput source="hospitalcity" validate={required()} />
        <TextInput source="state" validate={required()} />
        <TextInput source="requirement" validate={required()} />
        <TextInput source="bloodGroup" />
        <TextInput source="volunteerAssigned" />
        <TextInput source="oxygenLevel" />
        <TextInput source="remarks" />
        <TextInput source="hospital" />
        <NumberInput source="contact" />
        <TextInput source="description" />
      </SimpleForm>
    </Create>
  );
};
export default PatientVerified;
