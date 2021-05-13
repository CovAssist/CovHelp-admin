import * as React from "react";
import { Admin, Resource } from "react-admin";
import { OxygenVerified } from "../Components/Oxygen";
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
        <Resource name="oxygen/verified" list={OxygenVerified}/>
      </Admin>
    </>
  );
};

export default App;
