import './App.css';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import { useEffect, useState } from 'react';
function App() {
  //onClick Handle and color change events
  const [linkColor, setLinkColor] = useState('');
  const HandleClick = () => {
    const color = linkColor ? "" : "primary";
    setLinkColor(color);
  };

  //Multiple users  data load with API call and show data in the website
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  //Single User data load with API call and show data in the website
  const [singleUser, setSingleUser] = useState({});
  useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users/1')
       .then(res => res.json())
       .then(data => setSingleUser(data));
  }, []);
  
  // Random user data load with API call and show data in the website 
  const [randomUser, setRandomUser] = useState({});
  useEffect(() => {
    fetch('https://randomuser.me/api/')
     .then(res => res.json())
     .then(data => setRandomUser(data.results[0]));
  }, []);
  return (
    <div className="App">
      <AccessAlarmIcon ></AccessAlarmIcon>
      <ThumbUpAltIcon onClick={HandleClick} color={linkColor} ></ThumbUpAltIcon>
      {
        users.map(data => <li> {data.name}</li>)
      }
      <h1>Name : {singleUser.name}</h1>
      <h2> Random Gender : {randomUser.gender} </h2>
      <h2> Random First Name : {randomUser.name && randomUser.name.first}</h2>
      {/* jodi "randomUser.name" k pai tobey "randomUser.name.first" k call korbey. Noiley aita k skip korbey. */}
      <h2> Random Last Name : {randomUser.name?.last}</h2>
      {/* jodi "randomUser.name" k pai tobey ".last" k call korbey. Noiley aita k skip korbey. */}
    </div>
  );
}

export default App;
