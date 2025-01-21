import { React, useState } from 'react';

const MedalForm = ({ handleSubmit }) => {
    const [medalItem, setMedalItem] = useState({
        country: '',
        gold: 0,
        silver: 0,
        bronze: 0,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMedalItem({...medalItem, [name]: value });
    };

    return (
        <div>
            <h2>2024 파리 올림픽</h2>
            <form onSubmit={(e) => handleSubmit(e, medalItem)}>
                국가명
                <input type="text" name="country" value={medalItem.country} onChange={handleChange} />
                금메달
                <input type="number" name="gold" value={medalItem.gold} onChange={handleChange} />
                은메달
                <input type="number" name="silver" value={medalItem.silver} onChange={handleChange} />
                동메달
                <input type="number" name="bronze" value={medalItem.bronze} onChange={handleChange} />
                <button type="submit">Add</button>
            </form>
        </div>
    );
};

export default MedalForm;
