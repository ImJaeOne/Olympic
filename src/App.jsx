import { useMedalList } from './hooks/useMedalList.js';
import MedalForm from './components/MedalForm/MedalForm.jsx';
import MedalList from './components/MedalList/MedalList.jsx';

import './App.css';

function App() {
    const { medalList, addMedal, updateMedal, deleteMedal } = useMedalList();

    return (
        <div className="app">
            <h2 className="header">2024 파리 올림픽</h2>
            <MedalForm addMedal={addMedal} updateMedal={updateMedal} />
            <MedalList handleDeleteList={deleteMedal} medalList={medalList} />
        </div>
    );
}

export default App;
