import { useState,useEffect} from 'react';
import './Watch.css'

const Digiwatch = () => {
  const [date, setDate] = useState(new Date());
  // const [today, setToday] = useState({
  //   todayName : "",
  //   thisMonth : ""
  // });
  const dayName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thuesday', 'Friday', 'Saturday'];


  function refreshClock() {
    setDate(new Date());
  }
  useEffect(() => {
    // setToday({
    //   todayName:dayName[date.getDay()],
    //   thisMonth:"dsdfdsf" 
    // })
    // (dayName[date.getDay()]);
    setInterval(refreshClock, 1000);
  }, []);

  return (
    <div className='mainWatch'>
      {/* <span>{today}</span> */}
      <span>{date.toLocaleTimeString()}</span>
    </div>
  );
}

export default Digiwatch