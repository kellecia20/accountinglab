import React from 'react';
import { Table } from 'antd';
import { 
    HomeOutlined, 
    DollarOutlined, 
    BankOutlined, 
    LineChartOutlined, 
    ShoppingCartOutlined 
} from '@ant-design/icons';

import '../styles/ChartOfAccount.css';

const dataSource = [
    {
        key: '1',
        icon: <HomeOutlined className="assets-row-dark chartOfAccountIcon" />,
        account: '1000',
        accountType: 'Assets',
        accountName: 'Cash',
        FinancialStatement: 'Balance Sheet',
        rowClass: 'assets-row',
    },
    {
        key: '2',
        icon: <HomeOutlined className="assets-row-dark chartOfAccountIcon" />,
        account: '1100',
        accountType: 'Assets',
        accountName: 'Accounts Receivable',
        FinancialStatement: 'Balance Sheet',
        rowClass: 'assets-row',
    },
    {
        key: '3',
        icon: <HomeOutlined className="assets-row-dark chartOfAccountIcon" />,
        account: '1200',
        accountType: 'Assets',
        accountName: 'Inventory',
        FinancialStatement: 'Balance Sheet',
        rowClass: 'assets-row',
    },
    {
        key: '4',
        icon: <HomeOutlined className="assets-row-dark chartOfAccountIcon" />,
        account: '1300',
        accountType: 'Assets',
        accountName: 'Prepaid Expenses',
        FinancialStatement: 'Balance Sheet',
        rowClass: 'assets-row',
    },
    {
        key: '5',
        icon: <HomeOutlined className="assets-row-dark chartOfAccountIcon" />,
        account: '1400',
        accountType: 'Assets',
        accountName: 'Fixed Assets',
        FinancialStatement: 'Balance Sheet',
        rowClass: 'assets-row',
    },
    {
        key: '6',
        icon: <DollarOutlined className="liabilities-row-dark chartOfAccountIcon" />,
        account: '2000',
        accountType: 'Liabilities',
        accountName: 'Accounts Payable',
        FinancialStatement: 'Balance Sheet',
        rowClass: 'liabilities-row',
    },
    {
        key: '7',
        icon: <DollarOutlined className="liabilities-row-dark chartOfAccountIcon" />,
        account: '2100',
        accountType: 'Liabilities',
        accountName: 'Accrued Expenses',
        FinancialStatement: 'Balance Sheet',
        rowClass: 'liabilities-row',
    },
    {
        key: '8',
        icon: <DollarOutlined className="liabilities-row-dark chartOfAccountIcon" />,
        account: '2200',
        accountType: 'Liabilities',
        accountName: 'Deferred Revenue',
        FinancialStatement: 'Balance Sheet',
        rowClass: 'liabilities-row',
    },
    {
        key: '9',
        icon: <DollarOutlined className="liabilities-row-dark chartOfAccountIcon" />,
        account: '2300',
        accountType: 'Liabilities',
        accountName: 'Notes Payable',
        FinancialStatement: 'Balance Sheet',
        rowClass: 'liabilities-row',
    },
    {
        key: '10',
        icon: <BankOutlined className="equity-row-dark chartOfAccountIcon" />,
        account: '3000',
        accountType: 'Equity',
        accountName: 'Owner\'s Equity',
        FinancialStatement: 'Balance Sheet',
        rowClass: 'equity-row',
    },
    {
        key: '11',
        icon: <BankOutlined className="equity-row-dark chartOfAccountIcon" />,
        account: '3100',
        accountType: 'Equity',
        accountName: 'Retained Earnings',
        FinancialStatement: 'Balance Sheet',
        rowClass: 'equity-row',
    },
    {
        key: '12',
        icon: <LineChartOutlined className="revenue-row-dark chartOfAccountIcon" />,
        account: '4000',
        accountType: 'Revenue',
        accountName: 'Sales Revenue',
        FinancialStatement: 'Income Statement',
        rowClass: 'revenue-row',
    },
    {
        key: '13',
        icon: <LineChartOutlined className="revenue-row-dark chartOfAccountIcon" />,
        account: '4100',
        accountType: 'Revenue',
        accountName: 'Service Revenue',
        FinancialStatement: 'Income Statement',
        rowClass: 'revenue-row',
    },
    {
        key: '14',
        icon: <ShoppingCartOutlined className="expenses-row-dark chartOfAccountIcon" />,
        account: '5000',
        accountType: 'Expenses',
        accountName: 'Cost of Goods Sold',
        FinancialStatement: 'Income Statement',
        rowClass: 'expenses-row',
    },
    {
        key: '15',
        icon: <ShoppingCartOutlined className="expenses-row-dark chartOfAccountIcon" />,
        account: '5100',
        accountType: 'Expenses',
        accountName: 'Salaries and Wages',
        FinancialStatement: 'Income Statement',
        rowClass: 'expenses-row',
    },
    {
        key: '16',
        icon: <ShoppingCartOutlined className="expenses-row-dark chartOfAccountIcon" />,
        account: '5200',
        accountType: 'Expenses',
        accountName: 'Rent Expense',
        FinancialStatement: 'Income Statement',
        rowClass: 'expenses-row',
    },
    {
        key: '17',
        icon: <ShoppingCartOutlined className="expenses-row-dark chartOfAccountIcon" />,
        account: '5300',
        accountType: 'Expenses',
        accountName: 'Utilities Expense',
        FinancialStatement: 'Income Statement',
        rowClass: 'expenses-row',
    },
    {
        key: '18',
        icon: <ShoppingCartOutlined className="expenses-row-dark chartOfAccountIcon" />,
        account: '5400',
        accountType: 'Expenses',
        accountName: 'Marketing Expense',
        FinancialStatement: 'Income Statement',
        rowClass: 'expenses-row',
    },
];

const columns = [
    {
        title: 'Icon',
        dataIndex: 'icon',
        key: 'icon',
    },
    {
        title: 'Account',
        dataIndex: 'account',
        key: 'account',
    },
    {
        title: 'Account Type',
        dataIndex: 'accountType',
        key: 'accountType',
    },
    {
        title: 'Account Name',
        dataIndex: 'accountName',
        key: 'accountName',
    },
    {
        title: 'Financial Statement',
        dataIndex: 'FinancialStatement',
        key: 'FinancialStatement',
    },
];

const ChartOfAccount = () => {
    return <Table 
        dataSource={dataSource} 
        columns={columns} 
        rowClassName={(record) => record.rowClass} 
        pagination={false} 
        rowHoverable={false}
    />;
};

export default ChartOfAccount;