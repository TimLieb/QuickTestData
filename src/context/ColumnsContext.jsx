import { createContext, useReducer, useContext } from "react";
import { createNewColumn, createVConfig } from "../helpers/ActionCreators";
import { randomId } from "@mui/x-data-grid-generator";

const id = randomId();
const initialState = {
	config: id,
	columns: [createNewColumn(id, "Column1")],
};

const columnsReducer = (state, action) => {
	switch (action.type) {
		case "ADD":
			const id = randomId();
			const column = createNewColumn(id, action.payload);
			return {
				...state,
				columns: state.columns.concat(column),
			};
		case "CONFIG":
			return {
				...state,
				config: action.payload,
			};
		case "DELETE":
			return {
				...state,
				config: null,
				columns: state.columns.filter(
					(column) => column.id !== action.payload
				),
			};
		case "UPDATE_ROW":
			return {
				...state,
				columns: state.columns.map((column) =>
					column.id !== action.payload.id
						? column
						: {
								...column,
								name: action.payload.name,
								type: action.payload.type,
								configType:
									action.payload.type === "String"
										? column.configType
										: "value",
								valueConfig:
									column.type === action.payload.type
										? column.valueConfig
										: createVConfig(action.payload.type),
						  }
				),
			};
		case "SET_RANDOMISER":
			return {
				...state,
				columns: state.columns.map((column) =>
					column.id !== state.config
						? column
						: {
								...column,
								configType: action.payload,
						  }
				),
			};
		case "SET_VCONFIG":
			return {
				...state,
				columns: state.columns.map((column) =>
					column.id !== state.config
						? column
						: {
								...column,
								valueConfig: action.payload,
						  }
				),
			};
		case "SET_ACONFIG":
			return {
				...state,
				columns: state.columns.map((column) =>
					column.id !== state.config
						? column
						: {
								...column,
								addConfig: action.payload,
						  }
				),
			};
		case "SET_LCONFIG":
			return {
				...state,
				columns: state.columns.map((column) =>
					column.id !== state.config
						? column
						: {
								...column,
								listConfig: action.payload,
						  }
				),
			};
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

export const useCurrentColumn = () => {
	const columnsValue = useColumnsValue();
	return columnsValue.columns.find(
		(column) => column.id === columnsValue.config
	);
};

export default ColumnsContext;
