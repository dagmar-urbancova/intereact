import React, {useEffect, useState} from 'react';
import './App.css';
import GetList from './components/GetList';

function App() {

const [userList, setUserList] = useState([]);
useEffect(()=> {
  async function fetchUserList() {
    try {
      const requestUrl = 'https://jsonplaceholder.typicode.com/users';
      const response = await fetch(requestUrl);
      const responseJSON = await response.json();
      console.log(responseJSON);
      setUserList(responseJSON);
    } catch {

    }

  }
fetchUserList();

}, []

);


  return (
    <div className="App">
      <GetList userList={userList} />

    </div>
  );
}

export default App;
