import './medal-item.css'
export const MedalItem = ({ handleDeleteList, medalItem }) => {
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
};

export default MedalItem;
