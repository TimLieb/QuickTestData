import { createContext, useReducer, useContext } from "react";
import {
	createInitialCustomLists,
	createNewColumn,
	createVConfig,
} from "../helpers/ActionCreators";
import { randomId } from "@mui/x-data-grid-generator";

const id = randomId();
let initialState = createInitialCustomLists();

const customListReducer = (state, action) => {
	switch (action.type) {
		case "UPSERT":
			const oldList = state.find((list) => list.id === action.payload.id);
			if (oldList == null) {
				return state.concat(action.payload);
			} else {
				return state.map((list) =>
					list.id === action.payload.id ? action.payload : list
				);
			}

		case "DELETE":
			return state.filter((list) => list.id !== action.payload);
		default:
			return state;
	}
};

const CustomListContext = createContext();

export const CustomListContextProvider = (props) => {
	const [customList, customListDispatch] = useReducer(
		customListReducer,
		initialState
	);

	return (
		<CustomListContext.Provider value={[customList, customListDispatch]}>
			{props.children}
		</CustomListContext.Provider>
	);
};

export const useCustomListValue = () => {
	const customListAndDispatch = useContext(CustomListContext);
	return customListAndDispatch[0];
};

export const useCustomListDispatch = () => {
	const customListAndDispatch = useContext(CustomListContext);
	return customListAndDispatch[1];
};

export const useCurrentList = (id) => {
	const customListValue = useCustomListValue();
	return customListValue.find((list) => list.id === id);
};

export default CustomListContext;
