import clsx from 'clsx'
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children?: React.ReactNode
}

export function Button(props: ButtonProps) {
	const { children, className, ...rest } = props

	return (
		<button
			className={clsx(
				'px-6 py-2 bg-blue-100 cursor-pointer rounded-md hover:bg-blue-200 transition-colors duration-200',
				className
			)}
			{...rest}
		>
			{children}
		</button>
	)
}
