import React from 'react';
import { ImEye } from "react-icons/im";
import { Space, Table, Tag } from 'antd';

const columns = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },

  {
    title: 'Course',
    dataIndex: 'course',
    key: 'course',
  },
  {
    title: 'Status',
    key: 'status',
    dataIndex: 'status',
    render: (_, { status }) => (
      <Tag color="green">
        {status.map((s) => s.toUpperCase()).join(', ')}
      </Tag>
    ),
  },

  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <ImEye  className='fs-4'/>
      </Space>
    ),
  },
];
const data = [
  {
    key: '1',
    id:'#89744',
    name: 'John Brown',
    date: "03-02-2024",
    course: 'BCA Computer Application',
    status: ['sent'],
  },
  {
    key: '2',
    id:'#89744',
    name: 'John Brown',
    date: "02-04-2024",
    course: 'BSc Computer Science',
    status: ['sent'],
  },
  {
    key: '3',
    id:'#89744',
    name: 'John Brown',
    date: "06-05-2024",
    course: 'Bsc Pharmacy',
    status: ['sent'],
  },
];
const SentApplications = () => <Table columns={columns} dataSource={data} />;
export default SentApplications;