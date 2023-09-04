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

const columns = [
	{ field: "id", headerName: "ID", width: 50 },
	{ field: "name", headerName: "Name", width: 140, editable: true },
	{
		field: "dataType",
		headerName: "Data Type",
		width: 140,
		editable: true,
	},
	{
		field: "allowNulls",
		headerName: "Allow Nulls",
		width: 100,
		editable: true,
	},
];

const rows = [
	{
		id: 1,
		name: "ProjectName",
		dataType: "NVARCHAR(MAX)",
		allowNulls: "True",
	},
	{ id: 2, name: "ProjectNumber", dataType: "Int", allowNulls: "False" },
];

function App() {
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
							position: "sticky",
							background: "lightgray",
						}}
					></div>
					<div
						style={{
							display: "inline-block",
							width: "500px",
							padding: "5px",
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
							columns={columns}
							initialState={{
								pagination: {
									paginationModel: {
										pageSize: 5,
									},
								},
							}}
							pageSizeOptions={[5]}
							checkboxSelection
							disableRowSelectionOnClick
						/>
					</div>
				</div>
			</CssBaseline>
		</>
	);
}

export default App;
