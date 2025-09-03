import React, { useState } from "react";
import { Card, Row, Col, Table, Tag, Button, Modal, Descriptions } from "antd";
import "./css/dashboard.css";

// Extend DonateData for admin dashboard records
interface DonateData {
  // Personal Details
  firstName: string;
  lastName: string;
  email: string;
  phone: string;

  // Company Donation (optional)
  onBehalfOfCompany: "yes" | "no";
  companyName?: string;
  companyAddress?: string;
  companyCity?: string;
  companyPostcode?: string;
  companyCountry?: string;

  // Donation Details
  donationAmount: number;
  ClaimGiftAid: boolean;
  isThisPersonalMoney?: boolean;

  // Extra fields for dashboard
  key: number;
  date: string;
  status: "Completed" | "Pending" | "Failed";
}

const AdminDashboard: React.FC = () => {
  const [selectedDonation, setSelectedDonation] = useState<DonateData | null>(
    null
  );
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Recent donations data
  const donations: DonateData[] = [
    {
      key: 1,
      firstName: "John",
      lastName: "Doe",
      email: "john@example.com",
      phone: "1234567890",
      onBehalfOfCompany: "no",
      donationAmount: 200,
      ClaimGiftAid: true,
      isThisPersonalMoney: true,
      date: "18 Aug 2025",
      status: "Completed",
    },
    {
      key: 2,
      firstName: "Jane",
      lastName: "Smith",
      email: "jane@example.com",
      phone: "9876543210",
      onBehalfOfCompany: "yes",
      companyName: "Acme Corp",
      donationAmount: 150,
      ClaimGiftAid: false,
      date: "17 Aug 2025",
      status: "Pending",
    },
    {
      key: 3,
      firstName: "Mike",
      lastName: "Lee",
      email: "mike@example.com",
      phone: "1112223333",
      onBehalfOfCompany: "no",
      donationAmount: 500,
      ClaimGiftAid: true,
      isThisPersonalMoney: true,
      date: "15 Aug 2025",
      status: "Failed",
    },
  ];

  // Table columns
  const columns = [
    {
      title: "Donor",
      dataIndex: "firstName",
      key: "donor",
      render: (_: string, record: DonateData) =>
        `${record.firstName} ${record.lastName}`,
    },
    {
      title: "Amount",
      dataIndex: "donationAmount",
      key: "donationAmount",
      render: (amount: number) => `₹${amount.toLocaleString()}`,
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: DonateData["status"]) => {
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
      render: (_: unknown, record: DonateData) => (
        <>
          <Button
            type="link"
            onClick={() => {
              setSelectedDonation(record);
              setIsModalVisible(true);
            }}
          >
            View
          </Button>
          <Button
            type="link"
            onClick={() => {
              // Placeholder for download logic (e.g. PDF export / API call)
              console.log("Download donation:", record);
            }}
          >
            Download
          </Button>
        </>
      ),
    },
  ];

  return (
    <div className="admin-main">
      {/* Overview Cards */}
      <h3 className="dashboard-heading">Donation Overview</h3>
      <Row gutter={16}>
        <Col xs={24} sm={12} md={8}>
          <Card title="Total Donations" bordered={false}>
            <p
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                color: "#AE2C36",
              }}
            >
              ₹25,430
            </p>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card title="Total Donors" bordered={false}>
            <p
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                color: "#AE2C36",
              }}
            >
              320
            </p>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card title="This Month" bordered={false}>
            <p
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                color: "#AE2C36",
              }}
            >
              ₹5,120
            </p>
          </Card>
        </Col>
      </Row>

      {/* Recent Donations Table */}
      <h3 className="dashboard-heading" style={{ marginTop: "2rem" }}>
        Recent Donations
      </h3>
      <Table
        columns={columns}
        dataSource={donations}
        pagination={false}
        bordered
      />

      {/* Modal for viewing donation details */}
      <Modal
        title="Donation Details"
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
      >
        {selectedDonation && (
          <Descriptions column={1} bordered size="small">
            <Descriptions.Item label="Name">
              {selectedDonation.firstName} {selectedDonation.lastName}
            </Descriptions.Item>
            <Descriptions.Item label="Email">
              {selectedDonation.email}
            </Descriptions.Item>
            <Descriptions.Item label="Phone">
              {selectedDonation.phone}
            </Descriptions.Item>
            <Descriptions.Item label="Donation Amount">
              ₹{selectedDonation.donationAmount.toLocaleString()}
            </Descriptions.Item>
            <Descriptions.Item label="Gift Aid">
              {selectedDonation.ClaimGiftAid ? "Yes" : "No"}
            </Descriptions.Item>
            <Descriptions.Item label="Personal Money">
              {selectedDonation.isThisPersonalMoney ? "Yes" : "No"}
            </Descriptions.Item>
            <Descriptions.Item label="Date">
              {selectedDonation.date}
            </Descriptions.Item>
            <Descriptions.Item label="Status">
              {selectedDonation.status}
            </Descriptions.Item>
            {selectedDonation.onBehalfOfCompany === "yes" && (
              <>
                <Descriptions.Item label="Company Name">
                  {selectedDonation.companyName}
                </Descriptions.Item>
                <Descriptions.Item label="Company Address">
                  {selectedDonation.companyAddress}
                </Descriptions.Item>
                <Descriptions.Item label="City">
                  {selectedDonation.companyCity}
                </Descriptions.Item>
                <Descriptions.Item label="Postcode">
                  {selectedDonation.companyPostcode}
                </Descriptions.Item>
                <Descriptions.Item label="Country">
                  {selectedDonation.companyCountry}
                </Descriptions.Item>
              </>
            )}
          </Descriptions>
        )}
      </Modal>
    </div>
  );
};

export default AdminDashboard;
