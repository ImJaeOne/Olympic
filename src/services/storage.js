export const setStorage = (key, value) => {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
        console.error('Failed setStorage : ', err);
    }
};

export const getStorage = (key) => {
    try {
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) : null;
    } catch (err) {
        console.error('Failed getStorage : ', err);
        return null;
    }
};

export const updateStorage = (key, value) => {
    try{
        const getStorageList = getStorage(key) || [];
        const updateListItem = getStorageList.map((item) => {
            return item.country === value.country ? value : item
        });
        getStorage(key, updateListItem);
    } catch(err){
        console.error('Failed to updateStorage : ', err);
    }
}

export const deleteStorageItem = (key, country) => {
    try {
        const getStorageList = getStorage(key) || [];
        const deleteListItem = getStorageList.filter((item) => item.country !== country);
        setStorage(key, deleteListItem);
    } catch (err) {
        console.error('Failed to deleteStorageItem : ', err);
    }
};
