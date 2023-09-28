import { Box, IconButton, Modal, Typography } from "@mui/material";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import DataTable from "./DataModal/DataTable";
import { useColumnsValue } from "../context/ColumnsContext";
import { useCustomListValue } from "../context/CustomListContext";
import { validateAllColumns } from "../helpers/DataValidation";

function DataModal({ handleClose, open }) {
	const columns = useColumnsValue();
	const customLists = useCustomListValue();
	const errArr = validateAllColumns(columns, customLists);

	const style = {
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		// minWidth: 800,
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
			return (
				<Box sx={{ maxWidth: "500px" }}>
					<Typography
						variant="subtitle2"
						sx={{ color: "red", paddingBottom: "30px" }}
					>
						An error occured while generating the data, please check
						the messages below and ensure there are no errors within
						the specified columns.
					</Typography>
					{errArr.map((err, i) => (
						<Typography
							key={i}
							variant="subtitle1"
						>{`Error: "${err}"`}</Typography>
					))}
				</Box>
			);
		} else {
			return <DataTable />;
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
							paddingBottom: "5px",
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
