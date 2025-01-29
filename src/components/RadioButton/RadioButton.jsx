import './radio-button.css'

const RadioButton = ({ label, value, mode, handleMode }) => {
    return (
        <label htmlFor={value}>
            <input type="radio" id={value} value={value} checked={mode === value} onChange={handleMode} />
            <span>{label}</span>
        </label>
    );
};

export default RadioButton;
