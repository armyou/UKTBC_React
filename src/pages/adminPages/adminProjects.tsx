import React, { useState } from "react";
import { Card, Button, Input, Select, List } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import project1 from "../../assets/dummy/projects/project1.png";
import project2 from "../../assets/dummy/projects/project2.png";
import project3 from "../../assets/dummy/projects/project3.png";
import "./css/projects.css";

const { Search } = Input;
const { Option } = Select;

interface Project {
  id: number;
  title: string;
  tagline: string;
  banner: string;
}

const AdminProjects: React.FC = () => {
  const [searchText, setSearchText] = useState("");
  const [sortOption, setSortOption] = useState("latest");

  // Sample projects data
  const projects: Project[] = [
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
  ];

  // Filter projects
  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchText.toLowerCase())
  );

  // Sort projects
  const sortedProjects = [...filteredProjects].sort((a, b) => {
    if (sortOption === "latest") {
      return b.id - a.id; // newest first
    } else {
      return a.id - b.id; // oldest first
    }
  });

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
        <Button type="primary" className="project-cta" icon={<PlusOutlined />}>
          Add New
        </Button>
      </div>

      {/* Projects List */}
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 1,
          md: 2,
          lg: 3,
          xl: 3,
        }}
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
    </div>
  );
};

export default AdminProjects;
