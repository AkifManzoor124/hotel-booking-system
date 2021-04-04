import React, { useState } from 'react'

function Customer() {
    const [sin, setSin] = useState()
    const [name, setName] = useState()
    const [address, setAddress] = useState()
    const [phone, setPhone] = useState()
    const [date, setDate] = useState()

    const handleSubmit = (event) => {
        event.preventDefault();
        //send command to database to retrieve 
    }


    return (
        <div>
            <h1>Book Room</h1>
            <form onSubmit={handleSubmit} >
                <label>
                    Sin:<input type="text" onChange={(event) => setSin(event.target.value)} />
                </label>
                <label>
                    Name: <input type="text" onChange={(event) => setName(event.target.value)} />
                </label>
                <label>
                    Address: <input type="text" onChange={(event) => setAddress(event.target.value)} />
                </label>
                <label>
                    Phone: <input type="text" onChange={(event) => setPhone(event.target.value)} />
                </label>
                <label>
                    Date: <input type="date" onChange={(event) => setDate(event.target.value)} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Customer
