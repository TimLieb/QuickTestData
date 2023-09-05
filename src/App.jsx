import { useState } from "react";
import {
	AppBar,
	Toolbar,
	Typography,
	Container,
	Box,
	CssBaseline,
	Drawer,
	Button,
} from "@mui/material";
import CrudDataGrid from "./components/CrudDataGrid.jsx";
import { randomId } from "@mui/x-data-grid-generator";

function App() {
	const [rows, setRows] = useState([
		{
			id: randomId(),
			name: "",
			type: "nvarchar(50)",
			nulls: "True",
		},
	]);

	return (
		<>
			<CssBaseline>
				<div>
					<AppBar>
						<Toolbar>
							<Typography variant="h6">
								Quick Test Data
							</Typography>
						</Toolbar>
					</AppBar>
					<Toolbar />
				</div>
				<div style={{ display: "flex" }}>
					<div
						style={{
							display: "inline-block",
							width: "150px",
							height: "100vh",
							position: "fixed",
							background: "lightgray",
						}}
					></div>
					<div
						style={{
							display: "inline-block",
							width: "552px",
							padding: "5px",
							marginLeft: "150px",
						}}
					>
						<CrudDataGrid rows={rows} setRows={setRows} />
					</div>
				</div>
			</CssBaseline>
		</>
	);
}

export default App;
