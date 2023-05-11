import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import { Loader2 } from 'lucide-react';
import { ButtonHTMLAttributes, FunctionComponent } from 'react';

export interface ButtonProps {}

const buttonVariants = cva('active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-medium transition ease-in-out duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-400 disabled:opacity-50 disabled:pointer-events-none', {
	variants: {
		variant: {
			default: 'bg-slate-900 hover:bg-slate-800 text-white',
			ghost: 'bg-transparent hover:bg-slate-100 text-slate-900',
		},
		size: {
			default: 'h-10 py-2 px-4',
			sm: 'h-9 px-2',
			lg: 'h-11 px-8',
		},
	},
	defaultVariants: {
		variant: 'default',
		size: 'default',
	},
});

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
	isLoading?: boolean;
}
const Button: FunctionComponent<ButtonProps> = ({ className, children, variant, isLoading, size, ...props }) => {
	return (
		<button className={cn(buttonVariants({ variant, size, className }))} {...props}>
			{isLoading ? <Loader2 className='mr-2 h-4 w-4 animate-spin' /> : null}
			{children}
		</button>
	);
};

export default Button;
