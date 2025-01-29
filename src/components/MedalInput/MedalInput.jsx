import './medal-input.css';

const MedalInput = ({ label, medalItem, name, handleChange }) => {
    return (
        <label htmlFor={name} className="medal-form-input-wrap">
            {label}
            <input
                className="medal-form-input"
                type="text"
                id={name}
                name={name}
                value={medalItem[name]}
                onChange={handleChange}
            />
        </label>
    );
};

export default MedalInput;


