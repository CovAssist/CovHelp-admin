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
} from "react-admin";
import { FilterBar } from "../../Utils/Filter";
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
export const PatientVerifiedCreate = (props) => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="name" validate={required()} />
        <DateInput source="dob" validate={required()} />
        <TextInput source="email" validate={required()} />
        <TextInput source="hospitalcity" validate={required()} />
        <TextInput source="state" validate={required()} />
        <TextInput source="hospital" />
        <NumberInput source="contact" />
      </SimpleForm>
    </Create>
  );
};
export default PatientVerified;
