import { React, useState } from 'react';
import MedalItem from './MedalItem';
import { sortByMode, sortByRank } from '../utils/medalUtils';

export const MedalList = ({ medalList, handleDeleteList }) => {
    const [mode, setMode] = useState('sortByGold');

    const handleMode = (e) => {
        setMode(e.target.value);
    };

    const sortMedalListByMode = sortByMode(medalList, mode);
    const sortMedalListByRank = sortByRank(sortMedalListByMode, mode);
    return (
        <div>
            <div>MedalList</div>
            <form>
                <label>
                    <input type="radio" value="sortByGold" checked={mode === 'sortByGold'} onChange={handleMode} />
                    금메달
                </label>
                <label>
                    <input type="radio" value="sortByTotal" checked={mode === 'sortByTotal'} onChange={handleMode} />
                    총메달
                </label>
            </form>
            {medalList.length === 0 ? (
                <div>아직 추가된 국가가 없습니다. 메달을 추적하세요!</div>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>국가명</th>
                            <th>금메달</th>
                            <th>은메달</th>
                            <th>동메달</th>
                            <th>총 메달</th>
                            <th>액션</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortMedalListByRank.map((m) => {
                            return <MedalItem key={m.country} handleDeleteList={handleDeleteList} medalItem={m} />;
                        })}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default MedalList;
