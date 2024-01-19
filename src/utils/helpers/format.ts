export const FormatCountNumber = (value: number) => {
    if(value >= 0 && value < 10) {
        return `000${value}`;
    }
    else if(value >= 10 && value < 100) {
        return `00${value}`;
    }
    else if(value >= 100 && value < 1000) {
        return `0${value}`;
    }
    else if(value >= 1000 && value < 10000) {
        return `${value}`;
    }

    return '';
}