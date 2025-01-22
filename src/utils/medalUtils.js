export const sortByMode = (medalList, mode) => {
    return [...medalList].sort((a, b) => {
        if (mode === 'sortByGold') {
            return b.gold - a.gold;
        } else if (mode === 'sortByTotal') {
            const totalA = a.gold + a.silver + a.bronze;
            const totalB = b.gold + b.silver + b.bronze;
            return totalB - totalA;
        }
        return 0;
    });
};

export const sortByRank = (sortedMedals, mode) => {
    let rank = 1;
    let rankSkip = 0;
    let prevMedals = null;

    return sortedMedals.map((m, index) => {
        if (mode === 'sortByGold') {
            if (index === 0 || (prevMedals && prevMedals.gold === m.gold)) {
                m.rank = rank;
                rankSkip++;
            } else {
                rank += rankSkip;
                m.rank = rank;
                rankSkip = 1;
            }
            prevMedals = { gold: m.gold, silver: m.silver, bronze: m.bronze };
        } else if (mode === 'sortByTotal') {
            if (
                index === 0 ||
                (prevMedals && prevMedals.gold + prevMedals.silver + prevMedals.bronze === m.gold + m.silver + m.bronze)
            ) {
                m.rank = rank;
                rankSkip++;
            } else {
                rank += rankSkip;
                m.rank = rank;
                rankSkip = 1;
            }
            prevMedals = { gold: m.gold, silver: m.silver, bronze: m.bronze };
        }
        return m;
    });
};
