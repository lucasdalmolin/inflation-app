"use client"
import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import Input from './Input';
import CurrencySelector, { CurrencyType } from './CurrencySelector';

const Conversor = () => {
    const [amount, setAmount] = useState<number>(0);
    const [convertedAmount, setConvertedAmount] = useState<number>(0);
    const [selectedCurrency, setSelectedCurrency] = useState<CurrencyType>("Dolar Blue");
    const [isConvertingToDollar, setIsConvertingToDollar] = useState(true);

    const [exchangeRates, setExchangeRates] = useState<{ [key: string]: number }>({
      "Dolar Blue": 700,
      "Dolar MEP": 680,
      "Dolar Oficial": 500,
    });
  
    const currencyKeys = Object.keys(exchangeRates) as CurrencyType[];
  
    const toggleConversionDirection = () => {
        setIsConvertingToDollar(!isConvertingToDollar);
    };
    

    const handleAmountChange = (value: number) => {
        setAmount(value);
        const rate = exchangeRates[selectedCurrency];
        if (rate) {
            setConvertedAmount(isConvertingToDollar ? value * rate : value / rate);
        }
    };
    
    const handleCurrencyChange = (newCurrency: CurrencyType) => {
        setSelectedCurrency(newCurrency);
        const rate = exchangeRates[newCurrency];
        if (rate) {
            setConvertedAmount(isConvertingToDollar ? amount * rate : amount / rate);
        }
    };
    
  
    return (
<div className='container mx-auto mt-10'>
    <div className='flex flex-row items-center space-x-4'>
        <Input 
            label='Importe en pesos' 
            value={amount} 
            onChange={handleAmountChange} 
            className='w-1/4'
        />
        <button 
            className='bg-blue-500 text-white p-2 rounded' 
            onClick={toggleConversionDirection}
        >
            {/* Aquí puedes poner tu ícono. Ejemplo con texto por ahora: */}
            <span>↔️</span>
        </button>
        <CurrencySelector 
            currencies={currencyKeys} 
            selectedCurrency={selectedCurrency} 
            onCurrencyChange={handleCurrencyChange} 
            className='w-1/4'
        />
        <Input 
            label='Convertido a dólar' 
            value={convertedAmount} 
            readOnly={true} 
            className='w-1/4'
        />
    </div>
    <div className='result-section mt-10 text-white'>
        <p>Monto original en pesos: {amount}</p>
        <p>Monto convertido a {selectedCurrency}: {convertedAmount}</p>
        <p>Tasa de cambio: 1 Peso Argentino = {exchangeRates[selectedCurrency]} {selectedCurrency}</p>
    </div>
</div>

    );
  };
  

export default Conversor;
