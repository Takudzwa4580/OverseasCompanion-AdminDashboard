import Navbar from "./Navbar";
import {useState} from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AllUsersApp from "./alluserapplications/alluserapp";
import UserSentApp from "./alluserapplications/usersentapp";
import UserReceivedApp from "./alluserapplications/userreceivedapp";
import UserFailedApp from "./alluserapplications/userfailedapp";
import NewAppModal from "../components/newappmodal";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Applications({ Toggle }) {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="">
      <Navbar Toggle={Toggle} />
      <div className=" bg-light rounded p-5 vh-100">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1>Applications</h1>
          <div class="">
            <form class="" role="search">
              <input
                class="form-control"
                type="search"
                placeholder="Search ..."
                aria-label="Search"
              />
            </form>
          </div>
          <button
            className="btn btn-dark bg-gradient"
            onClick={handleShowModal}
          >
            {" "}
            Send Application{" "}
          </button>
          <NewAppModal show={showModal} handleClose={handleCloseModal} />
        </div>

        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="All" {...a11yProps(0)} />
              <Tab label="Sent" {...a11yProps(1)} />
              <Tab label="Received" {...a11yProps(2)} />
              <Tab label="Failed" {...a11yProps(3)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <AllUsersApp />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <UserSentApp />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <UserReceivedApp />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={3}>
            <UserFailedApp />
          </CustomTabPanel>
        </Box>
      </div>
    </div>
  );
}
