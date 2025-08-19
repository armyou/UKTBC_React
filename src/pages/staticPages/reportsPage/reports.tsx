// import React from 'react'
// import logo from "../../../assets/uktbcLogo.png";
import { EyeOutlined, DownloadOutlined } from "@ant-design/icons";

const Reports = () => {
  const styles = {
    page: {
      padding: "5vh 10vw 30vh 10vw",
      fontFamily:
        "system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
    },
    // logo: { width: 100, marginBottom: "20px" },
    heading: { fontSize: 28, fontWeight: 700, marginBottom: "20px" },
    list: {
      display: "flex",
      flexDirection: "column",
      gap: "15px",
      maxWidth: 700,
    },
    row: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "12px 16px",
      border: "1px solid #d1d5db",
      borderRadius: "10px",
      background: "#fff",
      boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
    },
    reportName: { fontSize: 16, fontWeight: 500, margin: 0 },
    btnGroup: { display: "flex", gap: "10px" },
    button: {
      padding: "8px 12px",
      borderRadius: "8px",
      border: "none",
      background: "#111827",
      color: "#fff",
      fontSize: 18,
      cursor: "pointer",
      textDecoration: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  };

  const reports = [
    { id: 1, name: "Annual Report 2024", link: "/files/annual-report-2024.pdf" },
    { id: 2, name: "Financial Summary Q1", link: "/files/financial-q1.pdf" },
    { id: 3, name: "Event Highlights", link: "/files/event-highlights.pdf" },
    { id: 4, name: "Membership Report", link: "/files/membership-report.pdf" },
  ];

  return (
    <div style={styles.page}>
      {/* <img src={logo} alt="UKTBC Logo" style={styles.logo} /> */}
      <p style={styles.heading}>Reports of UKTBC</p>

      <div style={styles.list as React.CSSProperties}>
        {reports.map((r) => (
          <div key={r.id} style={styles.row}>
            <p style={styles.reportName}>{r.name}</p>
            <div style={styles.btnGroup}>
              {/* View button */}
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                style={styles.button}
              >
                <EyeOutlined />
              </a>
              {/* Download button */}
              <a href="" download style={styles.button}>
                <DownloadOutlined />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reports;