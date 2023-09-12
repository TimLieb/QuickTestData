export const createNewColumn = (id, name, type) => {
	return {
		id: id,
		name: name === null ? "Temp" : name,
		type: type === null ? "String" : type,
		configType: "value",
		listConfig: {
			type: "sample",
			id: "1",
		},
		valueConfig: {
			length: 6,
			lowerCase: true,
			upperCase: false,
			numbers: false,
			special: false,
		},
	};
};
