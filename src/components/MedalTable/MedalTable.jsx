import './medal-table.css';

export const MedalTable = ({ sortMedalListByRank, handleDeleteList }) => {
    return (
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
                {sortMedalListByRank.map((medalItem) => {
                    return (
                        <tr key={medalItem.country}>
                            <td>{medalItem.rank}</td>
                            <td>{medalItem.country}</td>
                            <td>{medalItem.gold}</td>
                            <td>{medalItem.silver}</td>
                            <td>{medalItem.bronze}</td>
                            <td>{medalItem.gold + medalItem.silver + medalItem.bronze}</td>
                            <td>
                                <button className="medal-item-btn" onClick={() => handleDeleteList(medalItem.country)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default MedalTable;
