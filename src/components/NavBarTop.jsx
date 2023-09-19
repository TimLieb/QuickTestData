import { AppBar, Divider, Toolbar, Typography } from "@mui/material";

function NavBarTop() {
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
					<Typography variant="h6">Quick Test Data</Typography>
				</Toolbar>
			</AppBar>
			<Toolbar />
		</div>
	);
}

export default NavBarTop;
