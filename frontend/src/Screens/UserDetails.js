import React, { useState } from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import userprofile from "../images/userprofile.avif";
import { Avatar, Modal } from "antd";
import MyApplications from "./myapplications/myapplications";
import NewAppModal from "../components/newappmodal";
import SendMessageModal from "../components/sendmessage";

function UserDetails({ Toggle }) {
  const { id } = useParams();

  const [showModal, setShowModal] = useState(false);
  const [showMsg, setShowMsg] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const handleSendMsg = () => setShowMsg(true);  
  const handleCloseMsg = () => setShowMsg(false);

  const handleToggleVerification = () => {
    const action = isVerified ? "unverify" : "verify";
    const confirmationMessage = `Are you sure you want to ${action} this user?`;

    Modal.confirm({
      title: `Confirm ${action.charAt(0).toUpperCase() + action.slice(1)} Verification`,
      content: confirmationMessage,
      onOk: () => {
        setIsVerified((prev) => !prev); 
      },
    });
  };

  return (
    <div>
      <Navbar Toggle={Toggle} />
      <div className="bg-light">
        <div className="card mb-4 border-0 bg-light">
          <div className="row g-0">
            <div className="col-md-4 d-flex align-items-center justify-content-center border-end">
              <Avatar size={150} src={userprofile} className="rounded-circle" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title text-dark fw-bold">User Profile</h5>
                <div className="row text-secondary">
                  <div className="col-6">
                    <h6>
                      Name: <span className="text-dark">John Brown</span>
                    </h6>
                    <h6>
                      Email:{" "}
                      <span className="text-dark">johnbrown@gmail.com</span>
                    </h6>
                    <h6>
                      Contact: <span className="text-dark">+263776338668</span>
                    </h6>
                  </div>
                  <div className="col-6">
                    <h6>
                      Age: <span className="text-dark">23</span>
                    </h6>
                    <h6>
                      Country: <span className="text-dark">Zimbabwe</span>
                    </h6>
                    <h6>
                      Status:{" "}
                      <span className={isVerified ? "text-success" : "text-dark"}>
                        {isVerified ? "Verified" : "Unverified"}
                      </span>
                    </h6>
                  </div>
                </div>
                <p className="card-text my-2 text-muted">
                  <small>Last updated 3 days ago</small>
                </p>
                <div className="d-flex justify-content-between my-3">
                  <button className="btn btn-dark" onClick={handleShowModal}>
                    Send Application
                  </button>
                  <button
                    className={`btn ${isVerified ? "btn-danger" : "btn-success"}`}
                    onClick={handleToggleVerification}
                  >
                    {isVerified ? "Unverify User" : "Verify User"}
                  </button>
                  <button className="btn btn-dark" onClick={handleSendMsg}>
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <NewAppModal show={showModal} handleClose={handleCloseModal} />
        <SendMessageModal 
          showMsg={showMsg} 
          handleCloseMsg={handleCloseMsg} 
          recipient={{ id: "#2313", name: "John Brown", email: "johnbrown@gmail.com" }} 
        />

        <div className="my-5">
          <MyApplications />
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
