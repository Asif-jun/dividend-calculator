import * as React from 'react'
type DividendYieldPropsType = {
	dividendYield: number
	handleDividendYieldChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
export const DividendYield = ({
	dividendYield,
	handleDividendYieldChange,
}: DividendYieldPropsType) => {
	return (
		<div>
			<label htmlFor='dividendYield'>Дивидендная доходность</label>
			<input
				type='number'
				value={dividendYield}
				onChange={handleDividendYieldChange}
			/>
		</div>
	)
}
