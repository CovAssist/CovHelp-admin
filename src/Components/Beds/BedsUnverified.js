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
import { ApproveBtn } from "../../Utils/Buttons";
export const BedsUnverified = (props) => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <List
      title="Volunteers"
      filters={
        <FilterBar bars={[{ source: "hoscity", label: "Search By City" }]} />
      }
      {...props}
      perPage={25}
      exporter={false}
      bulkActionButtons={false}
    >
      {isSmall ? (
        <SimpleList
          primaryText={(record) => record.hosName}
          secondaryText={(record) => record.hosCity}
          tertiaryText={(record) => record.numOfBeds}
        />
      ) : (
        <Datagrid rowClick="">
          <TextField source="hosName" />
          <TextField source="hoscity" />
          <TextField source="state" />
          <TextField source="numOfBeds" />
          <TextField source="hosFees" />
          <TextField source="verificationTime" />
          <ApproveBtn verified={true} model="beds" />
        </Datagrid>
      )}
    </List>
  );
};
export const BedsUnverifiedCreate = (props) => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="hosName" validate={required()} />
        <TextInput source="hosContact" validate={required()} />
        <TextInput source="hoscity" label="City" validate={required()} />
        <TextInput source="state" validate={required()} />
        <NumberInput source="numOfBeds" />
        <NumberInput source="hosFees" />
        <TextInput source="verifiedBy" />
      </SimpleForm>
    </Create>
  );
};

export default BedsUnverified;
