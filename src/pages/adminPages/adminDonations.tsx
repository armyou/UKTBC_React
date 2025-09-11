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
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  isBehalfOfCompany: boolean;
  companyName?: string;
  address: string;
  amount: number;
  donationType: "Own Money" | "Fundraising";
  giftAidClaim: "Yes" | "No";
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
  // Sample donation data
  const donations: Donation[] = [
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@email.com",
      mobile: "9876543210",
      isBehalfOfCompany: false,
      address: "12 Baker Street, London",
      amount: 200,
      donationType: "Own Money",
      giftAidClaim: "Yes",
      date: "18 Aug 2025",
      status: "Completed",
    },
    {
      id: 2,
      firstName: "Jane",
      lastName: "Smith",
      email: "jane.smith@email.com",
      mobile: "9988776655",
      isBehalfOfCompany: true,
      companyName: "Tech Solutions Ltd",
      address: "45 Oxford Road, Manchester",
      amount: 150,
      donationType: "Fundraising",
      giftAidClaim: "No",
      date: "17 Aug 2025",
      status: "Pending",
    },
    {
      id: 3,
      firstName: "Mike",
      lastName: "Lee",
      email: "mike.lee@email.com",
      mobile: "9123456789",
      isBehalfOfCompany: false,
      address: "78 King Street, Birmingham",
      amount: 500,
      donationType: "Own Money",
      giftAidClaim: "Yes",
      date: "15 Aug 2025",
      status: "Failed",
    },
    {
      id: 4,
      firstName: "Sarah",
      lastName: "Green",
      email: "sarah.green@email.com",
      mobile: "9345678901",
      isBehalfOfCompany: true,
      companyName: "Green Interiors",
      address: "22 High Street, Leeds",
      amount: 300,
      donationType: "Fundraising",
      giftAidClaim: "No",
      date: "12 Aug 2025",
      status: "Completed",
    },
    {
      id: 5,
      firstName: "Tom",
      lastName: "Wilson",
      email: "tom.wilson@email.com",
      mobile: "9456789012",
      isBehalfOfCompany: false,
      address: "5 Station Road, Bristol",
      amount: 120,
      donationType: "Own Money",
      giftAidClaim: "Yes",
      date: "11 Aug 2025",
      status: "Completed",
    },
    {
      id: 6,
      firstName: "Emma",
      lastName: "Brown",
      email: "emma.brown@email.com",
      mobile: "9567890123",
      isBehalfOfCompany: false,
      address: "88 Market Street, Liverpool",
      amount: 250,
      donationType: "Fundraising",
      giftAidClaim: "Yes",
      date: "10 Aug 2025",
      status: "Pending",
    },
    {
      id: 7,
      firstName: "Chris",
      lastName: "Adams",
      email: "chris.adams@email.com",
      mobile: "9678901234",
      isBehalfOfCompany: true,
      companyName: "Adams Traders",
      address: "33 Bridge Road, Newcastle",
      amount: 100,
      donationType: "Own Money",
      giftAidClaim: "No",
      date: "9 Aug 2025",
      status: "Failed",
    },
  ];

  // Filtered donations
  const filteredDonations = donations.filter((donation) => {
    const lowerSearch = searchText.toLowerCase();
    return (
      donation.firstName.toLowerCase().includes(lowerSearch) ||
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
                title={`${donation.firstName} ${donation.lastName}`}
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
      {/* Modal */}
      <Modal
        title="Donation Invoice"
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
        width={700}
      >
        {selectedDonation && (
          <div className="donation-invoice">
            {/* Invoice Header */}
            <h2 className="invoice-title">Donation Receipt</h2>
            <p className="invoice-subtitle">
              Thank you for your generous contribution!
            </p>
            <hr style={{ margin: "1vh 0" }} />

            <Descriptions
              bordered
              column={1}
              size="small"
              labelStyle={{ fontWeight: 600, width: "30%" }}
            >
              {/* Donor Info */}
              <Descriptions.Item label="Donor Name">
                {selectedDonation.firstName} {selectedDonation.lastName}
              </Descriptions.Item>
              <Descriptions.Item label="Email">
                {selectedDonation.email}
              </Descriptions.Item>
              <Descriptions.Item label="Mobile">
                {selectedDonation.mobile}
              </Descriptions.Item>
              <Descriptions.Item label="Address">
                {selectedDonation.address}
              </Descriptions.Item>

              {/* Company Info */}
              {selectedDonation.isBehalfOfCompany && (
                <Descriptions.Item label="Company Name">
                  {selectedDonation.companyName}
                </Descriptions.Item>
              )}

              {/* Donation Info */}
              <Descriptions.Item label="Donation Type">
                {selectedDonation.donationType}
              </Descriptions.Item>
              <Descriptions.Item label="Gift Aid Claim">
                {selectedDonation.giftAidClaim}
              </Descriptions.Item>
              <Descriptions.Item label="Amount">
                <strong style={{ fontSize: "1.1rem", color: "#1677ff" }}>
                  £{selectedDonation.amount}
                </strong>
              </Descriptions.Item>
              <Descriptions.Item label="Date">
                {selectedDonation.date}
              </Descriptions.Item>

              {/* Status */}
              <Descriptions.Item label="Status">
                <Tag
                  color={
                    selectedDonation.status === "Completed"
                      ? "green"
                      : selectedDonation.status === "Pending"
                      ? "orange"
                      : "red"
                  }
                >
                  {selectedDonation.status}
                </Tag>
              </Descriptions.Item>
            </Descriptions>

            {/* Footer */}
            <div
              className="invoice-footer"
              style={{ marginTop: "2vh", textAlign: "center" }}
            >
              <p style={{ fontStyle: "italic", fontSize: "0.9rem" }}>
                This receipt is valid for records and Gift Aid claims.
              </p>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default AdminDonations;
