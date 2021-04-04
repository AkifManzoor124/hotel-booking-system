import React, { useState, useEffect } from 'react';

export default function AdminView({ sendQuery }) {
    const [query, setQuery] = useState('')

    function sendQuery(query) {
        fetch('http://localhost:3001/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ query }),
        })
            .then(response => {
                return response.text();
            })
            .then(data => {
                alert(data);
            });
    }

    function handleChange(event) {
        setQuery(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        sendQuery(query)
    }

    return (
        <div>
            <h2>Admin View</h2>
            <form onSubmit={handleSubmit} >
                <label>
                    Query: <input type="text" onChange={handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}