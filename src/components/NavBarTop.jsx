import {
	AppBar,
	Divider,
	Toolbar,
	Typography,
	Icon,
	Button,
	Box,
} from "@mui/material";
import { useState } from "react";
import DataModal from "./DataModal";

function NavBarTop() {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<div>
			<AppBar
				sx={{
					boxShadow: 0,
					backgroundColor: "white",
					color: "black",
					borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
				}}
			>
				<Toolbar>
					<Icon sx={{ width: "32px", height: "32px" }}>
						<img src="\data.svg" />
					</Icon>
					<Divider
						variant="middle"
						orientation="vertical"
						flexItem={true}
						sx={{ paddingLeft: "15px" }}
					/>
					<Box sx={{ paddingLeft: "15px" }}>
						<Typography variant="h5" sx={{ height: "25px" }}>
							QTD
						</Typography>
						<Typography variant="caption">
							Quick Test Data
						</Typography>
					</Box>

					<Button
						variant="contained"
						sx={{
							height: "45px",
							width: "250px",
							marginLeft: "auto",
						}}
						onClick={handleOpen}
					>
						Generate dataset
					</Button>
				</Toolbar>
			</AppBar>
			<Toolbar />
			<DataModal handleClose={handleClose} open={open} />
		</div>
	);
}

export default NavBarTop;
