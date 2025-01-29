import MedalItem from '../MedalItem/MedalItem';
import './medal-table.css'

export const MedalTable = ({sortMedalListByRank, handleDeleteList}) => {
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
                {sortMedalListByRank.map((m) => {
                    return <MedalItem key={m.country} handleDeleteList={handleDeleteList} medalItem={m} />;
                })}
            </tbody>
        </table>
    );
};

export default MedalTable;
