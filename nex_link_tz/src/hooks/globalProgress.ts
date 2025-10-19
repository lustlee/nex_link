import { useEffect, useLayoutEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useIsFetching, useIsMutating } from '@tanstack/react-query';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

NProgress.configure({
	showSpinner: false,
	trickleSpeed: 200,
	minimum: 0.2
});

export const GlobalProgress = () => {
	const location = useLocation();
	const isFetching = useIsFetching();
	const isMutating = useIsMutating();
	const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
	
	useLayoutEffect(() => {
		NProgress.start();
	}, [location.pathname]);
	
	useEffect(() => {
		if (isFetching || isMutating) {
			NProgress.start();
		} else {
			if (timer.current) clearTimeout(timer.current);
			timer.current = setTimeout(() => NProgress.done(), 150);
		}
		
		return () => {
			if (timer.current) clearTimeout(timer.current);
		};
	}, [isFetching, isMutating, location.pathname]);
	
	return null;
};
