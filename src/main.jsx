import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ColumnsContextProvider } from "./context/ColumnsContext.jsx";
import { CustomListContextProvider } from "./context/CustomListContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ColumnsContextProvider>
			<CustomListContextProvider>
				<App />
			</CustomListContextProvider>
		</ColumnsContextProvider>
	</React.StrictMode>
);
