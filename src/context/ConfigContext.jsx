import { createContext, useReducer, useContext } from "react";

const initialState = {
	id: 1,
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
};

const configReducer = (state, action) => {
	switch (action.type) {
		case "SET":
			return action.payload;
		case "SET_RANDOMISER":
			return {
				...state,
				configType: action.payload,
			};
		case "UPDATE_ROW":
			return {
				...state,
				id: action.payload.id,
				name: action.payload.name,
				type: action.payload.type,
			};
		case "UPDATE_LENGTH":
			return {
				...state,
				valueConfig: {
					...state.valueConfig,
					length: action.payload,
				},
			};

		default:
			return state;
	}
};

const ConfigContext = createContext();

export const ConfigContextProvider = (props) => {
	const [config, configDispatch] = useReducer(configReducer, initialState);

	return (
		<ConfigContext.Provider value={[config, configDispatch]}>
			{props.children}
		</ConfigContext.Provider>
	);
};

export const useConfigValue = () => {
	const configAndDispatch = useContext(ConfigContext);
	return configAndDispatch[0];
};

export const useConfigDispatch = () => {
	const configAndDispatch = useContext(ConfigContext);
	return configAndDispatch[1];
};

export default ConfigContext;
