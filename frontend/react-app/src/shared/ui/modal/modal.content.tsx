import clsx from 'clsx'
import { IoClose } from 'react-icons/io5'
import { useModalCtx } from './modal.context'
import type { ModalContentProps } from './modal.types'

const positionStyles =
	'fixed top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2'

export function ModalContent({
	children,
	title,
	description
}: ModalContentProps) {
	const api = useModalCtx()

	const renderedChildren =
		typeof children === 'function' ? children(api) : children

	return (
		<div>
			<div className='fixed z-10 top-0 left-0 w-full h-full bg-black/50'></div>
			<div
				className={clsx(
					positionStyles,
					'bg-white z-100 flex flex-col gap-4 p-6 rounded-lg max-w-1/2 min-w-1/3'
				)}
			>
				<IoClose
					onClick={api.close}
					className='absolute top-4 right-4 ml-auto text-2xl cursor-pointer'
				/>
				<div className='flex flex-col gap-2 items-center'>
					{(title || description) && (
						<>
							<div className='text-2xl font-bold'>
								{title && <h2>{title}</h2>}
							</div>
							<div className='text-xl font-medium'>
								{description && <h3>{description}</h3>}
							</div>
						</>
					)}
				</div>
				<div className='justify-center items-center'>{renderedChildren}</div>
			</div>
		</div>
	)
}
