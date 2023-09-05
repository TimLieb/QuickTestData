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
import { DataGrid } from "@mui/x-data-grid";
import crudDataGrid from "./components/crudDataGrid.jsx";

function App() {
	const [rows, setRows] = useState([
		{
			id: 1,
			name: "",
			dataType: "",
			allowNulls: "",
		},
		{
			id: "",
			name: "",
			dataType: "",
			allowNulls: "",
		},
	]);

	const cellChangeHandler = (params) => {
		console.log(params);
	};

	const columns = [
		{ field: "id", headerName: "ID", width: 90 },
		{ field: "name", headerName: "Name", width: 150, editable: true },
		{
			field: "dataType",
			headerName: "Data Type",
			width: 150,
			editable: true,
		},
		{
			field: "allowNulls",
			headerName: "Allow Nulls",
			width: 150,
			editable: true,
		},
	];

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
						<div
							style={{
								paddingBottom: "5px",
								display: "flex",
								justifyContent: "right",
							}}
						>
							<Button variant="contained" color="secondary">
								Paste values
							</Button>
						</div>
						<DataGrid
							rows={rows}
							onRowEditCommit={cellChangeHandler}
							columns={columns}
							hideFooter={true}
							autoHeight={true}
						/>
					</div>
				</div>
			</CssBaseline>
		</>
	);
}

export default App;
