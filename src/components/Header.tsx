import Image from 'next/image';
import Link from 'next/link';
import { FiSearch, FiMenu } from 'react-icons/fi';

export function Header() {
	return (
		<header className="flex items-center justify-between fixed w-full p-2 bg-black bg-opacity-60 transition-all duration-700 z-10 hover:bg-opacity-90">
			<FiSearch color="white" size={20} strokeWidth={3} />

			<Link href="/">
				<Image
					alt="Trakt logo: a red circle with an inclined letter T"
					src="/assets/logo.webp"
					width={40}
					height={40}
				/>
			</Link>

			<div className="flex gap-2 items-center">
				<FiMenu color="white" size={25} strokeWidth={3} />
				<Image
					alt="The user's profile picture"
					src="https://github.com/miguelriosoliveira.png"
					width={35}
					height={35}
					className="rounded-full"
				/>
			</div>
		</header>
	);
}
