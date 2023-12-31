import { randomId } from "@mui/x-data-grid-generator";

export const createNewColumn = (id, name) => {
	const type = "String";

	return {
		id: id,
		name: name,
		type: type,
		configType: "value",
		listConfig: {
			type: "sample",
			id: 1,
		},
		valueConfig: createVConfig(type),
		addConfig: {
			error: false,
			nullsVal: "",
			emptiesVal: "",
		},
	};
};

export const createVConfig = (type) => {
	switch (type) {
		case "String":
			return {
				boxError: false,
				lenError: false,
				length: "6",
				lowerCase: true,
				upperCase: false,
				numbers: false,
				special: false,
			};
		case "Number":
			return {
				lenError: false,
				length: "6",
				decimalPlaces: 0,
			};
		case "Boolean":
			return {
				error: false,
				true: true,
				false: true,
			};
		case "Date/Time":
			return {
				startDate: "2023-01-01",
				endDate: "2023-12-31",
				time: true,
				startTime: "2000-01-01 08:00",
				endTime: "2000-01-01 18:00",
			};
	}
};

export const createInitialCustomLists = () => {
	let values = [
		{
			id: 1,
			values: "Custom Item 1",
		},
		{
			id: 2,
			values: "Custom Item 2",
		},
		{
			id: 3,
			values: "Custom Item 3",
		},
	];

	for (let i = 4; i < 101; i++) {
		values.push({ id: i, values: "" });
	}

	return [
		{
			id: randomId(),
			name: "Custom List 1",
			values: values,
		},
	];
};
