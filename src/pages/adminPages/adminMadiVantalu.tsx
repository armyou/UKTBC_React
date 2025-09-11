/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import {
  Input,
  Card,
  Button,
  Modal,
  message,
  Form,
  Upload,
  Space,
  Popconfirm,
} from "antd";
import {
  PlusOutlined,
  InboxOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import "./css/madiVantalu.css";
import caterersLogo from "../../assets/dummy/caterers.png";

const { Dragger } = Upload;

interface Caterer {
  id: number;
  name: string;
  logo: string;
  serviceLocation: string;
  mobile: string;
}

// Dummy data for caterers
const dummyCaterers: Caterer[] = [
  {
    id: 1,
    name: "Sai Catering Services",
    logo: caterersLogo,
    serviceLocation: "Hyderabad",
    mobile: "9876543210",
  },
  {
    id: 2,
    name: "Temple Food Solutions",
    logo: caterersLogo,
    serviceLocation: "Vijayawada",
    mobile: "9876501234",
  },
  {
    id: 3,
    name: "Divine Catering Co.",
    logo: caterersLogo,
    serviceLocation: "Guntur",
    mobile: "9876512345",
  },
];

const AdminMadiVantalu: React.FC = () => {
  const [search, setSearch] = useState("");
  const [caterers, setCaterers] = useState<Caterer[]>(dummyCaterers);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingCaterer, setEditingCaterer] = useState<Caterer | null>(null);
  const [addForm] = Form.useForm();
  const [editForm] = Form.useForm();

  const filteredCaterers = caterers.filter(
    (caterer) =>
      caterer.name.toLowerCase().includes(search.toLowerCase()) ||
      caterer.serviceLocation.toLowerCase().includes(search.toLowerCase()) ||
      caterer.mobile.includes(search)
  );

  const handleAddNew = (values: any) => {
    const newCaterer: Caterer = {
      id: Date.now(),
      name: values.name,
      logo: values.logo?.[0]?.thumbUrl || caterersLogo,
      serviceLocation: values.serviceLocation,
      mobile: values.mobile,
    };
    setCaterers([...caterers, newCaterer]);
    message.success("New caterer added successfully");
    addForm.resetFields();
    setIsAddModalOpen(false);
  };

  const handleEdit = (caterer: Caterer) => {
    setEditingCaterer(caterer);
    // Create a mock file object for the existing logo
    const mockFile = {
      uid: '-1',
      name: 'existing-logo.png',
      status: 'done',
      url: caterer.logo,
      thumbUrl: caterer.logo,
    };

    editForm.setFieldsValue({
      ...caterer,
      logo: [mockFile],
    });
    setIsEditModalOpen(true);
  };

  const handleUpdate = (values: any) => {
    if (!editingCaterer) return;

    const updatedCaterer = {
      ...editingCaterer,
      ...values,
      logo: values.logo?.[0]?.thumbUrl || values.logo?.[0]?.url || editingCaterer.logo,
    };

    setCaterers(caterers.map(c => c.id === editingCaterer.id ? updatedCaterer : c));
    message.success("Caterer updated successfully");
    editForm.resetFields();
    setIsEditModalOpen(false);
    setEditingCaterer(null);
  };

  const handleDelete = (id: number) => {
    setCaterers(caterers.filter((c) => c.id !== id));
    message.success("Caterer deleted successfully");
  };

  // File validation
  const beforeUpload = (file: File) => {
    const isImage = file.type === "image/jpeg" || file.type === "image/png";
    if (!isImage) {
      message.error("You can only upload JPG/PNG files!");
      return Upload.LIST_IGNORE;
    }
    return false;
  };

  return (
    <div className="madi-vantalu-container">
      {/* Search Bar + Add Button */}
      <div className="madi-vantalu-search-bar">
        <Input.Search
          placeholder="Search by name, location, or mobile number"
          allowClear
          enterButton
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button
          type="primary"
          className="secondary-btn"
          icon={<PlusOutlined />}
          onClick={() => setIsAddModalOpen(true)}
        >
          Add New Caterer
        </Button>
      </div>

      {/* Caterers Grid */}
      {filteredCaterers.length > 0 ? (
        <div className="caterers-grid">
          {filteredCaterers.map((caterer) => (
            <Card
              key={caterer.id}
              className="caterer-card"
              cover={<img alt={caterer.name} src={caterer.logo} className="caterer-logo" />}
            >
              <div className="caterer-info">
                <h3 className="caterer-name">{caterer.name}</h3>
                <p className="caterer-location">📍 {caterer.serviceLocation}</p>
                <p className="caterer-mobile">📞 {caterer.mobile}</p>
              </div>

              <div className="caterer-actions">
                <Button
                  className="edit-btn"
                  icon={<EditOutlined />}
                  onClick={() => handleEdit(caterer)}
                >
                  Edit
                </Button>
                <Popconfirm
                  title="Are you sure you want to delete this caterer?"
                  onConfirm={() => handleDelete(caterer.id)}
                  okText="Yes"
                  cancelText="No"
                >
                  <Button
                    className="delete-btn"
                    danger
                    icon={<DeleteOutlined />}
                  >
                    Delete
                  </Button>
                </Popconfirm>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <div className="empty-state-icon">🍽️</div>
          <h3 className="empty-state-title">No Caterers Found</h3>
          <p className="empty-state-description">
            {search ? "No caterers match your search criteria." : "Get started by adding your first caterer."}
          </p>
          {!search && (
            <Button
              type="primary"
              icon={<PlusOutlined />}
              onClick={() => setIsAddModalOpen(true)}
              className="empty-state-button"
            >
              Add First Caterer
            </Button>
          )}
        </div>
      )}

      {/* Add New Modal */}
      <Modal
        title="Add New Caterer"
        open={isAddModalOpen}
        onCancel={() => setIsAddModalOpen(false)}
        footer={null}
        width={600}
      >
        <Form
          form={addForm}
          layout="vertical"
          onFinish={handleAddNew}
          className="caterer-form"
        >
          <Form.Item
            name="logo"
            valuePropName="fileList"
            getValueFromEvent={(e) => e.fileList}
            rules={[{ required: true, message: "Please upload a logo" }]}
          >
            <Dragger
              listType="picture-card"
              beforeUpload={beforeUpload}
              maxCount={1}
            >
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">
                Click or drag logo to upload (JPG/PNG)
              </p>
              <p className="ant-upload-hint">
                Only one file allowed. Max size: 2MB recommended
              </p>
            </Dragger>
          </Form.Item>

          <Form.Item
            name="name"
            rules={[{ required: true, message: "Please enter caterer name" }]}
          >
            <Input placeholder="Enter caterer name" />
          </Form.Item>

          <Form.Item
            name="serviceLocation"
            rules={[{ required: true, message: "Please enter service location" }]}
          >
            <Input placeholder="Enter service location" />
          </Form.Item>

          <Form.Item
            name="mobile"
            rules={[{ required: true, message: "Please enter mobile number" }]}
          >
            <Input placeholder="Enter mobile number" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Add Caterer
            </Button>
          </Form.Item>
        </Form>
      </Modal>

      {/* Edit Modal */}
      <Modal
        title="Edit Caterer"
        open={isEditModalOpen}
        onCancel={() => {
          setIsEditModalOpen(false);
          editForm.resetFields();
          setEditingCaterer(null);
        }}
        footer={null}
        width={600}
      >
        <Form
          form={editForm}
          layout="vertical"
          onFinish={handleUpdate}
          className="caterer-form"
        >
          <Form.Item
            name="logo"
            valuePropName="fileList"
            getValueFromEvent={(e) => e.fileList}
            rules={[{ required: false, message: "Please upload a logo" }]}
          >
            <Dragger
              listType="picture-card"
              beforeUpload={beforeUpload}
              maxCount={1}
            >
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">
                Click or drag logo to upload (JPG/PNG) - Optional
              </p>
              <p className="ant-upload-hint">
                Only one file allowed. Max size: 2MB recommended. Leave empty to keep current logo.
              </p>
            </Dragger>
          </Form.Item>

          <Form.Item
            name="name"
            rules={[{ required: true, message: "Please enter caterer name" }]}
          >
            <Input placeholder="Enter caterer name" />
          </Form.Item>

          <Form.Item
            name="serviceLocation"
            rules={[{ required: true, message: "Please enter service location" }]}
          >
            <Input placeholder="Enter service location" />
          </Form.Item>

          <Form.Item
            name="mobile"
            rules={[{ required: true, message: "Please enter mobile number" }]}
          >
            <Input placeholder="Enter mobile number" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Update Caterer
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default AdminMadiVantalu;
