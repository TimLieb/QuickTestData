import { Box, Button, IconButton, Modal, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useEffect, useState } from "react";
import ListTable from "./ListCreator/ListTable";
import CloseIcon from "@mui/icons-material/Close";
import { randomId } from "@mui/x-data-grid-generator";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 300,
	bgcolor: "background.paper",
	boxShadow: 24,
	p: 2,
	paddingTop: 0,
	borderRadius: "3px",
};

function ListCreator({ listId, setListId }) {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setListId(randomId());
	const handleClose = () => setListId("");

	useEffect(() => {
		if (listId !== "") {
			setOpen(true);
		} else {
			setOpen(false);
		}
	}, [listId]);

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
					<ListTable listId={listId} setListId={setListId} />
				</Box>
			</Modal>
		</>
	);
}

export default ListCreator;
