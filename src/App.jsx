import { useState } from 'react';
import MedalForm from './components/MedalForm';
import MedalList from './components/MedalList';
import './App.css';

function App() {
    const [medalList, setMedalList] = useState([]);

    const handleSubmit = (e, value) => {
        e.preventDefault();
        setMedalList([...medalList, value]);
    };

    const handleDeleteList = (country) => {
      const deletedList = medalList.filter((m) => {
        return m.country != country;
      })
      setMedalList(deletedList);
    }
    return (
        <>
            <MedalForm handleSubmit={handleSubmit} medalList={medalList} />
            <MedalList handleDeleteList={handleDeleteList} medalList={medalList} />
        </>
    );
}

export default App;
