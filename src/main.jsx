import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ColumnsContextProvider } from "./context/ColumnsContext.jsx";
import { ConfigContextProvider } from "./context/ConfigContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ColumnsContextProvider>
			<ConfigContextProvider>
				<App />
			</ConfigContextProvider>
		</ColumnsContextProvider>
	</React.StrictMode>
);
