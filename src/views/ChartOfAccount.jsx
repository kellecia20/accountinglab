import React from 'react';
import { Table } from 'antd';

const dataSource = [
    {
        key: '1',
        accountNumber: '1001',
        accountName: 'Cash',
        accountType: 'Asset',
    },
    {
        key: '2',
        accountNumber: '2001',
        accountName: 'Accounts Payable',
        accountType: 'Liability',
    },
    // Add more data as needed
];

const columns = [
    {
        title: 'Account Number',
        dataIndex: 'accountNumber',
        key: 'accountNumber',
    },
    {
        title: 'Account Name',
        dataIndex: 'accountName',
        key: 'accountName',
    },
    {
        title: 'Account Type',
        dataIndex: 'accountType',
        key: 'accountType',
    },
];

const ChartOfAccount = () => {
    return <Table dataSource={dataSource} columns={columns} />;
};

export default ChartOfAccount;