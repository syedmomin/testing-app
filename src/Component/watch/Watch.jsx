import { useState, useEffect } from 'react';
import './Watch.css'

const Digiwatch = () => {
  const [date, setDate] = useState(new Date());
  const [today, setToday] = useState({
    todayName: "",
    thisMonth: ""
  });
  const dayName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thuesday', 'Friday', 'Saturday'];


  function refreshClock() {
    setDate(new Date());
  }
  useEffect(() => {
    setToday({
      todayName: dayName[date.getDay()],
      thisMonth: date.getMonth(),
      thisYear: date.getFullYear()
    })
    // (dayName[date.getDay()]);
    setInterval(refreshClock, 1000);
  }, []);

  return (
    <div className='mainWatch'>
      <div className='watchHead'>
        <div>
          <h1>{today.todayName}</h1>
        </div>
        <div>
          <h4>-{today.thisMonth}-{today.thisYear}</h4>
        </div>
      </div>
      <div className='ChangeTimer'>
      <span>{date.toLocaleTimeString()}</span>
      </div>
    </div>
  );
}

export default Digiwatch