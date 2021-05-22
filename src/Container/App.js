import * as React from "react";
import { Admin, Resource } from "react-admin";
import { BedsVerified } from "../Components/Beds";
import { Donor } from "../Components/Donor";
import { OxygenVerified } from "../Components/Oxygen";
import { MedicineVerified } from "../Components/Medicine";
import { PatientVerified } from "../Components/Patient";
import {
  VolunteerVerified,
  VolunteerPast,
  VolunteerUnverified,
} from "../Components/Volunteer/";
import dataprovider from "../Providers/dataProvider";
import CustomLayout from "../Providers/Layout";
import Toast from "../Utils/Toast";
import { OxygenVerifiedCreate } from "../Components/Oxygen/OxygenVerified";
import { MedicineVerifiedCreate } from "../Components/Medicine/MedicineVerified";
import { BedsVerifiedCreate } from "../Components/Beds/BedsVerified";
import { PatientVerifiedCreate } from "../Components/Patient/PatientVerified";
import OxygenUnverified, {
  OxygenUnverifiedCreate,
} from "../Components/Oxygen/OxygenUnverified";
import MedicineUnverified, {
  MedicineUnverifiedCreate,
} from "../Components/Medicine/MedicineUnverified";
import BedsUnverified, {
  BedsUnverifiedCreate,
} from "../Components/Beds/BedsUnverified";
import PatientUnverified, {
  PatientUnverifiedCreate,
} from "../Components/Patient/PatientUnverified";
import authprovider from "../Providers/authprovider";
import "./App.css";
const App = () => {
  return (
    <>
      <Toast />
      <Admin
        layout={CustomLayout}
        dataProvider={dataprovider}
        authProvider={authprovider}
      >
        <Resource name="volunteers/verified" list={VolunteerVerified} />
        <Resource name="volunteers/past" list={VolunteerPast} />
        <Resource name="volunteers/unverified" list={VolunteerUnverified} />
        <Resource
          name="oxygen/verified"
          list={OxygenVerified}
          create={OxygenVerifiedCreate}
        />
        <Resource
          name="oxygen/unverified"
          list={OxygenUnverified}
          create={OxygenUnverifiedCreate}
        />
        <Resource
          name="medicine/verified"
          list={MedicineVerified}
          create={MedicineVerifiedCreate}
        />
        <Resource
          name="medicine/unverified"
          list={MedicineUnverified}
          create={MedicineUnverifiedCreate}
        />
        <Resource
          name="beds/verified"
          list={BedsVerified}
          create={BedsVerifiedCreate}
        />
        <Resource
          name="beds/unverified"
          list={BedsUnverified}
          create={BedsUnverifiedCreate}
        />
        <Resource
          name="patient/verified"
          list={PatientVerified}
          create={PatientVerifiedCreate}
        />
        <Resource
          name="patient/unverified"
          list={PatientUnverified}
          create={PatientUnverifiedCreate}
        />
        <Resource name="donor" list={Donor} />
      </Admin>
    </>
  );
};

export default App;
