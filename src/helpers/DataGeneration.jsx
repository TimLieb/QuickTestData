import { parseLen } from "./DataValidation";

export const generateString = (length, characters) => {
	let counter = 0;
	let result = "";
	while (counter < length) {
		result += characters.charAt(
			Math.floor(Math.random() * characters.length)
		);
		counter += 1;
	}
	return result;
};

export const configureCharacters = (config) => {
	const lower = "abcdefghijklmnopqrstuvwxyz";
	const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	const numbers = "0123456789";
	const special = "!?$%-_#";
	let characters = "";
	characters = config.lowerCase ? characters.concat(lower) : characters;
	characters = config.upperCase ? characters.concat(upper) : characters;
	characters = config.numbers ? characters.concat(numbers) : characters;
	characters = config.special ? characters.concat(special) : characters;

	return characters;
};

export const generateStringLength = (range) => {
	const min = Math.ceil(range[0]);
	const max = Math.floor(range[1]);
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

//copied from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
const shuffle = (array) => {
	let currentIndex = array.length,
		randomIndex;

	while (currentIndex > 0) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		[array[currentIndex], array[randomIndex]] = [
			array[randomIndex],
			array[currentIndex],
		];
	}

	return array;
};

export const generateColumnData = (id, columnsValue, count) => {
	const column = columnsValue.columns.find((columnValue) => {
		return columnValue.id === id;
	});
	let nulls = parseInt((parseInt(column.addConfig.nullsVal) / 100) * count);
	let empties = parseInt(
		(parseInt(column.addConfig.emptiesVal) / 100) * count
	);
	nulls = nulls ? nulls : 0;
	empties = empties ? empties : 0;
	let Arr = nulls > 0 ? Array(nulls).fill("null") : [];
	Arr = empties > 0 ? Arr.concat(Array(empties).fill("")) : Arr;
	const remainingCount = count - nulls - empties;

	switch (column.type) {
		case "String":
			const strCharacters = configureCharacters(column.valueConfig);
			let strRange = parseLen(column.valueConfig.length);
			strRange =
				strRange.length === 1 ? strRange.concat(strRange[0]) : strRange;
			for (let i = 0; i < remainingCount; i++) {
				let strLen = generateStringLength(strRange);
				Arr = Arr.concat(generateString(strLen, strCharacters));
			}
			break;
		case "Number":
			const characters = "0123456789";
			let range = parseLen(column.valueConfig.length);
			range = range.length === 1 ? range.concat(range[0]) : range;
			let len = 0;
			for (let i = 0; i < remainingCount; i++) {
				len = generateStringLength(range);
				let num = generateString(len, characters);
				if (column.valueConfig.decimalPlaces !== 0) {
					num +=
						"." +
						generateString(
							column.valueConfig.decimalPlaces,
							characters
						);
				}
				Arr = Arr.concat(num);
			}
			break;
		case "Boolean":
			const trueCol = column.valueConfig.true;
			const falseCol = column.valueConfig.false;
			switch (true) {
				case trueCol && falseCol:
					for (let i = 0; i < remainingCount; i++) {
						// Clever method of randomly generating true or false
						let bool = Math.random() < 0.5;
						Arr = Arr.concat(bool.toString());
					}
					break;
				case trueCol:
					Arr = Arr.concat(Array(remainingCount).fill("true"));
					break;
				case falseCol:
					Arr = Arr.concat(Array(remainingCount).fill("false"));
					break;
			}

			break;
	}

	Arr = shuffle(Arr);
	return Arr;
};
