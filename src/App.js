import './App.css';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import { useState } from 'react';
function App() {
  const [linkColor, setLinkColor] = useState('');
  const HandleClick = () => {
    const color = linkColor ? "" : "primary";
    console.log(color);
    setLinkColor(color);
    console.log('clicked')
  }
  return (
    <div className="App">
      <AccessAlarmIcon ></AccessAlarmIcon>
      <ThumbUpAltIcon onClick={HandleClick} color={linkColor} ></ThumbUpAltIcon>
    </div>
  );
}

export default App;
