import { CHANGE_AUTH } from './types';

export function authenticate(status) {
	return {
		type: CHANGE_AUTH,
		payload: status
	};
}