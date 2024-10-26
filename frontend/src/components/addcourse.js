import React, { useState } from "react";
import { Button, Modal, Input, Select, Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const { Option } = Select;

const AddCourse = ({ addCourse, handleCloseCourse }) => {
  const [courseType, setCourseType] = useState("");
  const [level, setLevel] = useState("");
  const [modeOfLearning, setModeOfLearning] = useState("");
  const [duration, setDuration] = useState("");
  const [fileList, setFileList] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleAddCourse = async () => {
    if (!courseType || !level || !modeOfLearning || !duration) {
      message.error("All fields are required!");
      return;
    }

    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("courseType", courseType);
      formData.append("level", level);
      formData.append("modeOfLearning", modeOfLearning);
      formData.append("duration", duration);
      fileList.forEach((file) => {
        formData.append("picture", file);
      });

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      message.success("Course added successfully!");
      handleCloseCourse(); 
      resetForm(); 
    } catch (error) {
      console.error("Error adding course:", error);
      message.error("Failed to add course.");
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const resetForm = () => {
    setCourseType("");
    setLevel("");
    setModeOfLearning("");
    setDuration("");
    setFileList([]);
  };

  return (
    <Modal
      title="Add New Course"
      open={addCourse}
      onCancel={handleCloseCourse}
      zIndex={1050}
      footer={[
        <Button key="back" onClick={handleCloseCourse}>
          Cancel
        </Button>,
        <Button
          key="add"
          type="primary"
          loading={loading}
          onClick={handleAddCourse}
        >
          Add Course
        </Button>,
      ]}
    >
      <Input
        placeholder="Course Type(e.g., B.Sc , B.Tech , BBA , MBA)"
        value={courseType}
        onChange={(e) => setCourseType(e.target.value)}
        className="mb-2"
      />
      <Input
        placeholder="Level (e.g., Masters, Bachelors, Diploma)"
        value={level}
        onChange={(e) => setLevel(e.target.value)}
        className="mb-2"
      />
      <Select
        placeholder="Mode of Learning"
        value={modeOfLearning}
        onChange={(value) => setModeOfLearning(value)}
        className="mb-2"
      >
        <Option value="online">Online</Option>
        <Option value="offline">Offline</Option>
      </Select>
      <Input
        placeholder="Duration (e.g., 4 Years, 3 Years ,2 Years)"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
        className="mb-2"
      />
      <Upload
        fileList={fileList}
        onChange={handleFileChange}
        beforeUpload={() => false} 
        maxCount={1} 
      >
        <Button icon={<UploadOutlined />}>Upload Course Picture</Button>
      </Upload>

      {fileList.length > 0 && (
        <div>
          <strong>Attached Picture:</strong>
          <ul>
            {fileList.map((file) => (
              <li key={file.uid}>{file.name}</li>
            ))}
          </ul>
        </div>
      )}
    </Modal>
  );
};

export default AddCourse;
