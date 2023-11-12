"use server";

import React, { useState } from "react";
import { Select, Space } from "antd";
import { Button, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { title } from "process";

interface DataType {
  key: React.Key;
  expenses: string;
  amount: number;
  category: string;
}
const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const columns: ColumnsType<DataType> = [
  {
    title: "Expenses",
    dataIndex: "expenses",
  },
  {
    title: "Amount",
    dataIndex: "amount",
  },
  {
    title: "Category",
    dataIndex: "category",
    render: () => (
      <Select
        defaultValue=""
        style={{ width: 120 }}
        options={[
          { value: "beauty", label: "Beauty" },
          { value: "food", label: "Food" },
          { value: "dinner &", label: "Dinner & Drinks" },
        ]}
      />
    ),
  },
];

const data: DataType[] = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    expenses: `Chemist Warehouse ${i}`,
    amount: 12345,
    category: "${}",
  });
}

const App: React.FC = () => {
  return (
    <div>
      <h1 className="main-header">My Hub</h1>
      <div style={{ marginBottom: 16 }}>
        <Button type="primary">Reload</Button>
        <span style={{ marginLeft: 8 }}>Selected 1 items</span>
      </div>

      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default App;
