import React, { useState } from 'react'

function Customer() {
    const [date, setDate] = useState()

    const handleSubmit = (event) => {
        event.preventDefault();
        //send command to database to retrieve 
    }

    const handleDateChange = (event) => {
        setDate(event.target.value)
    }

    return (
        <div>
            <h2>Customer Room Lookup</h2>
            <form onSubmit={handleSubmit} >
                <label>
                    Date:<input type="date" onChange={handleDateChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Customer
