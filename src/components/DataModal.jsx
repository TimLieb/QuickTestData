import { Box, IconButton, Modal, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import DataTable from "./DataModal/DataTable";
import { useColumnsValue } from "../context/ColumnsContext";
import { useCustomListValue } from "../context/CustomListContext";
import { validateAllColumns } from "../helpers/DataValidation";
import DataTableBase from "./DataModal/DataTableBase";
import OptionsBar from "./DataModal/OptionsBar";
import ErrorBoxBase from "./DataModal/ErrorBoxBase";

function DataModal({ handleClose, open, setLoading }) {
	const columns = useColumnsValue();
	const customLists = useCustomListValue();
	const errArr = validateAllColumns(columns, customLists);

	const style = {
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		minWidth: "800px",
		maxWidth: "1200px",
		maxHeight: "800px",
		// width: 1200,
		// height: 800,
		bgcolor: "background.paper",
		boxShadow: 24,
		p: 2,
		paddingTop: 0,
		borderRadius: "3px",
	};

	const DataValidator = () => {
		if (errArr.length > 0) {
			setLoading(false);

			return <ErrorBoxBase setLoading={setLoading} errArr={errArr} />;
		} else {
			return (
				<>
					<OptionsBar />
					<DataTableBase setLoading={setLoading} />
				</>
			);
		}
	};

	return (
		<>
			<Modal open={open}>
				<Box sx={style}>
					<Box
						sx={{
							display: "flex",
							justifyContent: "right",
							paddingTop: "5px",
							paddingBottom: "10px",
						}}
					>
						<IconButton onClick={handleClose}>
							<CloseIcon />
						</IconButton>
					</Box>
					<DataValidator />
				</Box>
			</Modal>
		</>
	);
}

export default DataModal;
