import React from 'react'

type QuantityPropsType = {
	quantity: number
	handleQuantityChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
export const Quantity = ({
	quantity,
	handleQuantityChange,
}: QuantityPropsType) => {
	return (
		<div>
			<label htmlFor='quantity'>Количество акций</label>
			<input type='number' value={quantity} onChange={handleQuantityChange} />
			<button>Количество</button>
		</div>
	)
}
