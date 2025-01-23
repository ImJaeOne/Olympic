import { React, useState } from 'react';
import './MedalForm.css';
import MedalInput from '../MedalInput/MedalInput';

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
        e.preventDefault();
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
            <MedalInput medalItem={medalItem} name={'country'} handleChange={handleChange}>
                국가명
            </MedalInput>
            <MedalInput medalItem={medalItem} name={'gold'} handleChange={handleChange}>
                금메달
            </MedalInput>
            <MedalInput medalItem={medalItem} name={'silver'} handleChange={handleChange}>
                은메달
            </MedalInput>
            <MedalInput medalItem={medalItem} name={'bronze'} handleChange={handleChange}>
                동메달
            </MedalInput>
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
