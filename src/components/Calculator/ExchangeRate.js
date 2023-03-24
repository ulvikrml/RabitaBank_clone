import React, { useState } from 'react'

const ExchangeRate = () => {
    console.log('exchangerate');
    const cash = [
        {
            id: 1,
            exchange: 'rub',
            buy_amount: '0.0255',
            buy_amount_wave: 'static',
            sale_amount: '0.028',
            sale_amount_wave: 'increasen',
            central_bank: '0.0265',
            central_bank_wave: 'increasen'
        },
        {
            id: 2,
            exchange: 'gbp',
            buy_amount: '1.885',
            buy_amount_wave: 'increasen',
            sale_amount: '1.953',
            sale_amount_wave: 'increasen',
            central_bank: '1.9242',
            central_bank_wave: 'increasen'
        },
        {
            id: 3,
            exchange: 'usd',
            buy_amount: '1.69',
            buy_amount_wave: 'static',
            sale_amount: '1.702',
            sale_amount_wave: 'static',
            central_bank: '1.7',
            central_bank_wave: 'static'
        },
        {
            id: 4,
            exchange: 'eur',
            buy_amount: '1.648',
            buy_amount_wave: 'increasen',
            sale_amount: '1.688',
            sale_amount_wave: 'increasen',
            central_bank: '1.6629',
            central_bank_wave: 'increasen'
        }
    ]
    const cashless = [
        {
            id: 1,
            exchange: 'rub',
            buy_amount: '0.0255',
            buy_amount_wave: 'static',
            sale_amount: '0.028',
            sale_amount_wave: 'increasen',
            central_bank: '0.0265',
            central_bank_wave: 'increasen'
        },
        {
            id: 2,
            exchange: 'gbp',
            buy_amount: '1.882',
            buy_amount_wave: 'increasen',
            sale_amount: '1.948',
            sale_amount_wave: 'increasen',
            central_bank: '1.9242',
            central_bank_wave: 'increasen'
        },
        {
            id: 3,
            exchange: 'usd',
            buy_amount: '1.695',
            buy_amount_wave: 'static',
            sale_amount: '1.7025',
            sale_amount_wave: 'static',
            central_bank: '1.7',
            central_bank_wave: 'static'
        },
        {
            id: 4,
            exchange: 'eur',
            buy_amount: '1.643',
            buy_amount_wave: 'increasen',
            sale_amount: '1.683',
            sale_amount_wave: 'increasen',
            central_bank: '1.6629',
            central_bank_wave: 'increasen'
        }
    ]
    const [cashActive, setCashActive] = useState(true);
    const [table, setTable] = useState(cash);
    const cashHandler = () => {
        cashActive ? setTable(cashless) : setTable(cash);
        setCashActive(!cashActive);
    }

    return (
        <div>
            <div className='flex mb-2 items-center'>
            <h2 className='text-2xl font-semibold'>Valyuta kursu</h2>
            <button className='border p-3 bg-gray-500' onClick={cashHandler}>{cashActive ? 'Nağdsız' : 'Nağd'}</button>
            </div>
            <table className='w-full table-fixed border-separate border-spacing-y-2'>
                <thead>
                    <tr className='text-left'>
                        <th>Valyuta</th>
                        <th>Alış</th>
                        <th>Satış</th>
                        <th>Mərkəzi Bank</th>
                    </tr>
                </thead>
                <tbody className='text-left'>
                    {table.map(e => {
                        return <tr className='text-left pt-10' key={e.id}>
                            <td>{e.exchange}</td>
                            <td>{e.sale_amount}</td>
                            <td>{e.buy_amount}</td>
                            <td>{e.central_bank}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default ExchangeRate