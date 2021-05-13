import * as React from "react";
import { Admin, Resource } from "react-admin";
import { BedsVerified } from "../Components/Beds";
import { Donor } from "../Components/Donor";
import { OxygenVerified } from "../Components/Oxygen";
import { PatientVerified } from "../Components/Patient";
import {
  VolunteerVerified,
  VolunteerPast,
  VolunteerUnverified,
} from "../Components/Volunteer/";
import dataprovider from "../Providers/dataProvider";
import CustomLayout from "../Providers/Layout";
import Toast from "../Utils/Toast";
const App = () => {
  return (
    <>
      <Toast />
      <Admin layout={CustomLayout} dataProvider={dataprovider}>
        <Resource name="volunteers/verified" list={VolunteerVerified} />
        <Resource name="volunteers/past" list={VolunteerPast} />
        <Resource name="volunteers/unverified" list={VolunteerUnverified} />
        <Resource name="oxygen/verified" list={OxygenVerified} />
        <Resource name="medicine/verified" list={OxygenVerified} />
        <Resource name="beds/verified" list={BedsVerified} />
        <Resource name="patients/verified" list={PatientVerified} />
        <Resource name="donor" list={Donor} />
      </Admin>
    </>
  );
};

export default App;
