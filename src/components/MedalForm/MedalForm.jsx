import { React } from 'react';
import './MedalForm.css';
import MedalInput from '../MedalInput/MedalInput';
import { useMedalInput } from '../../hooks/useMedalInput';

const MedalForm = ({ addMedal, updateMedal }) => {
    const [medalItem, handleChange, resetForm] = useMedalInput();
    const validateForm = () => {
        if (!medalItem.country) {
            alert('국가명을 입력해주세요');
            return false;
        }
        return true;
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) return;
        const action = e.nativeEvent.submitter.name;
        if (action === 'add') {
            addMedal(medalItem);
        } else if (action === 'update') {
            updateMedal(medalItem);
        }
        resetForm();
    };
    return (
        <form onSubmit={handleSubmit} className="medal-form">
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
