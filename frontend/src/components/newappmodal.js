import React, { useState } from "react";
import { Button, Modal, Input, Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const NewAppModal = ({ show, handleClose }) => {
  const [subject, setSubject] = useState("");
  const [messageContent, setMessageContent] = useState("");
  const [fileList, setFileList] = useState([]);
  const [userId, setUserId] = useState("");
  const [userData, setUserData] = useState(null);

  const handleSend = () => {
    console.log("Subject:", subject);
    console.log("Message:", messageContent);
    console.log("Files:", fileList);
    console.log("User Data:", userData);
    handleClose();
  };

  const handleFileChange = ({ fileList }) => {
    setFileList(fileList);
  };

  const fetchUser = async () => {
    try {
      
      const response = await fetch(`/api/users/${userId}`); 
      const data = await response.json();

      if (response.ok) {
        setUserData(data);
        message.success(`User fetched: ${data.name}`); 
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      message.error(`Error fetching user: ${error.message}`);
    }
  };

  return (
    <div>
      <Modal
        title="Send Application"
        open={show}
        onCancel={handleClose}
        zIndex={1050}
        footer={[
          <Button key="cancel" onClick={handleClose}>
            Cancel
          </Button>,
          <Button key="send" type="primary" onClick={handleSend}>
            Send Application
          </Button>,
        ]}
      >
        <div>
          <p>Please fill out the details below:</p>
          <Input
            placeholder="User ID / Name"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            style={{ marginBottom: "10px" }}
          />
          <Button onClick={fetchUser} type="primary" style={{ marginBottom: "10px" }}>
            Fetch User
          </Button>
          {userData && (
            <div style={{ marginBottom: "10px" }}>
              <strong>User Data:</strong> {JSON.stringify(userData)}
            </div>
          )}
          <Input
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            style={{ marginBottom: "10px" }}
          />
          <Input.TextArea
            placeholder="Message"
            value={messageContent}
            onChange={(e) => setMessageContent(e.target.value)}
            rows={4}
            style={{ marginBottom: "10px" }}
          />
          <Upload
            fileList={fileList}
            onChange={handleFileChange}
            beforeUpload={() => false}
            maxCount={5}
          >
            <Button icon={<UploadOutlined />}>Attach Files</Button>
          </Upload>
        </div>
      </Modal>
    </div>
  );
};

export default NewAppModal;
