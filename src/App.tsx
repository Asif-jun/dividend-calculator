import React, { useState } from 'react'

export function App() {
	const [ticker, setTicker] = useState('')
	// Обработчик изменения поля "Тикер акции"
	const handleTickerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		return setTicker(e.target.value)
	}

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
				<div>
					<label htmlFor='ticker'>Тикер акции</label>
					<input value={ticker} onChange={handleTickerChange} />
					<button>Выбрать акцию</button>
				</div>
				<div>
					<label htmlFor='quantity'>Количество акций</label>
					<input
						type='number'
						value={quantity}
						onChange={handleQuantityChange}
					/>
					<button>Количество</button>
				</div>
				<div>
					<label htmlFor='buyPrice'>Цена покупки</label>
					<input
						type='number'
						value={buyPrice}
						onChange={handleBuyPriceChange}
					/>
					<button>Цена покупки</button>
				</div>
				<div>
					<label htmlFor='dividendYield'>Дивидендная доходность</label>
					<input
						type='number'
						value={dividendYield}
						onChange={handleDividendYieldChange}
					/>
				</div>
			</form>
		</div>
	)
}
