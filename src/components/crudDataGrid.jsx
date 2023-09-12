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
import { randomId } from "@mui/x-data-grid-generator";
import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import { useColumnsValue, useColumnsDispatch } from "../context/ColumnsContext";
import { useConfigDispatch, useConfigValue } from "../context/ConfigContext";

const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
	"& .rows-theme": {
		"&:hover": {
			backgroundColor: theme.palette.divider,
		},
	},
}));

function EditToolbar(props) {
	const { setRowModesModel } = props;

	const columnsDispatch = useColumnsDispatch();

	const handleClick = () => {
		const id = randomId();
		columnsDispatch({ type: "ADD", payload: id });
		setRowModesModel((oldModel) => ({
			...oldModel,
			[id]: { mode: GridRowModes.Edit, fieldToFocus: "name" },
		}));
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
	const configDispatch = useConfigDispatch();
	const configValue = useConfigValue();

	useEffect(() => {
		columnsDispatch({ type: "UPDATE", payload: configValue });
	}, [configValue]);

	useEffect(() => {
		configDispatch({ type: "SET", payload: columnsValue[0] });
	}, []);

	const rows = columnsValue.map((column) => {
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
		configDispatch({ type: "UPDATE_ROW", payload: params.row });
		//FIX!!! should retrieve row from columnsValue using id
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
		configDispatch({ type: "UPDATE_ROW", payload: newRow });
		// Also fix this, maybe?
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
		},
		{
			field: "type",
			headerName: "DATA TYPE",
			width: 150,
			editable: true,
			type: "singleSelect",
			valueOptions: ["String", "Number", "Boolean", "Date/Time"],
		},
		{
			field: "actions",
			type: "actions",
			headerName: "ACTIONS",
			width: 100,
			cellClassName: "actions",
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
		<div
			style={{
				display: "inline-block",
			}}
		>
			<StyledDataGrid
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
		</div>
	);
}

export default CrudDataGrid;
