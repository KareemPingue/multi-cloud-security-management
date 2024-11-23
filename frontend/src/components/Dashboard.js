import React, { useEffect, useState } from "react";
import axios from "../services/api";

const Dashboard = () => {
    const [complianceData, setComplianceData] = useState([]);
    
    useEffect(() => {
        axios.get("/compliance").then((res) => {
            setComplianceData(res.data);
        }).catch((err) => console.error(err));
    }, []);

    return (
        <div>
            <h1>Cloud Compliance Dashboard</h1>
            <ul>
                {complianceData.map((data, index) => (
                    <li key={index}>{data.message}</li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;
