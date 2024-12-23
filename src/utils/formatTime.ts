export function formatTime(date: Date) {
    return new Intl.DateTimeFormat('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
    })
        .format(date)
        .replace(' ', '')
        .toLowerCase();
}
