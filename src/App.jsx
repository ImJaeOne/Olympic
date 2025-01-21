import { useState } from 'react';
import MedalForm from './components/MedalForm';
import MedalList from './components/MedalList';
import './App.css';

function App() {
    const [medalList, setMedalList] = useState([]);


    const handleSubmit = (e, value, action) => {
        e.preventDefault();
        if (action === 'add') {
            if (medalList.some((m) => m.country === value.country)) {
                alert('이미 등록되어있습니다. 업데이트해주세요.');
                return;
            }
            setMedalList([...medalList, value]);
        } else if (action === 'update') {
            if (!medalList.some((m) => m.country === value.country)) {
                alert('등록된 나라가 없습니다. 등록해주세요');
                return;
            }
            const updatedList = medalList.map((m) => (m.country === value.country ? { ...value } : m));
            setMedalList(updatedList);
        }
    };

    const handleDeleteList = (country) => {
        const deletedList = medalList.filter((m) => {
            return m.country !== country;
        });
        setMedalList(deletedList);
    };
    return (
        <>
            <h2>2024 파리 올림픽</h2>
            <MedalForm handleSubmit={handleSubmit} />
            <MedalList handleDeleteList={handleDeleteList} medalList={medalList} />
        </>
    );
}

export default App;
