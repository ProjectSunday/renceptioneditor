export const addTest = (value) => {

	console.log('addTest', value);
	
	return {
		type: 'ADD_TEST',
		value
	}
}