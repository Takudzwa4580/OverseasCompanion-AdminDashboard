import React, { useState } from "react";
import { Modal, Input, Button, message, List, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const SendMessage = ({ showMsg, handleCloseMsg }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [recipients, setRecipients] = useState([]);
  const [selectedRecipient, setSelectedRecipient] = useState(null);
  const [subject, setSubject] = useState("");
  const [messageContent, setMessageContent] = useState("");
  const [fileList, setFileList] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearchUser = async () => {
    if (!searchTerm) {
      message.error("Please enter a user ID or name to search!");
      return;
    }

    setLoading(true);
    try {
      
      const response = await fetch(`/api/users?search=${searchTerm}`);
      const data = await response.json();

      if (data.user) {
        setRecipients([data.user]); 
        message.success("User found!");
      } else {
        setRecipients([]); 
        message.error("User not found!");
      }
    } catch (error) {
      console.error("Error searching user:", error);
      message.error("Failed to search user.");
    } finally {
      setLoading(false);
    }
  };

  const handleSendMessage = async () => {
    if (!selectedRecipient || !subject || !messageContent) {
      message.error("Recipient, subject, and message cannot be empty!");
      return;
    }

    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("recipientId", selectedRecipient.id);
      formData.append("subject", subject);
      formData.append("message", messageContent);
      fileList.forEach((file) => {
        formData.append("attachments", file);
      });

     
      await new Promise((resolve) => setTimeout(resolve, 2000));

     
      setSubject("");
      setMessageContent("");
      setFileList([]);
      setSelectedRecipient(null);
      setRecipients([]); // Clear recipients after sending
      message.success("Message sent successfully!");
      handleCloseMsg(); // Close modal
    } catch (error) {
      console.error("Error sending message:", error);
      message.error("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  return (
    <Modal
      title="Send Message"
      open={showMsg}
      onCancel={handleCloseMsg}
      zIndex={1050}
      footer={[
        <Button key="back" onClick={handleCloseMsg}>
          Cancel
        </Button>,
        <Button
          key="send"
          type="primary"
          loading={loading}
          onClick={handleSendMessage}
        >
          Send
        </Button>,
      ]}
    >
      <Input
        placeholder="Search User by ID or Name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onPressEnter={handleSearchUser}
        className="mb-2"
      />
      <Button type="primary" onClick={handleSearchUser} loading={loading}>
        Fetch User
      </Button>

      {/* Display search results */}
      <List
        className="mt-2"
        bordered
        dataSource={recipients}
        renderItem={(user) => (
          <List.Item
            onClick={() => setSelectedRecipient(user)}
            style={{
              cursor: "pointer",
              background:
                selectedRecipient?.id === user.id ? "#e6f7ff" : "white",
            }}
          >
            {user.name} ({user.email})
          </List.Item>
        )}
      />

      {selectedRecipient && (
        <h6 className="mt-3">
          To: {selectedRecipient.name} ({selectedRecipient.email})
        </h6>
      )}

      <Input
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        className="mb-2"
      />
      <Input.TextArea
        rows={4}
        placeholder="Type your message here..."
        value={messageContent}
        onChange={(e) => setMessageContent(e.target.value)}
        className="mb-2"
      />

      
      <Upload
        fileList={fileList}
        onChange={handleFileChange}
        beforeUpload={() => false} 
        maxCount={5}
      >
        <Button icon={<UploadOutlined />}>Attach Files</Button>
      </Upload>

      {fileList.length > 0 && (
        <div>
          <strong>Attached Files:</strong>
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

export default SendMessage;
