import React from 'react';
import { Space, Table, Tag } from 'antd';
import { ImEye } from 'react-icons/im';
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
      <Tag color="red">
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
    name: 'Takudzwa Mumvanga',
    date: "03-02-2024",
    course: 'BCA Computer Application',
    status: ['failed'],
  },
  {
    key: '2',
    id:'#89744',
    name: 'Takudzwa Mumvanga',
    date: "02-04-2024",
    course: 'BSc Computer Science',
    status: ['failed'],
  },
  {
    key: '3',
    id:'#89744',
    name: 'Takudzwa Mumvanga',
    date: "06-05-2024",
    course: 'Bsc Pharmacy',
    status: ['failed'],
  },
];
const UserFailedApp = () => <Table columns={columns} dataSource={data} />;
export default UserFailedApp;