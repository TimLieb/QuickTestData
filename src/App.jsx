import { useState } from "react";
import { CssBaseline } from "@mui/material";
import CrudDataGrid from "./components/CrudDataGrid.jsx";
import NavBarTop from "./components/NavBarTop.jsx";
import NavBarSide from "./components/NavBarSide.jsx";

function App() {
	const [rows, setRows] = useState([]);

	return (
		<>
			<CssBaseline>
				<NavBarTop />
				<div style={{ display: "flex" }}>
					<NavBarSide />
					<CrudDataGrid rows={rows} setRows={setRows} />
				</div>
			</CssBaseline>
		</>
	);
}

export default App;
