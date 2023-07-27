import { FiBarChart2, FiChevronRight } from 'react-icons/fi';

export default function Home() {
	return (
		<main>
			<section className="text-white relative bg-black">
				<div className="absolute left-0 top-0 w-full h-full">
					<div className="absolute left-0 top-0 w-full h-full bg-[url('/assets/poster-bg.webp')] bg-[length:240px] opacity-30 blur-sm" />
				</div>

				<div className="styles.userInfo">
					<h1 className="text-2xl font-bold">Hello, Miguel</h1>

					<div>
						<span>MEMBER SINCE</span>
						<span>29 JAN 2013 22:17</span>
					</div>

					<div className="grid grid-flow-col gap-2 items-center w-fit">
						<FiBarChart2 size={32} strokeWidth={3} />
						<span className="text-3xl font-semibold">2022</span>
						<div className="text-xs font-semibold">
							<p>YEAR</p>
							<p>TO DATE</p>
						</div>
						<FiChevronRight size={16} strokeWidth={3} />
					</div>
				</div>
			</section>
		</main>
	);
}
