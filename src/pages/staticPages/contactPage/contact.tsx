// import React from 'react'
import logo from "../../../assets/uktbcLogo.png";
import type { CSSProperties } from "react";

const Contact = () => {

  const styles: { [key: string]: CSSProperties } = {
    page: {
      padding: "5vh 10vw 20vh 10vw",
      fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      display: "flex",
      flexDirection: "row-reverse",
      flexWrap: "nowrap",
      justifyContent: "space-evenly",
    },
    logo: { width: "30%", marginBottom: "20px" },
    heading: { fontSize: 28, fontWeight: 700, marginBottom: "20px" },
    form: {
      display: "flex",
      flexDirection: "column",
      maxWidth: 500,
      gap: "15px",
    },
    input: {
      padding: "12px",
      borderRadius: "8px",
      border: "1px solid #d1d5db",
      fontSize: 16,
      backgroundColor: "#fff"
    },
    textarea: {
      padding: "12px",
      borderRadius: "8px",
      border: "1px solid #d1d5db",
      fontSize: 16,
      minHeight: 100,
      resize: "vertical",
      backgroundColor: "#fff"
    },
    button: {
      background: "#111827",
      color: "#fff",
      padding: "12px",
      border: "none",
      borderRadius: "8px",
      fontSize: 16,
      fontWeight: 600,
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.page}>
      <img src={logo} alt="UKTBC Logo" style={styles.logo} />
      <div className="" style={{width: "50%"}}>
        <p style={styles.heading}>Contact Us</p>

        <form style={styles.form} onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Your Name" required style={styles.input} />
          <input type="email" placeholder="Your Email" required style={styles.input} />
          <input type="tel" placeholder="Mobile Number" required style={styles.input} />
          <textarea placeholder="Your Message" required style={styles.textarea}></textarea>
          <button type="submit" style={styles.button}>Submit</button>
      </form>
      </div>
    </div>
  );
};

export default Contact;
