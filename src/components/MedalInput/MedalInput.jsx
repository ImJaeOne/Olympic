import './medal-input.css';

const MedalInput = ({ children, medalItem, name, handleChange }) => {
    return (
        <div className="medal-form-input-wrap">
            {children}
            <input
                className="medal-form-input"
                type="text"
                name={name}
                value={medalItem[name]}
                onChange={handleChange}
            />
        </div>
    );
};

export default MedalInput;


