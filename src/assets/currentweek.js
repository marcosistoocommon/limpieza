export function getLastMonday(dateString) {
    const date = new Date(dateString);
    const day = date.getDay();
    if(day>8){
        const diff = (day === 0 ? 6 : day - 1); 
    }
    else{
        const month = date.getMonth();
        //31 dias
        if((month === 11 || month === 9 || month === 7 || month === 6 || month === 4 || month === 2 || month === 0)){
            const diff = 31 - (day === 0 ? 6 : day - 1);
        }
        //30 dias
        else if((month === 10 || month === 8 || month === 5 || month === 3)){
            const diff = 30 - (day === 0 ? 6 : day - 1);
        }
        else{
            const year = date.getFullYear();
            // bisiestos
            if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
                const diff = 29 - (day === 0 ? 6 : day - 1);
            }
            //resto
            else{
            const diff = 28 - (day === 0 ? 6 : day - 1);
            }
        }
    }
    const lastMonday = new Date(date);
    lastMonday.setDate(date.getDate() - diff);
    return lastMonday;
}