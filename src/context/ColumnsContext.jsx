import { createContext, useReducer, useContext } from "react";
import { createNewColumn } from "../helpers/ActionCreators";
import { randomId } from "@mui/x-data-grid-generator";

const id = randomId();
const initialState = {
	config: id,
	columns: [createNewColumn(id)],
};

const columnsReducer = (state, action) => {
	switch (action.type) {
		case "ADD":
			const id = randomId();
			const column = createNewColumn(id);
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

export default ColumnsContext;
