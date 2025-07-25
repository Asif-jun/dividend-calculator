import React, { useState } from 'react'
import { Ticker } from './components/Ticker'
import { Quantity } from './components/Quantity'
import { BuyPrice } from './components/BuyPrice'
import { DividendYield } from './components/DividendYield'

export type infoType = {
	ticker: string
	quantity: number
	buyPrice: number
	dividendYield: number
}

export function App() {
	const [ticker, setTicker] = useState('')
	// Обработчик изменения поля "Тикер акции"
	const handleTickerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		return setTicker(e.target.value)
	}

	// Добавляем акции в поле "Тикер акции"
	const addTickerValue = () => {}

	const [quantity, setQuantity] = useState(0)
	// Обработчик изменения поля "Количество акций"
	const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setQuantity(Number(e.target.value))
	}

	const [buyPrice, setBuyPrice] = useState(0)
	// Обработчик изменения поля "Цена покупки"
	const handleBuyPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setBuyPrice(Number(e.target.value))
	}
	const [dividendYield, setDividendYield] = useState(0)
	// Обработчик изменения поля "Дивидендная доходность"
	const handleDividendYieldChange = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		setDividendYield(Number(e.target.value))
	}

	return (
		<div className='container'>
			<h1>Калькулятор дивидендов</h1>
			<form action=''>
				<Ticker ticker={ticker} handleTickerChange={handleTickerChange} />
				<Quantity
					quantity={quantity}
					handleQuantityChange={handleQuantityChange}
				/>
				<BuyPrice
					buyPrice={buyPrice}
					handleBuyPriceChange={handleBuyPriceChange}
				/>
				<DividendYield
					dividendYield={dividendYield}
					handleDividendYieldChange={handleDividendYieldChange}
				/>
			</form>
		</div>
	)
}
