import React, { FC, ChangeEvent } from 'react';

export type CurrencyType = "Dolar Blue" | "Dolar MEP" | "Dolar Oficial";


type CurrencySelectorProps = {
  currencies: CurrencyType[];
  selectedCurrency: CurrencyType;
  onCurrencyChange: (newCurrency: CurrencyType) => void;
  className?: string;
};

const CurrencySelector: FC<CurrencySelectorProps> = ({ currencies, selectedCurrency, onCurrencyChange, className }) => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onCurrencyChange(event.target.value as CurrencyType);
  };

  return (
    <select value={selectedCurrency} onChange={handleChange} className={`space-x-2 ${className}`} >
      {currencies.map((currency) => (
        <option key={currency} value={currency}>
          {currency}
        </option>
      ))}
    </select>
  );
};

export default CurrencySelector;
