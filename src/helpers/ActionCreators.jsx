export const createNewColumn = (id) => {
	return {
		id: id,
		name: "Temp",
		type: "String",
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
