import React from "react";
import { useMediaQuery } from "@material-ui/core";
import { VolLeaveBtn } from "../../Utils/Buttons";
import {
  Datagrid,
  List,
  SimpleList,
  TextField,
  Filter,
  TextInput,
} from "react-admin";

const NameFilter = (props) => {
  return (
    <Filter {...props}>
      <TextInput resettable label="Search Volunteer" source="name" alwaysOn />
      {/* <TextInput label="Title" source="title" defaultValue="Hello, World!" />
      <TextInput label="Ttle" source="ttle" defaultValue="Hello, World!" /> */}
    </Filter>
  );
};
const VolunteerVerified = (props) => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <List title="Volunteers" filters={<NameFilter />} {...props} perPage={25}>
      {isSmall ? (
        <SimpleList
          primaryText={(record) => record.name}
          secondaryText={(record) => record.contact}
        />
      ) : (
        <Datagrid rowClick="">
          <TextField source="name" />
          <TextField source="contact" />
          <TextField source="email" />
          <TextField source="city" />
          <TextField source="state" />
          <VolLeaveBtn />
        </Datagrid>
      )}
    </List>
  );
};
export default VolunteerVerified;