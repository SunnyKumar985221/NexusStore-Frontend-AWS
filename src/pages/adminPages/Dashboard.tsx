import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Dashboard: React.FC = () => {
    const [data, setData] = useState<any>(null); // Adjust the type based on your data
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
console.log("Dashboard loaded")
    // useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get('https://9ecl8cbtc9.execute-api.ap-south-1.amazonaws.com/dev/products');
                setData(result);
            } catch (error) {
                setError('Failed to fetch data');
            } finally {
                setLoading(false);
            }
        };

    return (
        <div>
            <h1>This is Admin Dashboard</h1>
            <button onClick={fetchData}>Fetch</button>
            {/* Render your data here */}
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
};

export default Dashboard;
