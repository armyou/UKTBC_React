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
  InboxOutlined,
} from "@ant-design/icons";
import project1 from "../../assets/dummy/projects/project1.png";
import project2 from "../../assets/dummy/projects/project2.png";
import project3 from "../../assets/dummy/projects/project3.png";
import "./css/projects.css";
import { useNavigate } from "react-router-dom";

const { Search } = Input;
const { Option } = Select;
const { TextArea } = Input;
const { Step } = Steps;

interface Project {
  id: number;
  title: string;
  tagline: string;
  banner: string;
  description?: string;
  vision?: string;
  impact?: string[];
  type?: "standalone" | "children"; // project category
  highlights?: string[]; // for standalone projects
  events?: {
    title: string;
    date: string;
    time?: string;
    description?: string;
  }[]; // for children projects
}

const AdminProjects: React.FC = () => {
  const [searchText, setSearchText] = useState("");
  const [sortOption, setSortOption] = useState("latest");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [form] = Form.useForm();

  const navigate = useNavigate();

  // Sample projects
  const [projects, setProjects] = useState<Project[]>([
    {
      id: 1,
      title: "Project Suprabhatham",
      tagline: "Preserving dharma and cultural heritage",
      banner: project1,
      description:
        "An initiative to preserve and promote dharma through cultural activities, literature, and community programs.",
      vision:
        "To create a sustainable movement that safeguards cultural heritage for future generations.",
      impact: [
        "Organized 50+ cultural awareness programs",
        "Reached over 10,000 people in rural communities",
        "Published educational material on heritage preservation",
      ],
      type: "standalone",
      highlights: [
        "Annual Dharma Conference",
        "Partnership with local schools",
        "Digital archive of scriptures",
      ],
    },
    {
      id: 2,
      title: "Community Centre Development",
      tagline: "Creating spaces for growth & learning",
      banner: project2,
      description:
        "A community-driven project to build centres that provide education, training, and wellness activities.",
      vision:
        "To empower local communities with accessible spaces for learning and social interaction.",
      impact: [
        "Built 3 community centres in rural districts",
        "Conducted 200+ training sessions",
        "Improved access to resources for 5,000+ individuals",
      ],
      type: "children",
      events: [
        {
          title: "Inauguration Ceremony",
          date: "2025-01-15",
          time: "10:00 AM",
          description: "Official opening of the first community centre.",
        },
        {
          title: "Health & Wellness Camp",
          date: "2025-03-20",
          time: "09:00 AM",
          description:
            "Free health check-ups and wellness sessions for the local community.",
        },
      ],
    },
    {
      id: 3,
      title: "Youth Empowerment",
      tagline: "Building leaders of tomorrow",
      banner: project3,
      description:
        "Focused on training and mentoring youth to become responsible leaders and innovators.",
      vision:
        "To nurture young minds with skills, knowledge, and confidence to drive positive change.",
      impact: [
        "Trained 2,000+ youth in leadership programs",
        "Launched 15 youth-led startups",
        "Created mentorship network with 50+ professionals",
      ],
      type: "standalone",
      highlights: [
        "Youth Leadership Bootcamp",
        "Entrepreneurship Incubation Program",
        "Annual Youth Summit",
      ],
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
    setProjects([...projects, newProject]);
    console.log(newProject);
    setCurrentStep(0);
    form.resetFields();
    setIsModalVisible(false);
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
              onClick={() =>
                navigate(`/admin/project/${project.id}`, { state: { project } })
              }
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
        className="project-modal"
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
              <Form.Item
                name="title"
                // style={{ flex: 1 }}
                rules={[{ required: true, message: "Enter project title" }]}
              >
                <Input placeholder="Project Title" />
              </Form.Item>
              <Upload.Dragger
                name="banner"
                listType="picture"
                maxCount={1}
                beforeUpload={() => false} // prevents auto upload
                style={{ marginBottom: "1.5vh" }}
              >
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">
                  Click or drag banner to upload
                </p>
                <p className="ant-upload-hint">PNG / JPG only, max 2MB</p>
              </Upload.Dragger>
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
                        <div className="programmes-section">
                          <h4 className="programmes-heading">Programmes</h4>
                          {fields.map((field) => (
                            <div key={field.key} className="programme-card">
                              {/* Title */}
                              <Form.Item
                                {...field}
                                name={[field.name, "title"]}
                                rules={[
                                  {
                                    required: true,
                                    message: "Enter programme title",
                                  },
                                ]}
                              >
                                <Input placeholder="Programme Title" />
                              </Form.Item>

                              <Form.Item
                                {...field}
                                name={[field.name, "banner"]}
                                valuePropName="fileList"
                                getValueFromEvent={(e) =>
                                  Array.isArray(e) ? e : e?.fileList
                                }
                                rules={[
                                  {
                                    required: true,
                                    message: "Please upload a banner",
                                  },
                                ]}
                              >
                                <Upload.Dragger
                                  name="files"
                                  listType="picture"
                                  maxCount={1}
                                  beforeUpload={() => false} // prevents auto upload
                                >
                                  <p className="ant-upload-drag-icon">
                                    <InboxOutlined />
                                  </p>
                                  <p className="ant-upload-text">
                                    Click or drag banner to upload
                                  </p>
                                  <p className="ant-upload-hint">
                                    PNG / JPG only, max 2MB
                                  </p>
                                </Upload.Dragger>
                              </Form.Item>

                              {/* Duration */}
                              <Form.Item
                                {...field}
                                name={[field.name, "duration"]}
                                rules={[
                                  { required: true, message: "Enter duration" },
                                ]}
                              >
                                <Input placeholder="Duration (e.g., 2 hours, 3 days)" />
                              </Form.Item>

                              {/* Who can participate */}
                              <Form.Item
                                {...field}
                                name={[field.name, "participants"]}
                                rules={[
                                  {
                                    required: true,
                                    message: "Select participant type",
                                  },
                                ]}
                              >
                                <Select placeholder="Who can participate">
                                  <Option value="all">
                                    Open to all devotees
                                  </Option>
                                  <Option value="youth">Youth Only</Option>
                                  <Option value="women">Women Only</Option>
                                  <Option value="members">
                                    Registered Members Only
                                  </Option>
                                </Select>
                              </Form.Item>

                              {/* Offerings */}
                              <Form.List name={[field.name, "offerings"]}>
                                {(
                                  offerFields,
                                  { add: addOffer, remove: removeOffer }
                                ) => (
                                  <div className="offerings-list">
                                    <h5>Offerings</h5>
                                    {offerFields.map((offerField) => (
                                      <Space
                                        key={offerField.key}
                                        style={{
                                          display: "flex",
                                          marginBottom: 8,
                                        }}
                                        align="baseline"
                                      >
                                        <Form.Item
                                          {...offerField}
                                          name={[offerField.name]}
                                          rules={[
                                            {
                                              required: true,
                                              message: "Enter offering",
                                            },
                                          ]}
                                        >
                                          <Input placeholder="Offering (e.g., Flowers, Fruits)" />
                                        </Form.Item>
                                        <MinusCircleOutlined
                                          onClick={() =>
                                            removeOffer(offerField.name)
                                          }
                                        />
                                      </Space>
                                    ))}
                                    <Button
                                      type="dashed"
                                      onClick={() => addOffer()}
                                      icon={<PlusOutlined />}
                                      block
                                    >
                                      Add Offering
                                    </Button>
                                  </div>
                                )}
                              </Form.List>

                              {/* Occasions */}
                              <Form.Item
                                {...field}
                                name={[field.name, "occasions"]}
                                rules={[
                                  {
                                    required: true,
                                    message: "Enter occasions",
                                  },
                                ]}
                              >
                                <TextArea
                                  rows={2}
                                  placeholder="Occasions (e.g., Annual Festival, Navratri)"
                                />
                              </Form.Item>

                              {/* Short Description */}
                              <Form.Item
                                {...field}
                                name={[field.name, "shortDescription"]}
                              >
                                <TextArea
                                  rows={3}
                                  placeholder="Short Description"
                                />
                              </Form.Item>

                              <Button
                                danger
                                type="link"
                                onClick={() => remove(field.name)}
                              >
                                Remove Programme
                              </Button>
                            </div>
                          ))}
                          <Button
                            type="dashed"
                            onClick={() => add()}
                            block
                            icon={<PlusOutlined />}
                            className="add-programme-btn"
                          >
                            Add Programme
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
