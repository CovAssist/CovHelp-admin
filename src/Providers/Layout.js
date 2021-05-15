import * as React from "react";
import { Layout, MenuItemLink } from "react-admin";
import { useMediaQuery } from "@material-ui/core";
import {
  Person,
  LocalGasStation,
  LocalHospital,
  Hotel,
  CheckCircle,
  PeopleAltOutlined,
  PersonAdd,
  Favorite,
  Accessibility,
} from "@material-ui/icons";
import ListCollapse from "./List";

const Menu = ({ onMenuClick, logout }) => {
  const isXSmall = useMediaQuery((theme) => theme.breakpoints.down("xs"));
  const [openVolunteerData, setOpenVolunteerData] = React.useState(false);
  const [openOxygenData, setOpenOxygenData] = React.useState(false);
  const [openMedicineData, setOpenMedicineData] = React.useState(false);
  const [openBedsData, setOpenBedsData] = React.useState(false);
  const [openPatientData, setOpenPatientData] = React.useState(false);
  return (
    <div>
      <br />
      <ListCollapse
        onMenuClick={onMenuClick}
        title="Volunteer Data"
        state={openVolunteerData}
        setState={setOpenVolunteerData}
        links={[
          {
            text: "Volunteers",
            url: "/volunteers/verified",
            icon: Person,
          },
          {
            text: "Registrations",
            url: "/volunteers/unverified",
            icon: PersonAdd,
          },
          {
            text: "Past Volunteers",
            url: "/volunteers/past",
            icon: PeopleAltOutlined,
          },
        ]}
      />
      <ListCollapse
        onMenuClick={onMenuClick}
        title="Oxygen Data"
        state={openOxygenData}
        setState={setOpenOxygenData}
        links={[
          {
            text: "Verified Oxygen",
            url: "/oxygen/verified",
            icon: CheckCircle,
          },
          {
            text: "Unverified Oxygen",
            url: "/oxygen/unverified",
            icon: LocalGasStation,
          },
        ]}
      />
      <ListCollapse
        onMenuClick={onMenuClick}
        title="Medicine Data"
        state={openMedicineData}
        setState={setOpenMedicineData}
        links={[
          {
            text: "Medicine Verified",
            url: "/medicine/verified",
            icon: LocalHospital,
          },
          {
            text: "Unverified Medicine",
            url: "/medicine/unverified",
            icon: LocalHospital,
          },
        ]}
      />

      <ListCollapse
        onMenuClick={onMenuClick}
        title="Vacant Beds"
        state={openBedsData}
        setState={setOpenBedsData}
        links={[
          {
            text: "Verified Beds",
            url: "/beds/verified",
            icon: Hotel,
          },
          {
            text: "Unverified Beds",
            url: "/beds/unverified",
            icon: Hotel,
          },
        ]}
      />
      <ListCollapse
        onMenuClick={onMenuClick}
        title="Patient Data"
        state={openPatientData}
        setState={setOpenPatientData}
        links={[
          {
            text: "Verified Patients",
            url: "/patients/verified",
            icon: Accessibility,
          },
          {
            text: "Unverified Patients",
            url: "/patients/unverified",
            icon: Accessibility,
          },
        ]}
      />
      <MenuItemLink
        to="/donor"
        primaryText="Donors"
        leftIcon={<Favorite />}
        onClick={onMenuClick}
      />
      {isXSmall && logout}
    </div>
  );
};

const CustomLayout = (props) => <Layout {...props} menu={Menu} />;

export default CustomLayout;
