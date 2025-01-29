import './medal-form.css';
import MedalInput from '../MedalInput/MedalInput';
import { useMedalInput } from '../../hooks/useMedalInput';

const MedalForm = ({ addMedal, updateMedal }) => {
    const [medalItem, handleChange, resetForm] = useMedalInput();
    const handleSubmit = (e) => {
        e.preventDefault();
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
            <MedalInput label={'국가명'} medalItem={medalItem} name={'country'} handleChange={handleChange}/>
            <MedalInput label={'금메달'}medalItem={medalItem} name={'gold'} handleChange={handleChange}/>
            <MedalInput label={'은메달'}medalItem={medalItem} name={'silver'} handleChange={handleChange}/>
            <MedalInput label={'동메달'}medalItem={medalItem} name={'bronze'} handleChange={handleChange}/>
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
