import React, { useState } from "react";
import { Button, Input, message, Card, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import Navbar from "./Navbar"; 

const Notifications = ({ Toggle }) => {
  const [notification, setNotification] = useState("");
  const [fileList, setFileList] = useState([]);

  const handleSendNotification = async () => {
    if (notification.trim()) {
      try {
        console.log("Notification sent:", notification);
        
        // Simulate sending the file(s) if any
        if (fileList.length > 0) {
          console.log("Attached files:", fileList);
        }

        message.success("Notification sent successfully!");
        setNotification("");
        setFileList([]);
      } catch (error) {
        message.error("An error occurred. Please try again.");
        console.error("Error sending notification:", error);
      }
    } else {
      message.error("Please enter a notification message.");
    }
  };

  const handleFileChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  return (
    <div className="bg-light vh-100">
      <Navbar Toggle={Toggle} />
      <div className="container mt-4 d-flex justify-content-center">
        <Card
          title="Send Notification to All Users"
          style={{ width: 600, borderRadius: 10, boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}
        >
          <div className="mb-3">
            <Input.TextArea
              rows={4}
              value={notification}
              onChange={(e) => setNotification(e.target.value)}
              placeholder="Enter your notification message here"
              style={{ borderRadius: 8 }}
            />
          </div>
          <Upload
            multiple
            fileList={fileList}
            onChange={handleFileChange}
            beforeUpload={() => false} // Prevent automatic upload
            showUploadList={{ showRemoveIcon: true }}
          >
            <Button icon={<UploadOutlined />} style={{ borderRadius: 8 }}>
              Attach Files
            </Button>
          </Upload>
          <Button
            type="primary"
            onClick={handleSendNotification}
            style={{ borderRadius: 8, marginTop: "16px" }}
          >
            Send Notification
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default Notifications;
