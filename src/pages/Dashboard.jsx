import React from 'react';

import Chart from 'react-apexcharts';

import statusCards from './../assets/JsonData/status-card-data.json'

import StatusCard from '../components/status-card/StatusCard';
import { Link } from 'react-router-dom';
import Table from '../components/table/Table';
import Badge from './../components/badge/Badge';

const chartOptions = {
    series: [{
        name: 'Online customers',
        data: [40,70,20,90,36,80,30,91,60],
    },
    {
        name: 'Store customers',
        data: [40,30,70,80,40,16,40,20,51],
    }],
    options: {
        color : ['#6ab04c','#2980b9'],
        chart: {
            background: 'transparent',
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
        },
        legend: {
            position: 'top'
        },
        grid: {
            show: false
        }
    }
}

const topCustomers = {
    head:[
        'user',
        'total orders',
        'total spending'
    ],
    body: [
        {
            'username' : 'john doe',
            'order' : '460',
            'price' : '$15,870'
        },
        {
            'username' : 'davil chaky',
            'order' : '290',
            'price' : '$15,870'
        },
        {
            'username' : 'twit doe',
            'order' : '490',
            'price' : '$15,870'
        },
        {
            'username' : 'jul doe',
            'order' : '450',
            'price' : '$15,870'
        },
        {
            'username' : 'ruby',
            'order' : '390',
            'price' : '$15,870'
        },
    ]
}

const latestOrders = {
    head: [
        "order id",
        "user",
        "total price",
        "date",
        "status"
    ],
    body: [
        {
            id: "#OD1711",
            user: "john doe",
            date: "17 Jun 2021",
            price: "$900",
            status: "shipping"
        },
        {
            id: "#OD1712",
            user: "frank iva",
            date: "1 Jun 2021",
            price: "$400",
            status: "paid"
        },
        {
            id: "#OD1713",
            user: "anthony baker",
            date: "27 Jun 2021",
            price: "$200",
            status: "pending"
        },
        {
            id: "#OD1712",
            user: "frank iva",
            date: "1 Jun 2021",
            price: "$400",
            status: "paid"
        },
        {
            id: "#OD1713",
            user: "anthony baker",
            date: "27 Jun 2021",
            price: "$200",
            status: "refund"
        }
    ]
}

const orderStatus = {
    "shipping": "primary",
    "pending": "warning",
    "paid": "success",
    "refund": "danger"
}

const renderOrderHead = (item, index) => (
    <th key={index}>{item}</th>
)

const renderOrderBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.user}</td>
        <td>{item.price}</td>
        <td>{item.date}</td>
        <td>
            <Badge type={orderStatus[item.status]} content={item.status}/>
        </td>
    </tr>
)

const renderCustomerHead = (item, index) => (
    <th key={index}>{item}</th>
)

const renderCustomerBody = (item, index) => (
    <tr key={index}>
        <td>{item.username}</td>
        <td>{item.order}</td>
        <td>{item.price}</td>
    </tr>
)

const DashBoard = () => {
    return (
        <div>
            <h2 className="page-header">Dashboard</h2>
            <div className="row">
                <div className="col-6">
                    <div className="row">
                        {
                            statusCards.map((item,i) => (
                               <div className="col-6">
                                    
                                    <StatusCard key={i} icon={item.icon} title={item.title} count={item.count} />
                               </div>
                            ))                       
                        }
                    </div>
                </div>
                <div className="col-6">
                    <div className="card full-height">
                        <Chart 
                            options={chartOptions.options}
                            series={chartOptions.series}
                            type='line'
                            height='100%'
                        />
                    </div>
                </div>
                <div className="col-4">
                    <div className="card">
                        <div className="card__header">
                            <h3>top customers</h3>
                        </div>
                        <div className="card__body">
                            <Table
                                headData= {topCustomers.head}
                                renderHead={renderCustomerHead}
                                bodyData= {topCustomers.body}
                                renderBody={renderCustomerBody}
                            />
                        </div>
                        <div className="card__footer">
                            <Link to="/">View all</Link>
                        </div>
                    </div>
                </div>
                <div className="col-8">
                    <div className="card">
                        <div className="card__header">
                            <h3>lastest orders</h3>
                        </div>
                        <div className="card__body">
                            <Table 
                                headData={latestOrders.head}
                                bodyData={latestOrders.body}
                                renderHead={renderOrderHead}
                                renderBody={renderOrderBody}
                            />
                        </div>
                        <div className="card__footer">
                            <Link to="/">view all</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;