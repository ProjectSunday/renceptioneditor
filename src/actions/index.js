export const addTest = (value) => {
	return {
		type: 'ADD_TEST',
		value
	}
}

let id = 0;
export const addBlock = (slotId, block) => {
	return {
		type: 'ADD_BLOCK',
		block
	}
}