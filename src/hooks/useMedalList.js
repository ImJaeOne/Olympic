import { useState } from 'react';
import { setStorage, getStorage, updateStorage, deleteStorageItem } from '../services/storage';

export const useMedalList = (key) => {
    const [medalList, setMedalList] = useState(getStorage(key));

    const addMedal = (value) => {
        const updatedList = [...medalList, value];
        setMedalList(updatedList);
        setStorage(key, updatedList);
    };

    const updateMedal = (value) => {
        const updatedList = medalList.map((m) =>
            m.country === value.country ? { ...value } : m
        );
        setMedalList(updatedList);
        updateStorage(key, updatedList);
    };

    const deleteMedal = (country) => {
        const updatedList = medalList.filter((m) => m.country !== country);
        setMedalList(updatedList);
        deleteStorageItem(key, country);
    };

    return { medalList, addMedal, updateMedal, deleteMedal };
};
