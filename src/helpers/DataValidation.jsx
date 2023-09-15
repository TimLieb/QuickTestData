export const parseLen = (len) => {
	var values = len.split("-");
	return values.map((value) => parseInt(value));
};

export const validateLength = (len) => {
	const values = parseLen(len);
	return (
		values.length > 2 ||
		values.includes(NaN) ||
		values[0] > values[1] ||
		values[0] > 50 ||
		values[1] > 50
	);
};

export const validatePercentages = (nullsVal, emptiesVal) => {
	const nulls = nullsVal === "" ? 0 : parseInt(nullsVal);
	const empties = emptiesVal === "" ? 0 : parseInt(emptiesVal);
	return nulls + empties <= 100 === false;
};

export const validateBoxes = (name, column) => {
	switch (name) {
		case "lowerCase":
			var newConfig = {
				...column.valueConfig,
				lowerCase: !column.valueConfig.lowerCase,
			};
			break;
		case "upperCase":
			var newConfig = {
				...column.valueConfig,
				upperCase: !column.valueConfig.upperCase,
			};
			break;
		case "numbers":
			var newConfig = {
				...column.valueConfig,
				numbers: !column.valueConfig.numbers,
			};
			break;
		case "special":
			var newConfig = {
				...column.valueConfig,
				special: !column.valueConfig.special,
			};
			break;
	}

	return !newConfig.lowerCase &&
		!newConfig.upperCase &&
		!newConfig.numbers &&
		!newConfig.special
		? {
				...newConfig,
				boxError: true,
		  }
		: {
				...newConfig,
				boxError: false,
		  };
};
