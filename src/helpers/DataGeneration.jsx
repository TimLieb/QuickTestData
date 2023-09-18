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
	const characters = configureCharacters(column.valueConfig);
	let range = parseLen(column.valueConfig.length);
	range = range.length === 1 ? range.concat(range[0]) : range;
	let len = 0;
	for (let i = 0; i < remainingCount; i++) {
		len = generateStringLength(range);
		Arr = Arr.concat(generateString(len, characters));
	}
	Arr = shuffle(Arr);

	return Arr;
};