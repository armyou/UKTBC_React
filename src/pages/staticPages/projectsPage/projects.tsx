// import React from 'react'
import logo from "../../../assets/dummy/proj.png";

const Projects = () => {
  const styles = {
    page: {
      padding: "5vh 10vw",
      fontFamily:
        "system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
      backgroundColor: "#fff"
    },
    logo: { width: "100%", marginBottom: "20px" },
    heading: { fontSize: 28, fontWeight: 700, marginBottom: "20px" },
    list: {
      display: "flex",
      flexDirection: "column" as React.CSSProperties["flexDirection"],
      gap: "20px",
      maxWidth: 800,
    },
    projectCard: {
      border: "1px solid #d1d5db",
      borderRadius: "12px",
      padding: "16px",
      background: "#fff",
      boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
    },
    projectName: { fontSize: 18, fontWeight: 600, margin: "0 0 8px" },
    projectDesc: { fontSize: 15, color: "#4b5563", margin: 0 },
  };

  const projects = [
    {
      id: 1,
      name: "Community Development Program",
      description:
        "An initiative to improve local infrastructure, healthcare, and education facilities for underprivileged communities.",
    },
    {
      id: 2,
      name: "Cultural Heritage Preservation",
      description:
        "Focused on preserving traditional temples, rituals, and cultural activities by supporting local artisans and priests.",
    },
    {
      id: 3,
      name: "Youth Skill Development",
      description:
        "Training and mentoring programs to empower youth with vocational skills, digital literacy, and career guidance.",
    },
  ];

  return (
    <div style={styles.page}>
      <img src={logo} alt="UKTBC Logo" style={styles.logo} />
      <p style={styles.heading}>Projects by UKTBC</p>

      <div style={styles.list}>
        {projects.map((p) => (
          <div key={p.id} style={styles.projectCard}>
            <p style={styles.projectName}>{p.name}</p>
            <p style={styles.projectDesc}>{p.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
