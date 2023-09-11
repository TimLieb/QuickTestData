import { createContext, useReducer, useContext } from "react";

const valLenReducer = (state, action) => {
	switch (action.type) {
		case "SET":
			const lenText = action.payload;
			// const sep = lenText.indexOf("-") === -1
			// if (sep === -1) {
			//     const len = parseInt(lenText);
			//     //TODO if NaN
			//     return lenText
			// } else {
			//     const len1 = parseInt(lenText.substring(0, sep))
			//     const len2 = parseInt(lenText.substring(sep))
			//     //TODO if NaNs or len2 smaller than len1
			//     return lenText
			// }

			return lenText;
		case "CLEAR":
			return 0;
		default:
			return state;
	}
};

const ValLenContext = createContext();

export const ValLenContextProvider = (props) => {
	const [valLen, valLenDispatch] = useReducer(valLenReducer, 6);

	return (
		<ValLenContext.Provider value={[valLen, valLenDispatch]}>
			{props.children}
		</ValLenContext.Provider>
	);
};

export const useValLenValue = () => {
	const valLenAndDispatch = useContext(ValLenContext);
	return valLenAndDispatch[0];
};

export const useValLenDispatch = () => {
	const valLenAndDispatch = useContext(ValLenContext);
	return valLenAndDispatch[1];
};

export default ValLenContext;
