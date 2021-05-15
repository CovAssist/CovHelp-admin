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
  DateInput,
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
          <TextField source="contact" />
          <TextField source="email" />
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
        <TextInput source="name" />
        <DateInput source="dob" />
        <TextInput source="email" />
        <TextInput source="hospitalcity" />
        <TextInput source="state" />
        <TextInput source="hospital" />
        <NumberInput source="contact" />
      </SimpleForm>
    </Create>
  );
};
export default PatientUnverified;