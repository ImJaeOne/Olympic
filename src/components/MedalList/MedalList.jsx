import { React, useState } from 'react';
import MedalItem from '../MedalItem/MedalItem.jsx';
import { sortByMode, sortByRank } from '../../utils/medalUtils';
import './MedalList.css';

export const MedalList = ({ medalList, handleDeleteList }) => {
    const [mode, setMode] = useState('sortByGold');

    const handleMode = (e) => {
        setMode(e.target.value);
    };

    const sortMedalListByMode = sortByMode(medalList, mode);
    const sortMedalListByRank = sortByRank(sortMedalListByMode, mode);
    return (
        <div className="medal-list-container">
            {medalList.length === 0 ? (
                <div>아직 추가된 국가가 없습니다. 메달을 추적하세요!</div>
            ) : (
                <div>
                    <form>
                        <label>
                            <input
                                type="radio"
                                value="sortByGold"
                                checked={mode === 'sortByGold'}
                                onChange={handleMode}
                            />
                            <span>Gold</span>
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="sortByTotal"
                                checked={mode === 'sortByTotal'}
                                onChange={handleMode}
                            />
                            <span>Total</span>
                        </label>
                    </form>

                    <table className="medal-list-table">
                        <thead>
                            <tr>
                                <th>Rank</th>
                                <th>국가명</th>
                                <th>🥇</th>
                                <th>🥈</th>
                                <th>🥉</th>
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
                </div>
            )}
        </div>
    );
};

export default MedalList;
