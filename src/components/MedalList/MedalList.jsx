import { useState } from 'react';
import RadioForm from '../RadioForm/RadioForm.jsx';
import MedalTable from '../MedalTable/MedalTable.jsx';
import { sortByMode, sortByRank } from '../../utils/medalUtils';
import './medal-list.css';

export const MedalList = ({ medalList, handleDeleteList }) => {
    const [mode, setMode] = useState('sortByGold');

    const handleMode = (e) => {
        setMode(e.target.value);
    };

    const sortMedalListByMode = sortByMode(medalList, mode);
    const sortMedalListByRank = sortByRank(sortMedalListByMode, mode);

    return (
        <div className="medal-list-container">
            {medalList?.length === 0 ? (
                <div>아직 추가된 국가가 없습니다. 메달을 추적하세요!</div>
            ) : (
                <div>
                    <RadioForm mode={mode} handleMode={handleMode}/>
                    <MedalTable sortMedalListByRank={sortMedalListByRank} handleDeleteList={handleDeleteList}/>
                </div>
            )}
        </div>
    );
};

export default MedalList;
