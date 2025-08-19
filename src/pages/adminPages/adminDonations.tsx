import React, { useState } from "react";
import { Table, Tag, Button, Modal, Descriptions } from "antd";

interface Donation {
  id: number;
  donor: string;
  amount: number;
  date: string;
  status: "Completed" | "Pending" | "Failed";
}

const AdminDonations: React.FC = () => {
  const [selectedDonation, setSelectedDonation] = useState<Donation | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Sample donation data
  const donations: Donation[] = [
    { id: 1, donor: "John Doe", amount: 200, date: "18 Aug 2025", status: "Completed" },
    { id: 2, donor: "Jane Smith", amount: 150, date: "17 Aug 2025", status: "Pending" },
    { id: 3, donor: "Mike Lee", amount: 500, date: "15 Aug 2025", status: "Failed" },
    { id: 4, donor: "Sarah Green", amount: 300, date: "12 Aug 2025", status: "Completed" },
    { id: 5, donor: "Tom Wilson", amount: 120, date: "11 Aug 2025", status: "Completed" },
    { id: 6, donor: "Emma Brown", amount: 250, date: "10 Aug 2025", status: "Pending" },
    { id: 7, donor: "Chris Adams", amount: 100, date: "9 Aug 2025", status: "Failed" },
    { id: 8, donor: "Olivia White", amount: 400, date: "8 Aug 2025", status: "Completed" },
    { id: 9, donor: "Daniel Evans", amount: 220, date: "7 Aug 2025", status: "Completed" },
    { id: 10, donor: "Sophia Clark", amount: 180, date: "6 Aug 2025", status: "Pending" },
    { id: 11, donor: "James King", amount: 320, date: "5 Aug 2025", status: "Completed" },
  ];

  // Define columns
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Donor",
      dataIndex: "donor",
      key: "donor",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      render: (amount: number) => `$${amount}`,
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
              // Placeholder for download logic (PDF export / API call)
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
      <h2 className="dashboard-heading">All Donations</h2>
      <Table
        columns={columns}
        dataSource={donations}
        rowKey="id"
        pagination={{ pageSize: 5 }}
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
            <Descriptions.Item label="ID">{selectedDonation.id}</Descriptions.Item>
            <Descriptions.Item label="Donor">{selectedDonation.donor}</Descriptions.Item>
            <Descriptions.Item label="Amount">${selectedDonation.amount}</Descriptions.Item>
            <Descriptions.Item label="Date">{selectedDonation.date}</Descriptions.Item>
            <Descriptions.Item label="Status">{selectedDonation.status}</Descriptions.Item>
          </Descriptions>
        )}
      </Modal>
    </div>
  );
};

export default AdminDonations;
