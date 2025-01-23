export const sortByMode = (medalList, mode) => {
    return [...medalList].sort((a, b) => {
        if (mode === 'sortByGold') {
            if (b.gold !== a.gold) {
                return b.gold - a.gold;
            } else {
                if (b.silver !== a.silver) {
                    return b.silver - a.silver;
                } else if (b.bronze !== a.bronze) {
                    return b.bronze - a.bronze;
                } else {
                    return a.country.localeCompare(b.country);
                }
            }
        } else if (mode === 'sortByTotal') {
            const totalA = a.gold + a.silver + a.bronze;
            const totalB = b.gold + b.silver + b.bronze;
            if (totalB !== totalA) {
                return totalB - totalA;
            } else {
                if (b.gold !== a.gold) {
                    return b.gold - a.gold;
                } else {
                    return a.country.localeCompare(b.country);
                }
            }
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
