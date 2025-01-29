import { useState } from 'react';

export const useMedalInput = () => {
    const [medalItem, setMedalItem] = useState({
        country: '',
        gold: 0,
        silver: 0,
        bronze: 0,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        const setValueType = name === 'country' ? value.trim() : isNaN(Number(value))
        ? 0
        : Number(value) ;
        setMedalItem({ ...medalItem, [name]: setValueType });
    };

    const resetForm = () => {
        setMedalItem({
            country: '',
            gold: 0,
            silver: 0,
            bronze: 0,
        });
    };

    return [medalItem, handleChange, resetForm];
};
