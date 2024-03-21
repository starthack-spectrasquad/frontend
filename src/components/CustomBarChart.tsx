// Import Libraries
import React from 'react';
import { BarChart, Bar, Cell, XAxis, ResponsiveContainer } from 'recharts';
import {IonIcon} from "@ionic/react";
import './CustomBarChart.css'
// Define Data
const data = [
    { name: 'Allergenes', value: 80, icon: 'icon.png', color: 'black' },
    { name: 'Proteins', value: 300, icon: 'icon.png', color: 'red' },
    { name: 'Vitamins', value: 200, icon: 'icon.png', color: 'blue' },
    { name: 'Amino Acids', value: 200, icon: 'icon.png', color: 'blue' },
    { name: 'Electrolytes', value: 200, icon: 'icon.png', color: 'blue' },
    { name: 'Bodybuilding', value: 200, icon: 'icon.png', color: 'blue' },
];

// Custom Bar Component
const CustomBar = (props:any) => {
    const { payload, x, y, width, height } = props;

    return (
        <>
            <text x={x} y={y + 7} textAnchor="start" fill="#666">
                <div className="text-lg font-semibold">Overview</div>
            </text>
            <rect x={x + 75} y={y} width={75} height={height} radius={"10, 10, 0, 0"} fill={payload.color} className="custom-rect" />
            <IonIcon name="arrow-down-circle-outline" size={"32"}/>
            <image href={`/path/to/${payload.icon}`} x={x + width + 10}  height="20px" width="20px" />
        </>
    )
}

// Main Chart Component
const CustomBarChart = () => {
    return (
        <ResponsiveContainer width='100%' height={400}>
            <BarChart layout="vertical" data={data} barSize={25}>
                <XAxis type="number" hide />
                <Bar dataKey="value" fill="#8884d8" shape={<CustomBar />} >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                </Bar>
            </BarChart>
        </ResponsiveContainer>
    );
};

export default CustomBarChart;