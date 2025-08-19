// import React from 'react'
import logo from "../../../assets/dummy/charityEvent.png";

const Events = () => {
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
      flexDirection: "column",
      gap: "20px",
      maxWidth: 800,
    },
    eventCard: {
      border: "1px solid #d1d5db",
      borderRadius: "12px",
      padding: "16px",
      background: "#fff",
      boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
    },
    eventName: { fontSize: 18, fontWeight: 600, margin: "0 0 8px" },
    eventDesc: { fontSize: 15, color: "#4b5563", margin: "0 0 12px" },
    eventMeta: { fontSize: 14, color: "#374151", margin: "2px 0" },
  };

  const events = [
    {
      id: 1,
      name: "Annual Cultural Festival",
      description:
        "A vibrant celebration of Indian traditions, music, dance, and food with community participation.",
      date: "October 15, 2025",
      time: "5:00 PM – 10:00 PM",
      location: "UKTBC Community Hall, Hyderabad",
    },
    {
      id: 2,
      name: "Health Awareness Camp",
      description:
        "Free health checkups, wellness workshops, and awareness sessions conducted by medical professionals.",
      date: "November 3, 2025",
      time: "9:00 AM – 3:00 PM",
      location: "Township Park Grounds, Secunderabad",
    },
    {
      id: 3,
      name: "Youth Leadership Workshop",
      description:
        "Interactive sessions on leadership, communication, and skill development for young community members.",
      date: "December 12, 2025",
      time: "10:00 AM – 4:00 PM",
      location: "UKTBC Training Center, Hyderabad",
    },
  ];

  return (
    <div style={styles.page}>
      <img src={logo} alt="UKTBC Logo" style={styles.logo} />
      <p style={styles.heading}>Events by UKTBC</p>

      <div style={styles.list as React.CSSProperties}>
        {events.map((e) => (
          <div key={e.id} style={styles.eventCard}>
            <p style={styles.eventName}>{e.name}</p>
            <p style={styles.eventDesc}>{e.description}</p>
            <p style={styles.eventMeta}>
              <strong>Date:</strong> {e.date}
            </p>
            <p style={styles.eventMeta}>
              <strong>Time:</strong> {e.time}
            </p>
            <p style={styles.eventMeta}>
              <strong>Location:</strong> {e.location}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
