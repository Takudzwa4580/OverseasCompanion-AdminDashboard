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
      <>
        {status.map((status) => {
          let color = '';
  
          switch (status.toLowerCase()) {
            case 'sent':
              color = 'green';
              break;
            case 'received':
              color = 'geekblue';
              break;
            case 'failed':
              color = 'volcano';
              break;
            default:
              color = 'defaultColor'; // Set a default color or handle other cases as needed
              break;
          }
  
          return (
            <Tag color={color} key={status}>
              {status.toUpperCase()}
            </Tag>
          );
        })}
      </>
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
    status: ['received'],
  },
  {
    key: '3',
    id:'#89744',
    name: 'John Brown',
    date: "06-05-2024",
    course: 'Bsc Pharmacy',
    status: ['failed'],
  },
];
const AllApplications = () => <Table columns={columns} dataSource={data} />;
export default AllApplications;