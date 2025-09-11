/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { Card, Input, Button, Modal, Upload, Table, message } from "antd";
import { PlusOutlined, InboxOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";
import "./css/vipravaani.css";

const { Search } = Input;

interface Vipravaani {
  id: number;
  title: string;
  fileName: string;
}

const AdminVipravaani: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [vipravaanis, setVipravaanis] = useState<Vipravaani[]>([]);
  const [searchText, setSearchText] = useState("");

  const [title, setTitle] = useState("");
  const [fileList, setFileList] = useState<any[]>([]);

  // Upload config
  const uploadProps: UploadProps = {
    accept: ".pdf",
    maxCount: 1,
    beforeUpload: (file) => {
      const isPDF = file.type === "application/pdf";
      if (!isPDF) {
        message.error("Only PDF files are allowed!");
      }
      return isPDF || Upload.LIST_IGNORE;
    },
    onChange(info) {
      setFileList(info.fileList);
    },
    fileList,
  };

  const handleAddVipravaani = () => {
    if (!title || fileList.length === 0) {
      message.error("Please enter title and upload PDF");
      return;
    }

    const newVipravaani: Vipravaani = {
      id: vipravaanis.length + 1,
      title,
      fileName: fileList[0].name,
    };

    setVipravaanis([...vipravaanis, newVipravaani]);
    setIsModalOpen(false);
    setTitle("");
    setFileList([]);
  };

  const filteredVipravaanis = vipravaanis.filter((v) =>
    v.title.toLowerCase().includes(searchText.toLowerCase())
  );

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "File Name",
      dataIndex: "fileName",
      key: "fileName",
    },
  ];

  return (
    <div className="admin-vipravaani">
      <Card
        title="Vipravaani"
        extra={
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => setIsModalOpen(true)}
          >
            Add New
          </Button>
        }
      >
        <Search
          placeholder="Search Vipravaanis"
          allowClear
          onSearch={(value) => setSearchText(value)}
          onChange={(e) => setSearchText(e.target.value)}
          className="vipravaani-search"
        />

        <Table
          dataSource={filteredVipravaanis}
          columns={columns}
          rowKey="id"
          pagination={{ pageSize: 5 }}
        />
      </Card>

      <Modal
        title="Add New Vipravaani"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        onOk={handleAddVipravaani}
        okText="Add"
        className="vipravaani-modal"
      >
        <Input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="vipravaani-title"
        />

        <Upload.Dragger {...uploadProps} className="vipravaani-upload">
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">Click or drag PDF to upload</p>
          <p className="ant-upload-hint">Only PDF files, max 10MB</p>
        </Upload.Dragger>
      </Modal>
    </div>
  );
};

export default AdminVipravaani;
