import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000');
        const eventData = response.data;
        setEvents(eventData);
      } catch (error) {
        console.error('Error al obtener los eventos:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='maindiv_fecha'>
      <h2>Fechas disponibles:</h2>
      <ul className='fechas-ul'>
        {events.map((event, index) => (
          <li key={index}>
            {event[0]?.isDate === false ? (
              <p className='texto-gris'>{event[0]?.time}</p>
            ) : (
              <p className='existe'>{event[0]?.time.split('T')[0]}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
