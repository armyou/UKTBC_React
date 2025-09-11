/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLocation } from "react-router-dom";
import {
  Card,
  Typography,
  Divider,
  List,
  Button,
  Space,
  Popconfirm,
  message,
  Modal,
  Steps,
  Form,
  Input,
  Select,
  Upload,
} from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  UploadOutlined,
  MinusCircleOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import "./css/projectDetails.css";
import { Option } from "antd/es/mentions";
import TextArea from "antd/es/input/TextArea";

const { Title, Paragraph } = Typography;
const { Step } = Steps;

const AdminProjectDetails: React.FC = () => {
  const location = useLocation();
  const project = location.state?.project;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [form] = Form.useForm();

  if (!project) {
    return (
      <div className="project-content">
        <Title level={3}>No project data found</Title>
      </div>
    );
  }

  // Handlers
  const handleEdit = () => {
    form.setFieldsValue(project); // preload form with project data
    setIsModalOpen(true);
  };

  const handleDelete = () => {
    message.success(`Project "${project.title}" deleted successfully`);
    // navigate("/admin/projects");
  };

  const handleSave = () => {
    form.validateFields().then((values) => {
      console.log("Updated project:", values);
      message.success("Project updated successfully");
      setIsModalOpen(false);
    });
  };

  const next = async () => {
    try {
      if (currentStep === 0) {
        // validate step 1 fields
        await form.validateFields(["title", "tagline"]);
      } else if (currentStep === 1) {
        // validate step 2 fields
        await form.validateFields(["impact", "type"]);
      } else if (currentStep === 2) {
        // step 3 handled on submit
      }

      setCurrentStep(currentStep + 1);
    } catch (err) {
      console.log("Validation failed:", err);
      // stays on same step if validation fails
    }
  };

  const prev = () => setCurrentStep(currentStep - 1);

  return (
    <div className="project-content">
      <Card
        className="project-detail-card"
        cover={
          <img
            alt={project.title}
            src={project.banner}
            className="project-banner"
          />
        }
      >
        {/* Header */}
        <div className="project-header">
          <Title level={2} className="project-detail-title">
            {project.title}
          </Title>
          <Space>
            <Button
              type="primary"
              className="project-edit-btn"
              icon={<EditOutlined />}
              onClick={handleEdit}
            >
              Edit
            </Button>
            <Popconfirm
              title="Are you sure you want to delete this project?"
              onConfirm={handleDelete}
              okText="Yes"
              cancelText="No"
            >
              <Button
                className="project-delete-btn"
                danger
                icon={<DeleteOutlined />}
              >
                Delete
              </Button>
            </Popconfirm>
          </Space>
        </div>

        <Paragraph type="secondary" className="project-detail-tagline">
          {project.tagline}
        </Paragraph>

        <Divider />

        {/* Description */}
        {project.description && (
          <>
            <Title level={4}>Description</Title>
            <Paragraph>{project.description}</Paragraph>
            <Divider />
          </>
        )}

        {/* Vision */}
        {project.vision && (
          <>
            <Title level={4}>Vision</Title>
            <Paragraph>{project.vision}</Paragraph>
            <Divider />
          </>
        )}

        {/* Impacts */}
        {project.impact?.length > 0 && (
          <>
            <Title level={4}>Impacts</Title>
            <List
              dataSource={project.impact}
              renderItem={(item: string) => <List.Item>✅ {item}</List.Item>}
            />
            <Divider />
          </>
        )}

        {/* Highlights */}
        {project.type === "standalone" &&
          project.highlights &&
          project.highlights.length > 0 && (
            <>
              <Title level={4}>Highlights</Title>
              <List
                dataSource={project.highlights}
                renderItem={(item: string) => <List.Item>⭐ {item}</List.Item>}
              />
              <Divider />
            </>
          )}

        {/* Events */}
        {project.type === "children" &&
          project.events &&
          project.events.length > 0 && (
            <>
              <Title level={4}>Programmes</Title>
              <List
                itemLayout="vertical"
                dataSource={project.events}
                renderItem={(event: any) => (
                  <List.Item key={event.title}>
                    <Title level={5}>{event.title}</Title>
                    <Paragraph type="secondary">
                      {event.date} {event.time && `at ${event.time}`}
                    </Paragraph>
                    <Paragraph>{event.description}</Paragraph>
                  </List.Item>
                )}
              />
            </>
          )}
      </Card>

      {/* Edit Modal with Stepper Form */}
      <Modal
        title="Edit Project"
        open={isModalOpen}
        onCancel={() => {
          setIsModalOpen(false);
          setCurrentStep(0);
          form.resetFields();
        }}
        footer={null}
        maskClosable={false}
        width={700}
      >
        <Steps current={currentStep} style={{ marginBottom: 24 }}>
          <Step title="Basic Info" />
          <Step title="Impact & Type" />
          <Step title="Details" />
        </Steps>

        <Form form={form} layout="vertical" onFinish={handleSave}>
          {/* Step 1 */}
          {currentStep === 0 && (
            <>
              <Space style={{ display: "flex", width: "100%" }}>
                <Form.Item
                  name="title"
                  style={{ flex: 1 }}
                  rules={[{ required: true, message: "Enter project title" }]}
                >
                  <Input placeholder="Project Title" />
                </Form.Item>
                <Form.Item name="banner" style={{ flex: 1 }}>
                  <Upload beforeUpload={() => false} maxCount={1}>
                    <Button icon={<UploadOutlined />}>Upload Banner</Button>
                  </Upload>
                </Form.Item>
              </Space>
              <Form.Item
                name="tagline"
                rules={[{ required: true, message: "Enter tagline" }]}
              >
                <Input placeholder="Tagline" />
              </Form.Item>
              <Form.Item name="description">
                <TextArea rows={3} placeholder="Project Description" />
              </Form.Item>
              <Form.Item name="vision">
                <TextArea rows={2} placeholder="Vision" />
              </Form.Item>
            </>
          )}

          {/* Step 2 */}
          {currentStep === 1 && (
            <>
              <Form.List name="impact">
                {(fields, { add, remove }) => (
                  <div>
                    <h4>Impact Points</h4>
                    {fields.map((field) => (
                      <Space
                        key={field.key}
                        style={{ display: "flex", marginBottom: 8 }}
                        align="baseline"
                      >
                        <Form.Item {...field} name={[field.name]}>
                          <Input placeholder="Impact Point" />
                        </Form.Item>
                        <MinusCircleOutlined
                          onClick={() => remove(field.name)}
                        />
                      </Space>
                    ))}
                    <Button
                      type="dashed"
                      onClick={() => add()}
                      block
                      icon={<PlusOutlined />}
                    >
                      Add Impact
                    </Button>
                  </div>
                )}
              </Form.List>

              <Form.Item
                name="type"
                rules={[{ required: true, message: "Select project type" }]}
              >
                <Select placeholder="Select Project Type">
                  <Option value="standalone">Standalone</Option>
                  <Option value="children">Children</Option>
                </Select>
              </Form.Item>
            </>
          )}

          {/* Step 3 */}
          {currentStep === 2 && (
            <>
              {/* Standalone */}
              <Form.Item noStyle shouldUpdate>
                {({ getFieldValue }) =>
                  getFieldValue("type") === "standalone" ? (
                    <Form.List name="highlights">
                      {(fields, { add, remove }) => (
                        <div>
                          <h4>Highlights</h4>
                          {fields.map((field) => (
                            <Space
                              key={field.key}
                              style={{ display: "flex", marginBottom: 8 }}
                              align="baseline"
                            >
                              <Form.Item {...field} name={[field.name]}>
                                <Input placeholder="Highlight Point" />
                              </Form.Item>
                              <MinusCircleOutlined
                                onClick={() => remove(field.name)}
                              />
                            </Space>
                          ))}
                          <Button
                            type="dashed"
                            onClick={() => add()}
                            block
                            icon={<PlusOutlined />}
                          >
                            Add Highlight
                          </Button>
                        </div>
                      )}
                    </Form.List>
                  ) : null
                }
              </Form.Item>

              {/* Children */}
              <Form.Item noStyle shouldUpdate>
                {({ getFieldValue }) =>
                  getFieldValue("type") === "children" ? (
                    <Form.List name="events">
                      {(fields, { add, remove }) => (
                        <div>
                          <h4>Events</h4>
                          {fields.map((field) => (
                            <div
                              key={field.key}
                              style={{
                                border: "1px solid #f0f0f0",
                                padding: 12,
                                marginBottom: 12,
                                borderRadius: 8,
                              }}
                            >
                              <Form.Item
                                {...field}
                                name={[field.name, "title"]}
                                rules={[{ required: true }]}
                              >
                                <Input placeholder="Event Title" />
                              </Form.Item>
                              <Form.Item {...field} name={[field.name, "date"]}>
                                <Input type="date" placeholder="Event Date" />
                              </Form.Item>
                              <Form.Item {...field} name={[field.name, "time"]}>
                                <Input placeholder="Event Time" />
                              </Form.Item>
                              <Form.Item
                                {...field}
                                name={[field.name, "description"]}
                              >
                                <TextArea
                                  rows={2}
                                  placeholder="Event Description"
                                />
                              </Form.Item>
                              <Button
                                danger
                                type="link"
                                onClick={() => remove(field.name)}
                              >
                                Remove Event
                              </Button>
                            </div>
                          ))}
                          <Button
                            type="dashed"
                            onClick={() => add()}
                            block
                            icon={<PlusOutlined />}
                          >
                            Add Event
                          </Button>
                        </div>
                      )}
                    </Form.List>
                  ) : null
                }
              </Form.Item>
            </>
          )}

          {/* Footer Actions */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 20,
            }}
          >
            {currentStep > 0 && (
              <Button onClick={prev} style={{ marginRight: 8 }}>
                Previous
              </Button>
            )}
            {currentStep < 2 && (
              <Button type="primary" onClick={next}>
                Next
              </Button>
            )}
            {currentStep === 2 && (
              <Button type="primary" htmlType="submit">
                Update Project
              </Button>
            )}
          </div>
        </Form>
      </Modal>
    </div>
  );
};

export default AdminProjectDetails;
