import { React, useState } from 'react';
import MedalItem from './MedalItem';

export const MedalList = ({ medalList, handleDeleteList }) => {
    const [mode, setMode] = useState('sortByGold');
    const handleMode = (e) => {
        setMode(e.target.value);
    };
    const sortMedalList = [...medalList].sort((a, b) => {
        if (mode === 'sortByGold') {
            return b.gold - a.gold;
        } else if (mode === 'sortByTotal') {
            const totalA = a.gold + a.silver + a.bronze;
            const totalB = b.gold + b.silver + b.bronze;
            return totalB - totalA;
        }
        return 0;
    });
    let rank = 1;
    let prevMedals = null;
    let rankSkip = 1;
    const sortByRank = sortMedalList.map((m, index) => {
        if (
            prevMedals &&
            prevMedals.gold === m.gold &&
            prevMedals.silver === m.silver &&
            prevMedals.bronze === m.bronze
        ) {
            m.rank = rank;
            rankSkip++;  
        } else {
            m.rank = rank;
            rank += rankSkip; 
            rankSkip = 1;  
        }
        prevMedals = { gold: m.gold, silver: m.silver, bronze: m.bronze };
        console.log(m);
        return m;
    });
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
                        {sortByRank.map((m) => {
                            return (
                                <MedalItem
                                    key={m.country}
                                    handleDeleteList={handleDeleteList}
                                    medalItem={m}
                                />
                            );
                        })}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default MedalList;
