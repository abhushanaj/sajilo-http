import { CLIENT_CODES } from './client';
import { REDIRECT_CODES } from './redirects';
import { SUCCESS_CODES } from './success';

export const HTTP_CODES = {
	// 2xx codes
	...SUCCESS_CODES,
	// 3xx codes
	...REDIRECT_CODES,
	// 4xx codes
	...CLIENT_CODES
} as const;
