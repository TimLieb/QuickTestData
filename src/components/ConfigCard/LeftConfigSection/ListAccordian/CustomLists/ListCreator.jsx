import { Box, Button, Modal, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import ListTable from "./ListCreator/ListTable";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 300,
	bgcolor: "background.paper",
	boxShadow: 24,
	p: 2,
};

function ListCreator() {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<>
			<Button
				color="primary"
				startIcon={<AddIcon />}
				onClick={handleOpen}
				sx={{ width: "100%" }}
			>
				Add Item
			</Button>
			<Modal open={open} onClose={handleClose}>
				<Box sx={style}>
					<ListTable />
				</Box>
			</Modal>
		</>
	);
}

export default ListCreator;
