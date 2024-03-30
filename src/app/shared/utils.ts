export const uuid = () => {
	return `${Math.random().toString(16).slice(2)}`;
};

export const isAlreadyExist = (arr: any[], id: string) => {
	return arr.findIndex((item) => {
		return item.id === id;
	});
};
export const insertItem = (arr: any[], item: any, index: number) => {
	let prev = [...arr.slice(0, index)];
	let after = [...arr.slice(index + 1)];
	return [...prev, item, ...after];
};
export const removeItem = (arr: any[], index: number) => {
	let prev = [...arr.slice(0, index)];
	let after = [...arr.slice(index + 1)];
	return [...prev, ...after];
};
