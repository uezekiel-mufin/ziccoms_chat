import { db } from '@/lib/db';

export default async function Home() {
	await db.set('test', 'test');
	return (
		<main>
			<h1>Home</h1>
		</main>
	);
}
