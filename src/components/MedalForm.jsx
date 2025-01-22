import { React, useState } from 'react';

const MedalForm = ({ handleSubmit }) => {
    const [medalItem, setMedalItem] = useState({
        country: '',
        gold: '',
        silver: '',
        bronze: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        const setValueType = name === 'gold' || name === 'silver' || name === 'bronze' ? Number(value) : value.trim();
        setMedalItem({ ...medalItem, [name]: setValueType });
    };

    const validateForm = () => {
        if (!medalItem.country) {
            alert('국가명을 입력해주세요');
            return false;
        }
        return true;
    };

    const handleForSubmit = (e) => {
        if (!validateForm()) return;
        const action = e.nativeEvent.submitter.name;
        handleSubmit(e, medalItem, action);
        setMedalItem({
            country: '',
            gold: 0,
            silver: 0,
            bronze: 0,
        });
    }

    return (
        <form
            onSubmit={handleForSubmit}
        >
            국가명
            <input type="text" name="country" value={medalItem.country} onChange={handleChange} />
            금메달
            <input type="number" name="gold" value={medalItem.gold} onChange={handleChange} />
            은메달
            <input type="number" name="silver" value={medalItem.silver} onChange={handleChange} />
            동메달
            <input type="number" name="bronze" value={medalItem.bronze} onChange={handleChange} />
            <button type="submit" name="add">
                Add
            </button>
            <button type="submit" name="update">
                Update
            </button>
        </form>
    );
};

export default MedalForm;
