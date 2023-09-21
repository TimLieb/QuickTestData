import { AppBar, Divider, Toolbar, Typography, Icon } from "@mui/material";

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
					<Icon sx={{ width: "32px", height: "32px" }}>
						<img src="public\data.svg" />
					</Icon>
					<Typography variant="h6" sx={{ paddingLeft: "15px" }}>
						Quick Test Data
					</Typography>
				</Toolbar>
			</AppBar>
			<Toolbar />
		</div>
	);
}

export default NavBarTop;
