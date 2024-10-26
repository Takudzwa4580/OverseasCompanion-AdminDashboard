import React, { useState } from "react";
import Navbar from "../Navbar";
import { Space, Table, Tag, Button } from "antd";
import AddCourse from "../../components/addcourse";
import EditCourse from "../../components/editcourse"; // Import the EditCourse component

function Courses({ Toogle }) {
  const [addCourse, setAddCourse] = useState(false);
  const [editCourse, setEditCourse] = useState(false);
  const [currentCourse, setCurrentCourse] = useState(null); // State to hold the course being edited

  const handleAddCourse = () => setAddCourse(true);
  const handleCloseCourse = () => setAddCourse(false);
  
  const handleEditCourse = (course) => {
    setCurrentCourse(course); // Set the current course for editing
    setEditCourse(true);
  };

  const handleCloseEditCourse = () => {
    setCurrentCourse(null); // Clear current course on close
    setEditCourse(false);
  };

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Date Added",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Course Name",
      dataIndex: "course",
      key: "course",
    },
    {
      title: "Duration",
      dataIndex: "duration",
      key: "duration",
    },
    {
      title: "Level",
      key: "level",
      dataIndex: "level",
      render: (_, { level }) => (
        <>
          {level.map((level) => {
            let color = "";

            switch (level.toLowerCase()) {
              case "bachelors":
                color = "green";
                break;
              case "masters":
                color = "geekblue";
                break;
              default:
                color = "defaultColor"; // Handle other cases if needed
                break;
            }

            return (
              <Tag color={color} key={level}>
                {level.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <button className="btn btn-success bg-gradient" onClick={() => handleEditCourse(record)}>Edit</button>
          <button className="btn btn-danger bg-gradient">Delete</button>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      id: "#89744",
      date: "03-02-2024",
      course: "BCA Computer Application",
      duration: "4 Years",
      level: ["bachelors"],
    },
    {
      key: "2",
      id: "#89744",
      date: "02-04-2024",
      course: "MSc. Computer Science",
      duration: "4 Years",
      level: ["masters"],
    },
    {
      key: "3",
      id: "#89744",
      date: "06-05-2024",
      course: "Bsc Pharmacy",
      duration: "4 Years",
      level: ["bachelors"],
    },
  ];

  return (
    <div className="">
      <Navbar Toggle={Toogle} />
      <div className="vh-100 rounded bg-light p-5">
        <div className="d-flex justify-content-between align-items-center ">
          <h1>Courses</h1>
          <div>
            <form role="search">
              <input
                className="form-control"
                type="search"
                placeholder="Search ..."
                aria-label="Search"
              />
            </form>
          </div>
          <button className="btn btn-dark bg-gradient" onClick={handleAddCourse}>
            + New Course
          </button>
        </div>
        <div className="mt-5">
          <Table columns={columns} dataSource={data} />
        </div>
      </div>
      <AddCourse addCourse={addCourse} handleCloseCourse={handleCloseCourse} />
      <EditCourse editCourse={editCourse} handleCloseCourse={handleCloseEditCourse} courseDetails={currentCourse} />
    </div>
  );
}

export default Courses;
