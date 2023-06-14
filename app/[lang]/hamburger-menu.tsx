'use client';

import { useState } from 'react';
import Image from 'next/image';
import hamburger from '@/assets/hamburger.svg';
import close from '@/assets/close.svg';

interface IHamburgerMenuProps {
	children: React.ReactNode;
}

export default function HamburgerMenu({ children }: IHamburgerMenuProps) {
	const [isOpen, setIsOpen] = useState(false);

	const handleClose = () => setIsOpen(false);

	if (isOpen) {
		return (
			<>
				<Image
					onClick={handleClose}
					src={close}
					alt="Close"
					width={32}
					height={32}
					className="sm:hidden cursor-pointer z-10"
				/>

				<div
					onClick={handleClose}
					className="fixed top-0 left-0 w-full h-full bg-black/50 backdrop-blur-sm grid place-items-center text-lg sm:text-xl"
				>
					{children}
				</div>
			</>
		);
	}

	return (
		<Image
			onClick={() => setIsOpen(true)}
			src={hamburger}
			alt="Menu"
			width={32}
			height={32}
			className="sm:hidden cursor-pointer"
		/>
	);
}
