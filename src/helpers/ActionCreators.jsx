export const createNewColumn = (id, name) => {
	return {
		id: id,
		name: name,
		type: "String",
		configType: "value",
		listConfig: {
			type: "sample",
			id: "1",
		},
		valueConfig: {
			boxError: false,
			lenError: false,
			length: "6",
			lowerCase: true,
			upperCase: false,
			numbers: false,
			special: false,
		},
		addConfig: {
			error: false,
			nullsVal: "",
			emptiesVal: "",
		},
	};
};
