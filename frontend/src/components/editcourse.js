import React from "react";
import { Button, Modal, Form, Input, Select } from "antd";
import { Upload } from "antd";

const { Option } = Select;

const EditCourse = ({ editCourse, handleCloseCourse, courseDetails }) => {
  const [form] = Form.useForm();

  const handleOk = () => {
    form.validateFields().then(values => {
      console.log('Edited course details:', values);
      handleCloseCourse(); 
    });
  };

  return (
    <Modal
      title="Edit Course"
      visible={editCourse}
      onOk={handleOk}
      onCancel={handleCloseCourse}
      zIndex={1050}
      footer={[
        <Button key="back" onClick={handleCloseCourse}>
          Cancel
        </Button>,
        <Button key="submit" type="primary" onClick={handleOk}>
          Save
        </Button>,
      ]}
    >
      <Form form={form} layout="vertical" initialValues={courseDetails}>
        <Form.Item name="course" label="Course Name" rules={[{ required: true, message: 'Please input the course name!' }]}>
          <Input />
        </Form.Item>
        <Form.Item name="duration" label="Duration" rules={[{ required: true, message: 'Please input the duration!' }]}>
          <Input />
        </Form.Item>
        <Form.Item name="level" label="Level" rules={[{ required: true, message: 'Please select the level!' }]}>
          <Select>
            <Option value="bachelors">Bachelors</Option>
            <Option value="masters">Masters</Option>
          </Select>
        </Form.Item>
        <Form.Item label="Attach File">
          <Upload maxCount={5}>
            <Button>Add Course Image</Button>
          </Upload>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditCourse;
