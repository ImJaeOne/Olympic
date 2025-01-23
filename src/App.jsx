import { useMedalList } from './hooks/useMedalList.js';
import MedalForm from './components/MedalForm/MedalForm.jsx';
import MedalList from './components/MedalList/MedalList.jsx';

import './App.css';

function App() {
    const { medalList, addMedal, updateMedal, deleteMedal } = useMedalList('medalListStorage');

    const handleSubmit = (e, value, action) => {
        e.preventDefault();
        if (action === 'add') {
            addMedal(value);
        } else if (action === 'update') {
            updateMedal(value);
        }
    };

    return (
        <div className='app'>
            <h2 className='header'>2024 파리 올림픽</h2>
            <MedalForm handleSubmit={handleSubmit} />
            <MedalList handleDeleteList={deleteMedal} medalList={medalList} />
        </div>
    );
}

export default App;
