import { createContext, useReducer, useContext } from "react";
import { createNewColumn } from "../helpers/ActionCreators";
import { randomId } from "@mui/x-data-grid-generator";

const id = randomId();
const initialState = [
	{
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
	},
];

const columnsReducer = (state, action) => {
	switch (action.type) {
		case "ADD":
			return state.concat(createNewColumn(action.payload, null, null));
		case "DELETE":
			return state.filter((column) => column.id !== action.payload);
		case "UPDATE":
			return state.map((column) =>
				column.id !== action.payload.id ? column : action.payload
			);
		default:
			return state;
	}
};

const ColumnsContext = createContext();

export const ColumnsContextProvider = (props) => {
	const [columns, columnsDispatch] = useReducer(columnsReducer, initialState);

	return (
		<ColumnsContext.Provider value={[columns, columnsDispatch]}>
			{props.children}
		</ColumnsContext.Provider>
	);
};

export const useColumnsValue = () => {
	const columnsAndDispatch = useContext(ColumnsContext);
	return columnsAndDispatch[0];
};

export const useColumnsDispatch = () => {
	const columnsAndDispatch = useContext(ColumnsContext);
	return columnsAndDispatch[1];
};

export default ColumnsContext;
