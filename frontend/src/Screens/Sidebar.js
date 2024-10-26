import React from "react";
import { Link } from "react-router-dom";
import brand from "../images/brand.png";
import { SlEnvolopeLetter } from "react-icons/sl";
import { GoHistory } from "react-icons/go";
import { MdOutlineCollectionsBookmark } from "react-icons/md";
import { BsFillHouseDashFill } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";

function Sidebar() {
  return (
    <div className=" d-flex  justify-content-between flex-column bg-white text-dark py-1 ps-1 pe-1 vh-100 ">
      <div>
        <div>
          <div className="nav-item py-4  ">
            <Link to="/" className="nav-link">
              <img
                className="img-fluid "
                alt=""
                src={brand}
                style={{
                  width: "50px",
                  height: "38px",
                }}
              />
              <span className="fw-bold text-dark fs-5 ">
                Overseas Companion.
              </span>
            </Link>
          </div>
        </div>
        <ul className="navbar-nav  flex-column text-dark">
          <li className="nav-item px-3">
            <Link to="/quickapplication" className="nav-link ">
              <button className="btn btn-primary">+ New Application</button>
            </Link>
          </li>
          <li className="nav-item px-3 ">
            <Link to="/" className="nav-link ">
              <BsFillHouseDashFill className="me-2 text-dark" />
              <span>Dashboard</span>
            </Link>
          </li>
          <li className="nav-item px-3 ">
            <Link to="/applications" className="nav-link ">
              <SlEnvolopeLetter className="me-2 text-dark" />
              <span>Applications</span>
            </Link>
          </li>
          <li className="nav-item px-3 ">
            <Link to="/courses" className="nav-link ">
              <MdOutlineCollectionsBookmark className="me-2 text-dark" />
              <span>Courses</span>
            </Link>
          </li>
          <li className="nav-item px-3 ">
            <Link to="/notifications" className="nav-link ">
              <IoMdNotificationsOutline  className="me-2 text-dark" />
              <span>Notifications</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Sidebar;
