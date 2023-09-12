import { createContext, useReducer, useContext } from "react";

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
		default:
			return state;
	}
};

const ConfigContext = createContext();

export const ConfigContextProvider = (props) => {
	const [config, configDispatch] = useReducer(configReducer, {});

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
