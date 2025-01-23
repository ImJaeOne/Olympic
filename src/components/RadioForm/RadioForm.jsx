import React from 'react';
import './RadioForm.css'

export const RadioForm = ({mode, handleMode}) => {
    return (
        <form>
            <label>
                <input type="radio" value="sortByGold" checked={mode === 'sortByGold'} onChange={handleMode} />
                <span>Gold</span>
            </label>
            <label>
                <input type="radio" value="sortByTotal" checked={mode === 'sortByTotal'} onChange={handleMode} />
                <span>Total</span>
            </label>
        </form>
    );
};

export default RadioForm;
