export function getLastMonday(dateString) {
    const date = new Date(dateString);
    const day = date.getDay();
    const diff = (day === 0 ? 6 : day - 1); // Calculate difference to last Monday
    const lastMonday = new Date(date);
    lastMonday.setDate(date.getDate() - diff);
    return lastMonday;
}