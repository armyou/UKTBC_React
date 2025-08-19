// import React from 'react'
import logo from "../../../assets/dummy/abt.png";

const Services = () => {
  const styles: { [key: string]: React.CSSProperties } = {
    page: {
      padding: "5vh 10vw",
      width: "100%",
      // height: "100vh",
      boxSizing: "border-box",
      fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
      backgroundColor: "#fff"
    },
    logo: { width: "100%", height: "auto" },
    heading: {
      fontSize: 28,
      fontWeight: 700,
      margin: "24px 0 12px",
    },
    grid: {
      display: "flex",
      flexWrap: "wrap",
      gap: "20px",
      marginBottom: "32px",
    },
    // 3 per row -> width ~ 33.33% minus gaps
    card: {
      flex: "1 1 calc(33.333% - 20px)",
      maxWidth: "calc(33.333% - 20px)",
      border: "1px solid #e5e7eb",
      borderRadius: "14px",
      padding: "16px",
      boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
      boxSizing: "border-box",
      background: "#fff",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      minHeight: 140,
    },
    name: { fontSize: 18, fontWeight: 600, margin: "0 0 6px" },
    line: { margin: "2px 0", color: "#4b5563", fontSize: 14 },
    btn: {
      marginTop: "12px",
      alignSelf: "flex-start",
      padding: "10px 14px",
      borderRadius: "10px",
      border: "none",
      background: "#111827",
      color: "#fff",
      fontWeight: 600,
      cursor: "pointer",
    },
    contact: { fontWeight: 600, color: "#111827" },
  };

  const purohits = [
    { id: 1, name: "Sri Ramachandra Sharma", location: "Madhapur, Hyderabad" },
    { id: 2, name: "Sri Venkata Subrahmanyam", location: "KPHB, Hyderabad" },
    { id: 3, name: "Sri Anjaneya Chary", location: "Banjara Hills, Hyderabad" },
    { id: 4, name: "Sri Narasimha Sastry", location: "Kukatpally, Hyderabad" },
    { id: 5, name: "Sri Sai Krishna Sharma", location: "Gachibowli, Hyderabad" },
    { id: 6, name: "Sri Sitaram Dikshit", location: "Ameerpet, Hyderabad" },
  ];

  const caterers = [
    { id: 1, name: "Annapurna Caterers", phone: "+91 90000 11111", location: "Madhapur, Hyderabad" },
    { id: 2, name: "Sri Vantillu", phone: "+91 90000 22222", location: "KPHB, Hyderabad" },
    { id: 3, name: "Gruha Bhojanam", phone: "+91 90000 33333", location: "Banjara Hills, Hyderabad" },
    { id: 4, name: "Pelli Vantalu", phone: "+91 90000 44444", location: "Kukatpally, Hyderabad" },
    { id: 5, name: "Naivedyam Foods", phone: "+91 90000 55555", location: "Gachibowli, Hyderabad" },
    { id: 6, name: "Sree Vindu", phone: "+91 90000 66666", location: "Ameerpet, Hyderabad" },
  ];

  return (
    <div style={styles.page}>
      <img src={logo} alt="UKTBC Logo" style={styles.logo} />

      {/* Book Purohits */}
      <p style={styles.heading}>Book Purohits</p>
      <div style={styles.grid}>
        {purohits.map((p) => (
          <div key={p.id} style={styles.card}>
            <div>
              <h4 style={styles.name}>{p.name}</h4>
              <p style={styles.line}>
                <span style={styles.contact}>Location:</span> {p.location}
              </p>
            </div>
            <button style={styles.btn}>Book Now</button>
          </div>
        ))}
      </div>

      {/* Madi Vantalu */}
      <p style={styles.heading}>Book Madi Vantalu</p>
      <div style={styles.grid}>
        {caterers.map((c) => (
          <div key={c.id} style={styles.card}>
            <div>
              <h4 style={styles.name}>{c.name}</h4>
              <p style={styles.line}>
                <span style={styles.contact}>Contact:</span> {c.phone}
              </p>
              <p style={styles.line}>
                <span style={styles.contact}>Location:</span> {c.location}
              </p>
            </div>
            <a href={`tel:${c.phone.replace(/\s+/g, "")}`} style={{ textDecoration: "none" }}>
              <button style={styles.btn}>Call Now</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
