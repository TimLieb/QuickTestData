import { format, parseISO } from "date-fns";
import moment from "moment/moment";

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

export const validateColumn = (column) => {
	switch (column.type) {
		case "String":
			return (
				column.valueConfig.boxError ||
				column.valueConfig.lenError ||
				column.addConfig.error
			);
		case "Number":
			return column.valueConfig.lenError;
		case "Boolean":
			return column.valueConfig.error;
	}
};

export const validateBoolBoxes = (name, column) => {
	switch (name) {
		case "true":
			var newConfig = {
				...column.valueConfig,
				true: !column.valueConfig.true,
			};
			break;
		case "false":
			var newConfig = {
				...column.valueConfig,
				false: !column.valueConfig.false,
			};
			break;
	}

	return !newConfig.true && !newConfig.false
		? {
				...newConfig,
				error: true,
		  }
		: {
				...newConfig,
				error: false,
		  };
};

//If you are reading this I apologise for what you are about to see
export const validateDates = (column, event, type, section) => {
	let date = "";
	if (section === "sDate" || section === "eDate") {
		date =
			type === "accept"
				? format(event, "yyyy-MM-dd")
				: moment(event.target.value, "DD/MM/YYYY").format("YYYY-MM-DD");
		if (section === "sDate") {
			date =
				date === "Invalid date" ? column.valueConfig.startDate : date;
		} else {
			date = date === "Invalid date" ? column.valueConfig.endDate : date;
		}

		let startDate = new Date();
		let endDate = new Date();
		if (section === "sDate") {
			startDate = parseISO(date);
			endDate = parseISO(column.valueConfig.endDate);
		} else if (section === "eDate") {
			startDate = parseISO(column.valueConfig.startDate);
			endDate = parseISO(date);
		}

		const error = startDate > endDate;
		switch (section) {
			case "sDate":
				return error
					? format(endDate, "yyyy-MM-dd")
					: format(startDate, "yyyy-MM-dd");
			case "eDate":
				return error
					? format(startDate, "yyyy-MM-dd")
					: format(endDate, "yyyy-MM-dd");
		}
	} else {
		date =
			type === "accept"
				? format(event, "yyyy-MM-dd HH:mm")
				: "2000-01-01 " +
				  moment(event.target.value, "hh:mm aa").format("HH:mm");

		let startTime = new Date();
		let endTime = new Date();
		if (section === "sTime") {
			startTime = parseISO(date);
			endTime = parseISO(column.valueConfig.endTime);
		} else if (section === "eTime") {
			startTime = parseISO(column.valueConfig.startTime);
			endTime = parseISO(date);
		}

		const error = startTime > endTime;
		switch (section) {
			case "sTime":
				return error
					? format(endTime, "yyyy-MM-dd HH:mm")
					: format(startTime, "yyyy-MM-dd HH:mm");
			case "eTime":
				return error
					? format(startTime, "yyyy-MM-dd HH:mm")
					: format(endTime, "yyyy-MM-dd HH:mm");
		}
	}
};
