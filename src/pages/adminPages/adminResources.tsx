import React, { useState } from "react";
import {
  Card,
  Input,
  Button,
  Modal,
  Select,
  Upload,
  Table,
  message,
} from "antd";
import { PlusOutlined, InboxOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";
import "./css/resources.css";

const { Option } = Select;
const { Search } = Input;

interface Resource {
  id: number;
  type: string;
  name: string;
}

const AdminResources: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [resources, setResources] = useState<Resource[]>([]);
  const [searchText, setSearchText] = useState("");
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [title, setTitle] = useState("");

  // Upload config
  const uploadProps: UploadProps = {
    name: "file",
    accept: ".pdf",
    maxCount: 1,
    beforeUpload: (file) => {
      const isPDF = file.type === "application/pdf";
      if (!isPDF) {
        message.error("You can only upload PDF files!");
      }
      return isPDF || Upload.LIST_IGNORE;
    },
  };

  const handleAddResource = () => {
    if (!selectedType) {
      message.error("Please select resource type");
      return;
    }

    const newResource: Resource = {
      id: resources.length + 1,
      type: selectedType,
      name: `${selectedType} Resource ${resources.length + 1}`,
    };

    setResources([...resources, newResource]);
    setIsModalOpen(false);
    setSelectedType(null);
  };

  const filteredResources = resources.filter((r) =>
    r.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const columns = [
    {
      title: "Resource Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
  ];

  return (
    <div className="admin-resources">
      <Card
        title="Resources"
        className="resources-card"
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
          placeholder="Search resources"
          allowClear
          onSearch={(value) => setSearchText(value)}
          onChange={(e) => setSearchText(e.target.value)}
          className="resources-search"
        />

        <Table
          dataSource={filteredResources}
          columns={columns}
          rowKey="id"
          pagination={{ pageSize: 5 }}
        />
      </Card>

      <Modal
        title="Add New Resource"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        onOk={handleAddResource}
        okText="Add Resource"
        className="resource-modal"
      >
        <Input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="vipravaani-title"
        />
        <Select
          placeholder="Select Resource Type"
          value={selectedType || undefined}
          onChange={(value) => setSelectedType(value)}
          className="resource-type-select"
        >
          <Option value="Report">Report</Option>
          <Option value="Panchangam">Panchangam</Option>
        </Select>

        <Upload.Dragger {...uploadProps} className="resource-upload">
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

export default AdminResources;
