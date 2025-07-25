import React from 'react'

type BuyPricePropsType = {
	buyPrice: number
	handleBuyPriceChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
export const BuyPrice = ({
	buyPrice,
	handleBuyPriceChange,
}: BuyPricePropsType) => {
	return (
		<div>
			<label htmlFor='buyPrice'>Цена покупки</label>
			<input type='number' value={buyPrice} onChange={handleBuyPriceChange} />
			<button>Цена покупки</button>
		</div>
	)
}
