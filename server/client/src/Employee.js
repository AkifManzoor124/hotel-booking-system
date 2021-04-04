import React, { useState } from 'react'
import BookRoom from './BookRoom'

// Hotel employees need a lookup application that allows a quick access to rooms available and booked. 
// Employees will transform booked room into rented rooms when the customers arrive at the hotel. 

// If a customer arrives to the hotel without a booking the 
// employee should be able to find a room and rent it without prior booking. 

// An employee should also be able to insert a customer payment for a renting. 



function Employee() {
    const [hotelChain, setHotelChain] = useState()
    const [date, setDate] = useState()

    const handleSubmit = (event) => {
        event.preventDefault();
        //send command to database to retrieve 
    }

    const handleHotelChange = (event) => {
        setHotelChain(event.target.value)
    }

    const handleDateChange = (event) => {
        setDate(event.target.value)
    }

    return (
        <div>
            <h1>Search for Rooms:</h1>
            <form onSubmit={handleSubmit} >
                <label>
                    Hotel Chain: <input type="text" onChange={handleHotelChange} />
                </label>
                <label>
                    Date:<input type="date" onChange={handleDateChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>

            <BookRoom></BookRoom>
        </div>
    )
}

export default Employee
