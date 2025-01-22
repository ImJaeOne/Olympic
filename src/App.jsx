import { useMedalList } from './hooks/useMedalList.js';
import MedalForm from './components/MedalForm';
import MedalList from './components/MedalList';
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
        <>
            <h2>2024 파리 올림픽</h2>
            <MedalForm handleSubmit={handleSubmit} />
            <MedalList handleDeleteList={deleteMedal} medalList={medalList} />
        </>
    );
}

export default App;
