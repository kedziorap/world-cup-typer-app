const ad0 = liczba => {
    if (liczba < 10) return '0'+liczba;
    else return liczba;
}
module.exports = {
    
    pointsEnd: (point)=> {
        if (point === 0) return 'punktów';
        if (point === 1 ) return 'punkt';
        else return 'punkty';
    },
    
    isTimed: (status)=> {
        if (status === 'TIMED') return true;
        return false;
    },
    
    isScheduled: (status) => {
        if (status === 'SCHEDULED') return true;
        return false;
    },
    
    isTyped: (it) => {
        if (it===null) return false;
        if (it >= 0) return true;
    },
    typesReady: (kolejka) => {
        return kolejka.filter((m)=>m.typed==1).length + '/'+ kolejka.length
    },
    inc: inc => inc + 1,
    isFinished: (status) => {
        if (status === 'FINISHED') return true;
        return false;
    },
    showDate: data => {
        const a = new Date(data);
        return ad0(a.getDate())+'/'+ad0(a.getMonth()+1)+'/'+ad0(a.getFullYear()) + ' || '+ad0(a.getHours())+':'+ad0(a.getMinutes())
    },
    canVote: date => {
        const matchStart = new Date(date);
        const now = new Date();
        if (matchStart.getTime()-now.getTime() < 60000) return false;
        else return true;
    },
    cannotVote: a => {
        if (a === true) return false;
        else return true;
    }
    
}