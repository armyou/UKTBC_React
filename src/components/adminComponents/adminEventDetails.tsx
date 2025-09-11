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
  DatePicker,
  TimePicker,
  InputNumber,
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
import TextArea from "antd/es/input/TextArea";
import "./css/eventDetails.css";

const { Title, Paragraph } = Typography;
const { Step } = Steps;

const AdminEventDetails: React.FC = () => {
  const location = useLocation();
  const event = location.state?.event;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [form] = Form.useForm();

  if (!event) {
    return (
      <div className="event-content">
        <Title level={3}>No event data found</Title>
      </div>
    );
  }

  // Handlers
  const handleEdit = () => {
    form.setFieldsValue(event);
    setIsModalOpen(true);
  };

  const handleDelete = () => {
    message.success(`Event "${event.title}" deleted successfully`);
    // navigate("/admin/events");
  };

  const handleSave = () => {
    form.validateFields().then((values) => {
      console.log("Updated event:", values);
      message.success("Event updated successfully");
      setIsModalOpen(false);
    });
  };

  const next = async () => {
    try {
      if (currentStep === 0) {
        await form.validateFields(["title", "date", "time"]);
      }
      setCurrentStep(currentStep + 1);
    } catch (err) {
      console.log("Validation failed:", err);
    }
  };

  const prev = () => setCurrentStep(currentStep - 1);

  return (
    <div className="event-content">
      <Card
        className="event-detail-card"
        cover={
          <img alt={event.title} src={event.banner} className="event-banner" />
        }
      >
        {/* Header */}
        <div className="event-header">
          <Title level={2} className="event-detail-title">
            {event.title}
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

        <Paragraph type="secondary">
          📅 {event.date} ⏰ {event.time}
        </Paragraph>

        <Divider />

        {/* Description */}
        {event.description && (
          <>
            <Title level={4}>Description</Title>
            <Paragraph>{event.description}</Paragraph>
            <Divider />
          </>
        )}

        {/* Booking Info */}
        {(event.ticketPrice || event.availableSeats) && (
          <>
            <Title level={4}>Booking Info</Title>
            <Paragraph>
              {event.ticketPrice && (
                <>
                  💷 Ticket Price: £{event.ticketPrice}
                  <br />
                </>
              )}
              {event.availableSeats && (
                <>🎟 Available Seats: {event.availableSeats}</>
              )}
            </Paragraph>
            <Divider />
          </>
        )}

        {/* Pre-requisites */}
        {event.prerequisites?.length > 0 && (
          <>
            <Title level={4}>Pre-requisites</Title>
            <List
              dataSource={event.prerequisites}
              renderItem={(item: string) => <List.Item>🔹 {item}</List.Item>}
            />
            <Divider />
          </>
        )}

        {/* Registration Links */}
        {event.registration?.length > 0 && (
          <>
            <Title level={4}>Registration</Title>
            <List
              dataSource={event.registration}
              renderItem={(link: string) => (
                <List.Item>
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    {link}
                  </a>
                </List.Item>
              )}
            />
          </>
        )}
      </Card>

      {/* Edit Modal with Stepper Form */}
      <Modal
        title="Edit Event"
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
          <Step title="Details" />
        </Steps>

        <Form form={form} layout="vertical" onFinish={handleSave}>
          {/* Step 1 */}
          {currentStep === 0 && (
            <>
              <Form.Item
                name="title"
                rules={[{ required: true, message: "Enter event title" }]}
              >
                <Input placeholder="Event Title" />
              </Form.Item>
              <Form.Item name="banner">
                <Upload beforeUpload={() => false} maxCount={1}>
                  <Button icon={<UploadOutlined />}>Upload Banner</Button>
                </Upload>
              </Form.Item>
              <Form.Item
                name="date"
                rules={[{ required: true, message: "Select date" }]}
              >
                <DatePicker style={{ width: "100%" }} />
              </Form.Item>
              <Form.Item
                name="time"
                rules={[{ required: true, message: "Select time" }]}
              >
                <TimePicker style={{ width: "100%" }} format="HH:mm" />
              </Form.Item>
              <Form.Item name="description">
                <TextArea rows={3} placeholder="Event Description" />
              </Form.Item>
            </>
          )}

          {/* Step 2 */}
          {currentStep === 1 && (
            <>
              <Form.Item name="ticketPrice">
                <InputNumber
                  style={{ width: "100%" }}
                  placeholder="Ticket Price (£)"
                />
              </Form.Item>
              <Form.Item name="availableSeats">
                <InputNumber
                  style={{ width: "100%" }}
                  placeholder="Tickets Available"
                />
              </Form.Item>

              <Form.List name="prerequisites">
                {(fields, { add, remove }) => (
                  <div>
                    <h4>Pre-requisites</h4>
                    {fields.map((field) => (
                      <Space
                        key={field.key}
                        style={{ display: "flex", marginBottom: 8 }}
                        align="baseline"
                      >
                        <Form.Item {...field} name={[field.name]}>
                          <Input placeholder="Enter a point" />
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
                      Add Pre-requisite
                    </Button>
                  </div>
                )}
              </Form.List>

              <Form.List name="registration">
                {(fields, { add, remove }) => (
                  <div>
                    <h4>Registration Links</h4>
                    {fields.map((field) => (
                      <Space
                        key={field.key}
                        style={{ display: "flex", marginBottom: 8 }}
                        align="baseline"
                      >
                        <Form.Item {...field} name={[field.name]}>
                          <Input placeholder="Registration URL" />
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
                      Add Link
                    </Button>
                  </div>
                )}
              </Form.List>
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
            {currentStep < 1 && (
              <Button type="primary" onClick={next}>
                Next
              </Button>
            )}
            {currentStep === 1 && (
              <Button type="primary" htmlType="submit">
                Update Event
              </Button>
            )}
          </div>
        </Form>
      </Modal>
    </div>
  );
};

export default AdminEventDetails;
