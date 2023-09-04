export default function Conversor(amount: number, toCurrency: number) {
    let convertedAmount = 0;
    convertedAmount = amount / toCurrency;
    return convertedAmount;
};
