import React from 'react'

type TickerPropsType = {
	ticker: string
	handleTickerChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
export const Ticker = ({ ticker, handleTickerChange }: TickerPropsType) => {
	return (
		<div>
			<label htmlFor='ticker'>Тикер акции</label>
			<input id='ticker' value={ticker} onChange={handleTickerChange} />
			<button onClick={() => console.log('Выбрана акция')}>
				Выбрать акцию
			</button>
		</div>
	)
}
