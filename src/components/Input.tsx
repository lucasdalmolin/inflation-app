import React, { FC, ChangeEvent } from 'react'

type InputProps = {
    label?: string;
    value?: number;
    onChange?: (value: number) => void;
    readOnly?: boolean;
    className?: string;
};

const Input: FC<InputProps> = ({ label, value, onChange, readOnly, className }) => {
    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = parseFloat(e.target.value);
        if (onChange) {
            onChange(newValue);
        }
    };

    return (
        <div className={`space-x-2 ${className}`}>
            <label className='text-white' htmlFor="">{ label }</label>
            <input 
                className='text-red' 
                type="number" 
                value={value} 
                onChange={handleOnChange} 
                readOnly={readOnly} 
            />
        </div>
    );
}


export default Input;
