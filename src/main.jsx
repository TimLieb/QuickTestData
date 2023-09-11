import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ValLenContextProvider } from "./context/ValLenContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<ValLenContextProvider>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</ValLenContextProvider>
);
