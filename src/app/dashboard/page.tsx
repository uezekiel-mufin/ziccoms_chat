import Button from '@/components/ui/Button';
import { FunctionComponent } from 'react';

interface Props {}

const dashboard: FunctionComponent<Props> = () => {
	return (
		<div className='text-red-500'>
			<h1>Dashboard</h1>
			<Button>Click me</Button>
		</div>
	);
};

export default dashboard;
