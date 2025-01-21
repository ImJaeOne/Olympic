import React from 'react';
import MedalItem from './MedalItem';

export const MedalList = ({ medalList, handleDeleteList }) => {
    return (
        <div>
            <div>MedalList</div>
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
                            <th>액션</th>
                        </tr>
                    </thead>
                    <tbody>
                        {medalList.sort((a,b) => b.gold - a.gold).map((m, i) => {
                            return <MedalItem key={m.country} handleDeleteList={handleDeleteList} medalItem={m} rank={i+1}/>;
                        })}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default MedalList;
