import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Dashboard = () => {

    const students = [
        {
            id: 1,
            name: 'John',
            phy: 80,
            chemistry: 90,
            math: 85
        },
        {
            id: 2,
            name: 'Jane',
            phy: 70,
            chemistry: 80,
            math: 90
        },
        {
            id: 3,
            name: 'Bob',
            phy: 95,
            chemistry: 85,
            math: 75
        },
        {
            id: 4,
            name: 'Alice',
            phy: 85,
            chemistry: 95,
            math: 90
        },
        {
            id: 5,
            name: 'Mark',
            phy: 60,
            chemistry: 75,
            math: 80
        },
        {
            id: 6,
            name: 'Sara',
            phy: 90,
            chemistry: 80,
            math: 85
        },
        {
            id: 7,
            name: 'Jack',
            phy: 75,
            chemistry: 85,
            math: 80
        },
        {
            id: 8,
            name: 'Emily',
            phy: 85,
            chemistry: 95,
            math: 90
        },
        {
            id: 9,
            name: 'Tom',
            phy: 80,
            chemistry: 90,
            math: 85
        },
        {
            id: 10,
            name: 'Linda',
            phy: 90,
            chemistry: 75,
            math: 80
        },
        {
            id: 11,
            name: 'Alex',
            phy: 85,
            chemistry: 90,
            math: 85
        },
        {
            id: 12,
            name: 'Grace',
            phy: 80,
            chemistry: 85,
            math: 90
        }
    ];
    
    return (
        <div>
           <LineChart
                 width={1000}
                 height={300} 
                 data={students}
           >
                <Line dataKey="phy"></Line>
                <Line dataKey="chemistry" stroke="#8884d8"></Line>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
           </LineChart>

           
        </div>
    );
};

export default Dashboard;