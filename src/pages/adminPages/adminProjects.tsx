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
  Steps,
  Space,
} from "antd";
import {
  PlusOutlined,
  MinusCircleOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import project1 from "../../assets/dummy/projects/project1.png";
import project2 from "../../assets/dummy/projects/project2.png";
import project3 from "../../assets/dummy/projects/project3.png";
import "./css/projects.css";

const { Search } = Input;
const { Option } = Select;
const { TextArea } = Input;
const { Step } = Steps;

interface Project {
  id: number;
  title: string;
  tagline: string;
  banner: string;
}

const AdminProjects: React.FC = () => {
  const [searchText, setSearchText] = useState("");
  const [sortOption, setSortOption] = useState("latest");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [form] = Form.useForm();

  // Sample projects
  const [projects, setProjects] = useState<Project[]>([
    {
      id: 1,
      title: "Project Suprabhatham",
      tagline: "Preserving dharma and cultural heritage",
      banner: project1,
    },
    {
      id: 2,
      title: "Community Centre Development",
      tagline: "Creating spaces for growth & learning",
      banner: project2,
    },
    {
      id: 3,
      title: "Youth Empowerment",
      tagline: "Building leaders of tomorrow",
      banner: project3,
    },
  ]);

  // Filter & sort
  const filteredProjects = projects.filter((p) =>
    p.title.toLowerCase().includes(searchText.toLowerCase())
  );
  const sortedProjects = [...filteredProjects].sort((a, b) =>
    sortOption === "latest" ? b.id - a.id : a.id - b.id
  );

  // Submit
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleFinish = (values: any) => {
    console.log("Project Data:", values);
    const newProject: Project = {
      id: projects.length + 1,
      title: values.title,
      tagline: values.tagline,
      banner: values.banner?.file?.name || project1,
    };
    // setProjects([...projects, newProject]);
    console.log(newProject);
    setCurrentStep(0);
    form.resetFields();
    setIsModalVisible(false);
  };

  const next = () => setCurrentStep(currentStep + 1);
  const prev = () => setCurrentStep(currentStep - 1);

  return (
    <div className="admin-main">
      <h2 className="dashboard-heading">Manage Projects</h2>

      {/* Controls */}
      <div className="projects-controls">
        <Search
          placeholder="Search projects"
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
          <Option value="latest">Latest First</Option>
          <Option value="oldest">Oldest First</Option>
        </Select>
        <Button
          type="primary"
          className="project-cta"
          icon={<PlusOutlined />}
          onClick={() => setIsModalVisible(true)}
        >
          Add New
        </Button>
      </div>

      {/* Projects List */}
      <List
        grid={{ gutter: 16, xs: 1, sm: 1, md: 2, lg: 3, xl: 3 }}
        dataSource={sortedProjects}
        renderItem={(project) => (
          <List.Item>
            <Card
              cover={<img alt={project.title} src={project.banner} />}
              className="project-card"
            >
              <h3 className="project-title">{project.title}</h3>
              <p className="project-tagline">{project.tagline}</p>
            </Card>
          </List.Item>
        )}
      />

      {/* Modal with Steps */}
      <Modal
        title="Add New Project"
        open={isModalVisible}
        onCancel={() => {
          setIsModalVisible(false);
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

        <Form form={form} layout="vertical" onFinish={handleFinish}>
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
                      className="add-button"
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
                Add Project
              </Button>
            )}
          </div>
        </Form>
      </Modal>
    </div>
  );
};

export default AdminProjects;
