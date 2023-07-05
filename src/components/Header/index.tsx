import Image from 'next/image';
import Link from 'next/link';
import { FiSearch, FiMenu } from 'react-icons/fi';

import styles from './styles.module.scss';

export function Header() {
	return (
		<header data-testid="header" className={styles.container}>
			<FiSearch color="white" size={20} strokeWidth={3} />

			<Link href="/" className={styles.logo}>
				<Image
					alt="Trakt logo: a red circle with an inclined letter T"
					src="https://trakt.tv/assets/logos/header@2x-d6926a2c93734bee72c5813819668ad494dbbda651457cd17d15d267bc75c657.png"
					width={40}
					height={40}
				/>
			</Link>

			<div className={styles.menus}>
				<FiMenu color="white" size={25} strokeWidth={3} />
				<Image
					alt="The user's profile picture"
					src="https://github.com/miguelriosoliveira.png"
					width={35}
					height={35}
				/>
			</div>
		</header>
	);
}
