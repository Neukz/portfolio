interface ITitleProps {
	children: React.ReactNode;
}

export default function Title({ children }: ITitleProps) {
	return (
		<div className="flex flex-col gap-3 items-center">
			<h2 className="text-3xl sm:text-6xl font-bold">{children}</h2>
			<div className="w-16 h-1 bg-primary rounded-full"></div>
		</div>
	);
}
