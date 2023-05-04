
interface IMyInput {
	type: string
	poputValue?: string
	placeholder?: string,
	name: string
}

export const MyInput = ({ type, poputValue, placeholder, name }: IMyInput): JSX.Element => {
	return (
		<>
			{
				poputValue
					? <input className="my-input" type={type} name={name} value={poputValue} />
					: <input className="my-input" type={type} name={name} placeholder={placeholder ? placeholder : ''} />
			}
		</>
	);
}