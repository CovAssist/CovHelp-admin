import * as React from "react";
import { Admin, Resource } from "react-admin";
import Volunteer from "../Components/Volunteer";
import dataprovider from "../Providers/dataProvider";
import CustomLayout from "../Providers/Layout";
const App = () => {
  return (
    <>
      <Admin layout={CustomLayout} dataProvider={dataprovider}>
        <Resource name="volunteers/verified" list={Volunteer} />
      </Admin>
    </>
  );
};

export default App;
