import React, { useState } from "react";
import { Card, Button, Input, Select, List } from "antd";
import banner1 from "../../assets/dummy/events/event1.png";
import banner2 from "../../assets/dummy/events/event2.png";
import banner3 from "../../assets/dummy/events/event3.png";
import "./css/events.css";
import { FaRegCalendarAlt, FaRegClock } from "react-icons/fa";

const { Search } = Input;
const { Option } = Select;

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

  // Sample events data
  const events: Event[] = [
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
  ];

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
        <Button type="primary" className="event-cta">
          Add New
        </Button>
      </div>

      {/* Events List */}
      <List
        grid={{
          gutter: 16,
          xs: 1, // 1 column on extra small screens (mobile)
          sm: 1, // 1 column on small screens
          md: 2, // 2 columns on medium screens (tablet)
          lg: 3, // 3 columns on large screens
          xl: 3, // 3 columns on desktops
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
    </div>
  );
};

export default AdminEvents;
