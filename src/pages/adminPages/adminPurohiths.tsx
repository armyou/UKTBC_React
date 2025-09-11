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
  Select,
  Popconfirm,
} from "antd";
import {
  PlusOutlined,
  InboxOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import "./css/purohiths.css";

import purohith1 from "../../assets/dummy/purohiths/purohith 1.png";
import purohith2 from "../../assets/dummy/purohiths/purohith 2.png";

const { Dragger } = Upload;

interface Purohith {
  id: number;
  name: string;
  mobile: string;
  email: string;
  photo: string;
  serviceLocation: string; // comma separated
  tagline: string;
}

const dummyPurohiths: Purohith[] = [
  {
    id: 1,
    name: "Pandit Ramesh",
    mobile: "07700 900123",
    email: "ramesh@example.com",
    photo: purohith1,
    serviceLocation: "Westminster, Camden, Islington",
    tagline: "Smartha Family",
  },
  {
    id: 2,
    name: "Pandit Suresh",
    mobile: "07700 900456",
    email: "suresh@example.com",
    photo: purohith2,
    serviceLocation: "Solihull, Sutton Coldfield, Edgbaston",
    tagline: "Smartha Family",
  },
];

const AdminPurohiths: React.FC = () => {
  const [search, setSearch] = useState("");
  const [purohiths, setPurohiths] = useState<Purohith[]>(dummyPurohiths);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingPurohith, setEditingPurohith] = useState<Purohith | null>(null);
  const [addForm] = Form.useForm();
  const [editForm] = Form.useForm();

  const filteredPurohiths = purohiths.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.serviceLocation.toLowerCase().includes(search.toLowerCase())
  );


  const handleAddNew = (values: any) => {
    const newPurohith: Purohith = {
      id: Date.now(),
      name: values.name,
      mobile: values.mobile,
      email: values.email,
      photo: values.photo?.[0]?.thumbUrl || purohith1, // fallback dummy
      serviceLocation: values.serviceLocation.join(", "),
      tagline: values.tagline,
    };
    setPurohiths([...purohiths, newPurohith]);
    message.success("New Purohith added successfully");
    addForm.resetFields();
    setIsAddModalOpen(false);
  };

  const handleEdit = (purohith: Purohith) => {
    setEditingPurohith(purohith);
    // Create a mock file object for the existing photo
    const mockFile = {
      uid: '-1',
      name: 'existing-photo.png',
      status: 'done',
      url: purohith.photo,
      thumbUrl: purohith.photo,
    };

    editForm.setFieldsValue({
      ...purohith,
      serviceLocation: purohith.serviceLocation.split(", "),
      photo: [mockFile],
    });
    setIsEditModalOpen(true);
  };

  const handleUpdate = (values: any) => {
    if (!editingPurohith) return;

    const updatedPurohith = {
      ...editingPurohith,
      ...values,
      serviceLocation: values.serviceLocation.join(", "),
      photo: values.photo?.[0]?.thumbUrl || values.photo?.[0]?.url || editingPurohith.photo,
    };

    setPurohiths(purohiths.map(p => p.id === editingPurohith.id ? updatedPurohith : p));
    message.success("Purohith updated successfully");
    editForm.resetFields();
    setIsEditModalOpen(false);
    setEditingPurohith(null);
  };

  const handleDelete = (id: number) => {
    setPurohiths(purohiths.filter((p) => p.id !== id));
    message.success("Purohith deleted successfully");
  };

  // File validation
  const beforeUpload = (file: File) => {
    const isImage = file.type === "image/jpeg" || file.type === "image/png";
    if (!isImage) {
      message.error("You can only upload JPG/PNG files!");
      return Upload.LIST_IGNORE; // prevents adding to file list
    }
    return false; // prevent auto upload, allow manual handling
  };

  return (
    <div className="purohiths-container">
      {/* Search Bar + Add Button */}
      <div className="purohiths-search-bar">
        <Input.Search
          placeholder="Search by name, location, or service location"
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
          Add New
        </Button>
      </div>

      {/* Purohiths Grid */}
      {filteredPurohiths.length > 0 ? (
        <div className="purohiths-grid">
          {filteredPurohiths.map((purohith) => (
            <Card
              key={purohith.id}
              className="purohith-card"
            >
              <div className="purohith-header">
                <div className="purohith-avatar">
                  <img alt={purohith.name} src={purohith.photo} className="purohith-photo" />
                </div>
                <div className="purohith-name-section">
                  <h3 className="purohith-name">{purohith.name}</h3>
                  <p className="purohith-tagline">{purohith.tagline}</p>
                </div>
              </div>
              
              <div className="purohith-details">
                <p className="purohith-mobile">📞 {purohith.mobile}</p>
                <p className="purohith-email">📧 {purohith.email}</p>
                <div className="purohith-service-locations">
                  {purohith.serviceLocation.split(",").map((location, idx) => (
                    <span key={idx} className="service-location-tag">
                      {location.trim()}
                    </span>
                  ))}
                </div>
              </div>

              <div className="purohith-actions">
                <Button
                  className="edit-btn"
                  icon={<EditOutlined />}
                  onClick={() => handleEdit(purohith)}
                >
                  Edit
                </Button>
                <Popconfirm
                  title="Are you sure you want to delete this purohith?"
                  onConfirm={() => handleDelete(purohith.id)}
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
          <div className="empty-state-icon">👥</div>
          <h3 className="empty-state-title">No Purohiths Found</h3>
          <p className="empty-state-description">
            {search ? "No purohiths match your search criteria." : "Get started by adding your first purohith."}
          </p>
          {!search && (
            <Button
              type="primary"
              icon={<PlusOutlined />}
              onClick={() => setIsAddModalOpen(true)}
              className="empty-state-button"
            >
              Add First Purohith
            </Button>
          )}
        </div>
      )}


      {/* Add New Modal */}
      <Modal
        title="Add New Purohith"
        open={isAddModalOpen}
        onCancel={() => setIsAddModalOpen(false)}
        footer={null}
      >
        <Form
          form={addForm}
          layout="vertical"
          onFinish={handleAddNew}
          className="purohith-form"
        >
          <Form.Item
            name="photo"
            valuePropName="fileList"
            getValueFromEvent={(e) => e.fileList}
            rules={[{ required: true, message: "Please upload a photo" }]}
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
                Click or drag photo to upload (JPG/PNG)
              </p>
              <p className="ant-upload-hint">
                Only one file allowed. Max size: 2MB recommended
              </p>
            </Dragger>
          </Form.Item>

          <Form.Item
            name="name"
            rules={[{ required: true, message: "Please enter name" }]}
          >
            <Input placeholder="Enter full name" />
          </Form.Item>

          <Form.Item
            name="serviceLocation"
            rules={[
              {
                required: true,
                message: "Enter at least one service location",
              },
            ]}
          >
            <Select
              mode="tags"
              placeholder="Type service locations and press Enter"
              open={false} // disables dropdown, press Enter adds tag
              tokenSeparators={[","]}
            />
          </Form.Item>

          <Form.Item
            name="mobile"
            rules={[{ required: true, message: "Please enter mobile number" }]}
          >
            <Input placeholder="Enter mobile number" />
          </Form.Item>

          <Form.Item
            name="email"
            rules={[
              { type: "email", message: "Please enter a valid email" },
              { required: true, message: "Please enter email" },
            ]}
          >
            <Input placeholder="Enter email address" />
          </Form.Item>

          <Form.Item
            name="tagline"
            rules={[{ required: true, message: "Please enter family information" }]}
          >
            <Input 
              placeholder="Enter family name (e.g., Smartha Family, Madhwa Family)"
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Add Purohith
            </Button>
          </Form.Item>
        </Form>
      </Modal>

      {/* Edit Modal */}
      <Modal
        title="Edit Purohith"
        open={isEditModalOpen}
        onCancel={() => {
          setIsEditModalOpen(false);
          editForm.resetFields();
          setEditingPurohith(null);
        }}
        footer={null}
        width={600}
      >
        <Form
          form={editForm}
          layout="vertical"
          onFinish={handleUpdate}
          className="purohith-form"
        >
          <Form.Item
            name="photo"
            valuePropName="fileList"
            getValueFromEvent={(e) => e.fileList}
            rules={[{ required: false, message: "Please upload a photo" }]}
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
                Click or drag photo to upload (JPG/PNG) - Optional
              </p>
              <p className="ant-upload-hint">
                Only one file allowed. Max size: 2MB recommended. Leave empty to keep current photo.
              </p>
            </Dragger>
          </Form.Item>

          <Form.Item
            name="name"
            rules={[{ required: true, message: "Please enter name" }]}
          >
            <Input placeholder="Enter full name" />
          </Form.Item>

          <Form.Item
            name="serviceLocation"
            rules={[
              {
                required: true,
                message: "Enter at least one service location",
              },
            ]}
          >
            <Select
              mode="tags"
              placeholder="Type service locations and press Enter"
              open={false}
              tokenSeparators={[","]}
            />
          </Form.Item>

          <Form.Item
            name="mobile"
            rules={[{ required: true, message: "Please enter mobile number" }]}
          >
            <Input placeholder="Enter mobile number" />
          </Form.Item>

          <Form.Item
            name="email"
            rules={[
              { type: "email", message: "Please enter a valid email" },
              { required: true, message: "Please enter email" },
            ]}
          >
            <Input placeholder="Enter email address" />
          </Form.Item>

          <Form.Item
            name="tagline"
            rules={[{ required: true, message: "Please enter family information" }]}
          >
            <Input 
              placeholder="Enter family name (e.g., Smartha Family, Madhwa Family)"
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Update Purohith
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default AdminPurohiths;
