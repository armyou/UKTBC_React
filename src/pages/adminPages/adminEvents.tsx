/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import {
  Card,
  Button,
  Input,
  Select,
  List,
  Modal,
  Form,
  Upload,
  InputNumber,
  Space,
  Row,
  Col,
} from "antd";
import {
  UploadOutlined,
  PlusOutlined,
  MinusCircleOutlined,
} from "@ant-design/icons";
import { FaRegCalendarAlt, FaRegClock } from "react-icons/fa";

import banner1 from "../../assets/dummy/events/event1.png";
import banner2 from "../../assets/dummy/events/event2.png";
import banner3 from "../../assets/dummy/events/event3.png";
import "./css/events.css";

const { Search } = Input;
const { Option } = Select;
const { TextArea } = Input;

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  banner: string;
}

const AdminEvents: React.FC = () => {
  const [searchText, setSearchText] = useState("");
  const [sortOption, setSortOption] = useState("upcoming");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  // Sample events data
  const [events, setEvents] = useState<Event[]>([
    {
      id: 1,
      title: "Yoga & Meditation Retreat",
      date: "2025-09-10",
      time: "10:00 AM - 4:00 PM",
      banner: banner1,
    },
    {
      id: 2,
      title: "Cultural Night 2025",
      date: "2025-09-20",
      time: "6:00 PM - 10:00 PM",
      banner: banner2,
    },
    {
      id: 3,
      title: "Art Workshop",
      date: "2025-09-25",
      time: "1:00 PM - 5:00 PM",
      banner: banner3,
    },
  ]);

  // Filter events
  const filteredEvents = events.filter((event) =>
    event.title.toLowerCase().includes(searchText.toLowerCase())
  );

  // Sort events
  const sortedEvents = [...filteredEvents].sort((a, b) => {
    if (sortOption === "upcoming") {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    } else {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
  });

  // Handle form submit
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleFormSubmit = (values: any) => {
    console.log("Event Submitted:", values); // 👉 print values in console
    setIsModalVisible(false);
    form.resetFields();
  };

  return (
    <div className="admin-main">
      <h2 className="dashboard-heading">Manage Events</h2>
      {/* Search + Sort */}
      <div className="events-controls">
        <Search
          placeholder="Search events"
          allowClear
          className="search-bar"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <Select
          className="sort-select"
          value={sortOption}
          onChange={(value) => setSortOption(value)}
          style={{ width: 200 }}
        >
          <Option value="upcoming">Upcoming First</Option>
          <Option value="latest">Latest First</Option>
        </Select>
        <Button
          type="primary"
          className="event-cta"
          onClick={() => setIsModalVisible(true)}
        >
          Add New
        </Button>
      </div>

      {/* Events List */}
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 1,
          md: 2,
          lg: 3,
          xl: 3,
        }}
        dataSource={sortedEvents}
        renderItem={(event) => (
          <List.Item>
            <Card
              cover={<img alt={event.title} src={event.banner} />}
              className="event-card"
            >
              <h3 className="event-title">{event.title}</h3>
              <p className="event-date">
                <FaRegCalendarAlt style={{ marginRight: 6 }} /> {event.date}
              </p>
              <p className="event-date">
                <FaRegClock style={{ marginRight: 6 }} /> {event.time}
              </p>
            </Card>
          </List.Item>
        )}
      />

      {/* Modal Form */}
      <Modal
        title="Add New Event"
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
        maskClosable={false}
      >
        <Form
          layout="vertical"
          form={form}
          onFinish={handleFormSubmit}
          className="eventForm"
        >
          {/* Event Title */}
          <Form.Item
            name="title"
            rules={[{ required: true, message: "Please enter event name" }]}
          >
            <Input placeholder="Event Name" />
          </Form.Item>

          {/* Date, Time, Banner in a row */}
          <Row gutter={8}>
            <Col span={8}>
              <Form.Item
                name="date"
                rules={[{ required: true, message: "Please enter date" }]}
              >
                <Input type="date" placeholder="Date" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                name="time"
                rules={[{ required: true, message: "Please enter time" }]}
              >
                <Input placeholder="Time" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item name="banner">
                <Upload beforeUpload={() => false} maxCount={1}>
                  <Button icon={<UploadOutlined />}>Banner</Button>
                </Upload>
              </Form.Item>
            </Col>
          </Row>

          {/* Event Description */}
          <Form.Item name="description">
            <TextArea rows={3} placeholder="Event Description" />
          </Form.Item>

          {/* Booking Info */}
          <h4>Booking Info</h4>
          <Row gutter={8}>
            <Col span={12}>
              <Form.Item name="ticketPrice">
                <InputNumber
                  min={0}
                  style={{ width: "100%" }}
                  placeholder="Ticket Price (£)"
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="availableSeats">
                <InputNumber
                  min={0}
                  style={{ width: "100%" }}
                  placeholder="Available Seats"
                />
              </Form.Item>
            </Col>
          </Row>

          {/* Pre-requisites */}
          <h4>Pre-requisites</h4>
          <Form.List name="prerequisites">
            {(fields, { add, remove }) => (
              <div>
                {fields.map((field) => (
                  <Space
                    key={field.key}
                    style={{ display: "flex", marginBottom: 8 }}
                    align="baseline"
                  >
                    <Form.Item
                      {...field}
                      name={[field.name]}
                      rules={[
                        { required: true, message: "Please enter a point" },
                      ]}
                    >
                      <Input placeholder="Enter a point" />
                    </Form.Item>
                    <MinusCircleOutlined onClick={() => remove(field.name)} />
                  </Space>
                ))}
                <Button
                  type="dashed"
                  onClick={() => add()}
                  block
                  icon={<PlusOutlined />}
                >
                  Add Point
                </Button>
              </div>
            )}
          </Form.List>

          {/* Submit */}
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              block
              className="form-submit"
            >
              Create Event
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default AdminEvents;
