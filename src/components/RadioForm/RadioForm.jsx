import RadioButton from '../RadioButton/RadioButton';

export const RadioForm = ({mode, handleMode}) => {
    return (
        <form>
            <RadioButton label={'Gold'} value={'sortByGold'} mode={mode} handleMode={handleMode}/>
            <RadioButton label={'Total'} value={'sortByTotal'} mode={mode} handleMode={handleMode}/>
        </form>
    );
};

export default RadioForm;
