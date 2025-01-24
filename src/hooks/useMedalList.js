import { useState } from 'react';
import { setStorage, getStorage } from '../services/storage';

const validateMedalForm = (action, value, medalList) => {
    if (value.country === '' || value.gold === '' || value.silver === '' || value.bronze === '') {
        alert('모든 값을 기입해주세요.');
        return false;
    }
    if (action === 'add') {
        if (medalList.some((m) => m.country === value.country)) {
            alert('이미 등록되어있습니다. 업데이트해주세요.');
            return false;
        }
    }
    if (action === 'update') {
        if (!medalList.some((m) => m.country === value.country)) {
            alert('추가된 국가가 없습니다. 국가를 추가해주세요.');
            return false;
        }
    }
    return true;
};

export const useMedalList = (key) => {
    const [medalList, setMedalList] = useState(() => {
        return getStorage(key) || [];
    });
    const addMedal = (value) => {
        if (!validateMedalForm('add', value, medalList)) return;
        const updatedList = [...medalList, value];
        setMedalList(updatedList);
        setStorage(key, updatedList);
    };

    const updateMedal = (value) => {
        if (!validateMedalForm('update', value, medalList)) return;
        const updatedList = medalList.map((m) => (m.country === value.country ? { ...value } : m));
        setMedalList(updatedList);
        setStorage(key, updatedList);
    };

    const deleteMedal = (country) => {
        const updatedList = medalList.filter((m) => m.country !== country);
        setMedalList(updatedList);
        setStorage(key, updatedList);
    };

    return { medalList, addMedal, updateMedal, deleteMedal };
};
