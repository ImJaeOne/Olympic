import React from 'react';

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
                            <th>국가명</th>
                            <th>금메달</th>
                            <th>은메달</th>
                            <th>동메달</th>
                            <th>액션</th>
                        </tr>
                    </thead>
                    <tbody>
                        {medalList.map((m) => {
                            return (
                                <tr key={m.country}>
                                    <td>{m.country}</td>
                                    <td>{m.gold}</td>
                                    <td>{m.silver}</td>
                                    <td>{m.bronze}</td>
                                    <td>
                                        <button onClick={() => handleDeleteList(m.country)}>삭제</button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default MedalList;
