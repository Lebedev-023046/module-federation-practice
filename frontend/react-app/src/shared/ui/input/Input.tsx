import { useId } from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label?: string
}

export function Input(props: InputProps) {
	const { label } = props

	const id = useId()

	return (
		<div className='flex flex-col justify-center items-stretch flex-1 basis-10'>
			{label && (
				<label className='' htmlFor={id}>
					{label}
				</label>
			)}
			<input
				className='border border-blue-200 outline-blue-200 rounded-md px-4 py-2 h-full'
				id={id}
				{...props}
			/>
		</div>
	)
}
