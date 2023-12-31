// Mostly copied from https://mui.com/x/react-data-grid/editing/

import * as React from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Close";
import {
	GridRowModes,
	DataGrid,
	GridToolbarContainer,
	GridActionsCellItem,
	GridRowEditStopReasons,
} from "@mui/x-data-grid";
import { useState } from "react";
import { styled, darken, lighten } from "@mui/material/styles";
import { useColumnsValue, useColumnsDispatch } from "../context/ColumnsContext";
import { Box } from "@mui/material";

const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
	"& .rows-theme": {
		"&:hover": {
			backgroundColor: lighten(theme.palette.divider, 0.5),
		},
		"&.Mui-selected": {
			backgroundColor: theme.palette.divider,
			"&:hover": {
				backgroundColor: lighten(theme.palette.divider, 0.2),
			},
		},
	},
	"& .hide-separator": {
		"& > .MuiDataGrid-columnSeparator": {
			display: "none",
		},

		"&:focus": {
			outline: "none !important",
		},
	},
	"& .headers-theme": {
		"&:focus": {
			outline: "none !important",
		},
	},
}));

function EditToolbar(props) {
	const { setRowModesModel } = props;

	const columnsDispatch = useColumnsDispatch();
	const columnsValue = useColumnsValue();

	const handleClick = () => {
		if (columnsValue.columns.length < 100) {
			columnsDispatch({
				type: "ADD",
				payload: "Column" + (columnsValue.columns.length + 1),
			});
		}

		// setRowModesModel((oldModel) => ({
		// 	...oldModel,
		// 	[id]: { mode: GridRowModes.Edit, fieldToFocus: "name" },
		// }));
	};

	return (
		<GridToolbarContainer>
			<Button
				color="primary"
				startIcon={<AddIcon />}
				onClick={handleClick}
			>
				Add Item
			</Button>
		</GridToolbarContainer>
	);
}

function CrudDataGrid() {
	const [rowModesModel, setRowModesModel] = useState({});

	const columnsDispatch = useColumnsDispatch();
	const columnsValue = useColumnsValue();

	const rows = columnsValue.columns.map((column) => {
		return {
			id: column.id,
			name: column.name,
			type: column.type,
		};
	});

	const handleRowEditStop = (params, event) => {
		if (params.reason === GridRowEditStopReasons.rowFocusOut) {
			event.defaultMuiPrevented = true;
		}
	};

	const handleRowClick = (params) => {
		columnsDispatch({ type: "CONFIG", payload: params.row.id });
	};

	const handleEditClick = (id) => () => {
		setRowModesModel({
			...rowModesModel,
			[id]: { mode: GridRowModes.Edit },
		});
	};

	const handleSaveClick = (id) => () => {
		setRowModesModel({
			...rowModesModel,
			[id]: { mode: GridRowModes.View },
		});
	};

	const handleDeleteClick = (id) => () => {
		columnsDispatch({ type: "DELETE", payload: id });
		//TODO edge case - set state to another column or to nothing (need to handle nothing)
	};

	const handleCancelClick = (id) => () => {
		setRowModesModel({
			...rowModesModel,
			[id]: { mode: GridRowModes.View, ignoreModifications: true },
		});
	};

	const processRowUpdate = (newRow) => {
		columnsDispatch({ type: "UPDATE_ROW", payload: newRow });
		return newRow;
	};

	const handleRowModesModelChange = (newRowModesModel) => {
		setRowModesModel(newRowModesModel);
	};

	const columns = [
		{
			field: "name",
			headerName: "COLUMN NAME",
			width: 190,
			editable: true,
			sortable: false,
			headerClassName: "headers-theme",
		},
		{
			field: "type",
			headerName: "DATA TYPE",
			width: 125,
			editable: true,
			type: "singleSelect",
			valueOptions: ["String", "Number", "Boolean", "Date/Time"],
			sortable: false,
			headerClassName: "headers-theme",
		},
		{
			field: "actions",
			type: "actions",
			headerName: "ACTIONS",
			width: 95,
			cellClassName: "actions",
			headerClassName: "hide-separator",
			getActions: ({ id }) => {
				const isInEditMode =
					rowModesModel[id]?.mode === GridRowModes.Edit;

				if (isInEditMode) {
					return [
						<GridActionsCellItem
							icon={<SaveIcon />}
							label="Save"
							sx={{
								color: "primary.main",
							}}
							onClick={handleSaveClick(id)}
						/>,
						<GridActionsCellItem
							icon={<CancelIcon />}
							label="Cancel"
							className="textPrimary"
							onClick={handleCancelClick(id)}
							color="inherit"
						/>,
					];
				}

				return [
					<GridActionsCellItem
						icon={<EditIcon />}
						label="Edit"
						className="textPrimary"
						onClick={handleEditClick(id)}
						color="inherit"
					/>,
					<GridActionsCellItem
						icon={<DeleteIcon />}
						label="Delete"
						onClick={handleDeleteClick(id)}
						color="inherit"
					/>,
				];
			},
		},
	];

	return (
		<Box sx={{ width: "413px", maxHeight: "857px", overflow: "auto" }}>
			<StyledDataGrid
				disableColumnFilter
				disableColumnMenu
				rows={rows}
				columns={columns}
				editMode="row"
				rowModesModel={rowModesModel}
				onRowModesModelChange={handleRowModesModelChange}
				onRowEditStop={handleRowEditStop}
				onRowClick={handleRowClick}
				processRowUpdate={processRowUpdate}
				onProcessRowUpdateError={(error) => {
					console.log(error);
				}}
				slots={{
					toolbar: EditToolbar,
				}}
				slotProps={{
					toolbar: { setRowModesModel },
				}}
				hideFooter={true}
				getRowClassName={(params) => "rows-theme"}
			/>
		</Box>
	);
}

export default CrudDataGrid;
