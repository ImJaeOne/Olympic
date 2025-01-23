import { React, useState } from 'react';
import './MedalForm.css';

const MedalForm = ({ handleSubmit }) => {
    const [medalItem, setMedalItem] = useState({
        country: '',
        gold: 0,
        silver: 0,
        bronze: 0,
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
    };

    return (
        <form onSubmit={handleForSubmit} className="medal-form">
            <div className="medal-form-input-wrap">
                국가명
                <input
                    className="medal-form-input"
                    type="text"
                    name="country"
                    value={medalItem.country}
                    onChange={handleChange}
                />
            </div>

            <div className="medal-form-input-wrap">
                금메달
                <input
                    className="medal-form-input"
                    type="number"
                    name="gold"
                    value={medalItem.gold}
                    onChange={handleChange}
                />
            </div>

            <div className="medal-form-input-wrap">
                <span>은메달</span>
                <input
                    className="medal-form-input"
                    type="number"
                    name="silver"
                    value={medalItem.silver}
                    onChange={handleChange}
                />
            </div>
            <div className="medal-form-input-wrap">
                동메달
                <input
                    className="medal-form-input"
                    type="number"
                    name="bronze"
                    value={medalItem.bronze}
                    onChange={handleChange}
                />
            </div>
            <div className="medal-form-btn-wrap">
                <button className="medal-form-btn" type="submit" name="add">
                    Add
                </button>
                <button className="medal-form-btn" type="submit" name="update">
                    Update
                </button>
            </div>
        </form>
    );
};

export default MedalForm;
