import { useState } from 'react';
import MedalForm from './components/MedalForm';
import './App.css';

function App() {
    const [medalList, setMedalList] = useState([]);

    const handleSubmit = (e, value) => {
        e.preventDefault();
        setMedalList([...medalList, value]);
    };
    return (
        <>
            <MedalForm handleSubmit={handleSubmit} medalList={medalList} />
        </>
    );
}

export default App;
