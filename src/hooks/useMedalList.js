import { useState } from 'react';
import { setStorage, getStorage, deleteStorageItem } from '../services/storage';

const validateMedalForm = (value, medalList) => {
    if (value.country === '' || value.gold === '' || value.silver === '' || value.bronze === '') {
        alert('모든 값을 기입해주세요.');
        return;
    }
    if (medalList.some((m) => m.country === value.country)) {
        alert('이미 등록되어있습니다. 업데이트해주세요.');
        return;
    }
}

export const useMedalList = (key) => {
    const [medalList, setMedalList] = useState(() => {
        return getStorage(key) || []
    });
    const addMedal = (value) => {
        validateMedalForm(value, medalList);
        const updatedList = [...medalList, value];
        setMedalList(updatedList);
        setStorage(key, updatedList);
    };

    const updateMedal = (value) => {
        validateMedalForm(value, medalList);
        const updatedList = medalList.map((m) => (m.country === value.country ? { ...value } : m));
        setMedalList(updatedList);
        setStorage(key, updatedList);
    };

    const deleteMedal = (country) => {
        const updatedList = medalList.filter((m) => m.country !== country);
        setMedalList(updatedList);
        deleteStorageItem(key, country);
    };

    return { medalList, addMedal, updateMedal, deleteMedal };
};
