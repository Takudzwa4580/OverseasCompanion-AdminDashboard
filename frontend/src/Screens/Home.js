import React, { useState } from "react";
import Navbar from "./Navbar";
import { Table, Input, Space } from "antd";
import { SlEnvolopeLetter } from "react-icons/sl";
import { CiUser } from "react-icons/ci";
import { MdOutlineCollectionsBookmark } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function Home({ Toggle }) {
  const navigate = useNavigate();
  const [search, setSearch] = useState(""); 

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: "Sex",
      dataIndex: "sex",
      filters: [
        { text: "Male", value: "male" },
        { text: "Female", value: "female" },
      ],
      onFilter: (value, record) => record.sex === value,
    },
    {
      title: "Age",
      dataIndex: "age",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Country",
      dataIndex: "country",
      filters: [
        { text: "Zimbabwe", value: "Zimbabwe" },
        { text: "Zambia", value: "Zambia" },
        { text: "Botswana", value: "Botswana" },
        { text: "Lesotho", value: "Lesotho" },
        { text: "Swaziland", value: "Swaziland" },
        { text: "Tanzania", value: "Tanzania" },
      ],
      onFilter: (value, record) => record.country.includes(value),
    },
    {
      title: "Status",
      dataIndex: "status",
      filters: [
        { text: "Verified", value: "verified" },
        { text: "Unverified", value: "unverified" },
      ],
      onFilter: (value, record) => record.status.props.children[0].includes(value), 
    },
  ];

  const data = [
    {
      key: "1",
      name: "John Brown",
      sex: "male",
      age: 21,
      country: "Zimbabwe",
      status: <span className="badge rounded-pill text-bg-success">verified</span>,
    },
    {
      key: "2",
      name: "Pride Banda",
      sex: "male",
      age: 21,
      country: "Zambia",
      status: <span className="badge rounded-pill text-bg-success">verified</span>,
    },
    {
      key: "3",
      name: "Tanaka Moyo",
      sex: "male",
      age: 22,
      country: "Zimbabwe",
      status: <span className="badge rounded-pill text-bg-success">verified</span>,
    },
    {
      key: "4",
      name: "Arnold Sithole",
      sex: "male",
      age: 23,
      country: "Botswana",
      status: <span className="badge rounded-pill text-bg-success">verified</span>,
    },
    {
      key: "5",
      name: "Tamuka Ndlovu",
      sex: "male",
      age: 26,
      country: "Lesotho",
      status: <span className="badge rounded-pill text-bg-danger">unverified</span>,
    },
    {
      key: "6",
      name: "Charity Ntonzi",
      sex: "female",
      age: 22,
      country: "Swaziland",
      status: <span className="badge rounded-pill text-bg-danger">unverified</span>,
    },
    {
      key: "7",
      name: "Mark Rashid",
      sex: "male",
      age: 26,
      country: "Tanzania",
      status: <span className="badge rounded-pill text-bg-success">verified</span>,
    },
    {
      key: "8",
      name: "Charmaine Moyo",
      sex: "female",
      age: 24,
      country: "Zambia",
      status: <span className="badge rounded-pill text-bg-danger">unverified</span>,
    },
  ];

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <div>
      <Navbar Toggle={Toggle} />
      <div className="bg-light p-4">
        <div className="d-flex justify-content-between my-4">
          <div className="col-3 bg-dark rounded text-center p-4 shadow">
            <h2 className="text-white fw-bold d-flex justify-content-center align-items-center">
              <CiUser className="fs-1 me-2" />
              Users
            </h2>
            <span className="text-secondary fs-4">2300</span>
          </div>
          <div className="col-3 bg-dark rounded text-center p-4 shadow">
            <h2 className="text-white fw-bold d-flex justify-content-center align-items-center">
              <SlEnvolopeLetter className="fs-1 me-2" />
              Applications
            </h2>
            <span className="text-secondary fs-4">340</span>
          </div>
          <div className="col-3 bg-dark rounded text-center p-4 shadow">
            <h2 className="text-white fw-bold d-flex justify-content-center align-items-center">
              <MdOutlineCollectionsBookmark className="fs-1 me-2" />
              Courses
            </h2>
            <span className="text-secondary fs-4">40</span>
          </div>
        </div>

        <div className="p-3 my-3">
          <Space style={{ marginBottom: 16 }}>
            <Input
              placeholder="Search by name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </Space>
          <Table
            className="table table-hover"
            columns={columns}
            dataSource={filteredData} 
            onChange={onChange}
            onRow={(record) => ({
              onClick: () => {
                navigate(`/user/${record.key}`);
              },
            })}
            pagination={{ pageSize: 5 }} 
            rowClassName={(record) => {
              const statusText = record.status.props.children; 
              return statusText === 'verified' ? 'row-verified' : 'row-unverified';
            }}
          />
        </div>
      </div>
    </div>
  );
}
