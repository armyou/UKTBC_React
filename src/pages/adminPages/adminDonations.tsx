import React, { useState } from "react";
import {
  Table,
  Tag,
  Button,
  Modal,
  Descriptions,
  Input,
  Card,
  Row,
  Col,
  Grid,
} from "antd";
import "./css/donation.css";
import { FaDownload, FaEye } from "react-icons/fa";

const { Search } = Input;
const { useBreakpoint } = Grid;

interface Donation {
  id: number;
  donor: string;
  amount: number;
  date: string;
  status: "Completed" | "Pending" | "Failed";
}

const AdminDonations: React.FC = () => {
  const [selectedDonation, setSelectedDonation] = useState<Donation | null>(
    null
  );
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [searchText, setSearchText] = useState("");
  const screens = useBreakpoint();

  // Sample donation data
  const donations: Donation[] = [
    {
      id: 1,
      donor: "John Doe",
      amount: 200,
      date: "18 Aug 2025",
      status: "Completed",
    },
    {
      id: 2,
      donor: "Jane Smith",
      amount: 150,
      date: "17 Aug 2025",
      status: "Pending",
    },
    {
      id: 3,
      donor: "Mike Lee",
      amount: 500,
      date: "15 Aug 2025",
      status: "Failed",
    },
    {
      id: 4,
      donor: "Sarah Green",
      amount: 300,
      date: "12 Aug 2025",
      status: "Completed",
    },
    {
      id: 5,
      donor: "Tom Wilson",
      amount: 120,
      date: "11 Aug 2025",
      status: "Completed",
    },
    {
      id: 6,
      donor: "Emma Brown",
      amount: 250,
      date: "10 Aug 2025",
      status: "Pending",
    },
    {
      id: 7,
      donor: "Chris Adams",
      amount: 100,
      date: "9 Aug 2025",
      status: "Failed",
    },
    {
      id: 8,
      donor: "Olivia White",
      amount: 400,
      date: "8 Aug 2025",
      status: "Completed",
    },
    {
      id: 9,
      donor: "Daniel Evans",
      amount: 220,
      date: "7 Aug 2025",
      status: "Completed",
    },
    {
      id: 10,
      donor: "Sophia Clark",
      amount: 180,
      date: "6 Aug 2025",
      status: "Pending",
    },
    {
      id: 11,
      donor: "James King",
      amount: 320,
      date: "5 Aug 2025",
      status: "Completed",
    },
  ];

  // Filtered donations
  const filteredDonations = donations.filter((donation) => {
    const lowerSearch = searchText.toLowerCase();
    return (
      donation.donor.toLowerCase().includes(lowerSearch) ||
      donation.id.toString().includes(lowerSearch) ||
      donation.status.toLowerCase().includes(lowerSearch) ||
      donation.date.toLowerCase().includes(lowerSearch)
    );
  });

  // Table columns
  const columns = [
    { title: "ID", dataIndex: "id", key: "id" },
    { title: "Donor", dataIndex: "donor", key: "donor" },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      render: (amount: number) => `£${amount}`,
    },
    { title: "Date", dataIndex: "date", key: "date" },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      width: "2vw",
      render: (status: string) => {
        const color =
          status === "Completed"
            ? "green"
            : status === "Pending"
            ? "orange"
            : "red";
        return <Tag color={color}>{status}</Tag>;
      },
    },
    {
      title: "Actions",
      key: "actions",
      render: (_: unknown, record: Donation) => (
        <div className="actions">
          <Button
            className="action-button"
            type="text"
            size="small"
            icon={<FaEye />}
            onClick={() => {
              setSelectedDonation(record);
              setIsModalVisible(true);
            }}
          />
          <Button
            className="action-button"
            type="text"
            size="small"
            icon={<FaDownload />}
            onClick={() => {
              console.log("Download donation:", record);
            }}
          />
        </div>
      ),
    },
  ];

  return (
    <div className="admin-main">
      <h2 className="dashboard-heading">All Donations</h2>

      {/* Search Bar */}
      <div className="search">
        <Search
          className="search-bar"
          placeholder="Search by donor, ID, status, or date"
          allowClear
          onSearch={(value) => setSearchText(value)}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>

      {/* Responsive Layout */}
      {screens.xs ? (
        // 👉 Mobile Card Layout
        <Row gutter={[16, 16]}>
          {filteredDonations.map((donation) => (
            <Col xs={24} key={donation.id}>
              <Card
                title={`${donation.donor}`}
                extra={
                  <Tag
                    color={
                      donation.status === "Completed"
                        ? "green"
                        : donation.status === "Pending"
                        ? "orange"
                        : "red"
                    }
                  >
                    {donation.status}
                  </Tag>
                }
                actions={[
                  <FaEye
                    key="view"
                    onClick={() => {
                      setSelectedDonation(donation);
                      setIsModalVisible(true);
                    }}
                  />,
                  <FaDownload
                    key="download"
                    onClick={() => {
                      console.log("Download donation:", donation);
                    }}
                  />,
                ]}
              >
                <p>
                  <strong>ID:</strong> {donation.id}
                </p>
                <p>
                  <strong>Amount:</strong> £{donation.amount}
                </p>
                <p>
                  <strong>Date:</strong> {donation.date}
                </p>
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        // 👉 Desktop Table Layout
        <Table
          columns={columns}
          dataSource={filteredDonations}
          rowKey="id"
          pagination={{ pageSize: 5 }}
          bordered
        />
      )}

      {/* Modal */}
      <Modal
        title="Donation Details"
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
      >
        {selectedDonation && (
          <Descriptions column={1} bordered size="small">
            <Descriptions.Item label="ID">
              {selectedDonation.id}
            </Descriptions.Item>
            <Descriptions.Item label="Donor">
              {selectedDonation.donor}
            </Descriptions.Item>
            <Descriptions.Item label="Amount">
              £{selectedDonation.amount}
            </Descriptions.Item>
            <Descriptions.Item label="Date">
              {selectedDonation.date}
            </Descriptions.Item>
            <Descriptions.Item label="Status">
              {selectedDonation.status}
            </Descriptions.Item>
          </Descriptions>
        )}
      </Modal>
    </div>
  );
};

export default AdminDonations;
