import {
	AppBar,
	Divider,
	Toolbar,
	Typography,
	Icon,
	Button,
	Box,
} from "@mui/material";
import { useEffect, useState } from "react";
import DataModal from "./DataModal";
import { useColumnsValue } from "../context/ColumnsContext";
import CircularProgress from "@mui/material/CircularProgress";
import imgUrl from "../assets/data.svg";

function NavBarTop() {
	const [open, setOpen] = useState(false);
	const [loading, setLoading] = useState(false);

	const handleOpen = () => {
		setLoading(true);
	};
	const handleClose = () => setOpen(false);
	const columns = useColumnsValue();

	useEffect(() => {
		asyncTimer().then(() => {
			if (loading) {
				setOpen(true);
			}
		});
	}, [loading]);

	const asyncTimer = async () => {
		await new Promise((r) => setTimeout(r, 500));
	};

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
						<img src={imgUrl} />
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
						disabled={columns.columns.length < 1}
						variant="contained"
						sx={{
							height: "45px",
							width: "250px",
							marginLeft: "auto",
						}}
						onClick={handleOpen}
					>
						{loading ? (
							<CircularProgress
								sx={{ color: "white", padding: "5px" }}
							/>
						) : (
							"Generate dataset"
						)}
					</Button>
				</Toolbar>
			</AppBar>
			<Toolbar />
			<DataModal
				handleClose={handleClose}
				open={open}
				setLoading={setLoading}
			/>
		</div>
	);
}

export default NavBarTop;
