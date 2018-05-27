module.exports = {
    matchdayMake : (matchdays, result) => {
        const tab = [];
        for (let i = 1; i <= matchdays; i++) {
            let thisMatchday = [];
            for (let j = 0, size = result.length; j < size; j++) {
                if (result[j].matchday === i) {
                    thisMatchday.push(result[j]);
                }
            }
            tab.push(thisMatchday)
        }
        return tab;
    },

    voteIsPossible: date => {
        const matchStart = new Date(date);
        const now = new Date();
        if (matchStart.getTime() - now.getTime() < 60000) return false;
        else return true;
    }
}
