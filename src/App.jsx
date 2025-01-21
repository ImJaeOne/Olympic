import { useState } from 'react';
import MedalForm from './components/MedalForm';
import MedalList from './components/MedalList';
import './App.css';

function App() {
    const [medalList, setMedalList] = useState([]);

    const handleSubmit = (e, value) => {
        e.preventDefault();
        if (medalList.some((m) => m.country === value.country)) {
            alert('이미 등록되어있습니다. 업데이트해주세요.');
            return;
        }
        setMedalList([...medalList, value]);
    };

    const handleDeleteList = (country) => {
        const deletedList = medalList.filter((m) => {
            return m.country !== country;
        });
        setMedalList(deletedList);
    };
    return (
        <>
            <MedalForm handleSubmit={handleSubmit} />
            <MedalList handleDeleteList={handleDeleteList} medalList={medalList} />
        </>
    );
}

export default App;
