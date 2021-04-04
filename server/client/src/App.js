import React, { useState, useEffect } from 'react';

import AdminView from './AdminView'
import Employee from './Employee';
import Customer from './Customer';
import ListRooms from './ListRooms'

function App() {
  const [tables, setTables] = useState(false);

  // useEffect(() => {
  //   getTables();
  // }, []);

  // function getTables() {
  //   fetch('http://localhost:3001')
  //     .then(response => {
  //       return response.text();
  //     })
  //     .then(data => {
  //       setTables(data);
  //     });
  // }

  //I need to create two different views for the customers 
  //and hotel management

  return (
    <div>
      {tables}
      <AdminView />
      <Employee />
      <Customer />
      <ListRooms></ListRooms>
    </div>
  );
}

export default App;