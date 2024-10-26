import React from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlineUser, AiOutlineLogout, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Dropdown, Menu, Avatar } from "antd";
import { BsPersonCircle } from "react-icons/bs";

function Navbar({ Toggle, userName }) {
  const handleLogout = () => {
    // Implement logout logic
  };

  const menu = (
    <Menu>
      <Menu.Item key="profile" icon={<AiOutlineUser />}>
        <Link to="/ProfileSettings">Profile Settings</Link>
      </Menu.Item>
      <Menu.Item key="logout" icon={<AiOutlineLogout />} onClick={handleLogout}>
        <Link to="/Login">Logout</Link>
      </Menu.Item>
    </Menu>
  );

  const currentDate = new Date();
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = currentDate.toLocaleDateString(undefined, options);

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-white sticky-top">
        <div className="container-fluid m-2 d-flex justify-content-between align-items-center">
          <button
            className="btn btn-light"
            onClick={Toggle}
            aria-label="Toggle navigation"
          >
            <AiOutlineMenu className="text-dark" />
          </button>

          <div className="d-flex flex-column align-items-center">
            <span className="text-secondary">{formattedDate}</span>
          </div>

          <div className="d-flex align-items-center">
            <Link to="/notifications">
              <button className="btn btn-light mx-2" aria-label="Notifications">
                <IoMdNotificationsOutline className="fs-3" />
              </button>
            </Link>

            <Dropdown overlay={menu} trigger={["click"]}>
              <button
                type="button"
                className="btn btn-light mx-2"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <div className="d-flex align-items-center">
                  <Avatar
                    size={30}
                    icon={<BsPersonCircle />}
                    className="me-2"
                  />
                  <span className="fw-bold">
                    {userName || "Takudzwa Mumvanga"}
                  </span>
                </div>
              </button>
            </Dropdown>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
