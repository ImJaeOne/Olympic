import React from 'react';

export const MedalItem = ({ handleDeleteList, medalItem}) => {
    return (
        <tr key={medalItem.country}>
            <td>{medalItem.rank}</td>
            <td>{medalItem.country}</td>
            <td>{medalItem.gold}</td>
            <td>{medalItem.silver}</td>
            <td>{medalItem.bronze}</td>
            <td>{medalItem.gold + medalItem.silver + medalItem.bronze}</td>
            <td>
                <button onClick={() => handleDeleteList(medalItem.country)}>삭제</button>
            </td>
        </tr>
    );
};

export default MedalItem;
