import { AppBar, Toolbar, Typography } from "@mui/material";

function NavBarTop() {
	return (
		<div>
			<AppBar>
				<Toolbar>
					<Typography variant="h6">Quick Test Data</Typography>
				</Toolbar>
			</AppBar>
			<Toolbar />
		</div>
	);
}

export default NavBarTop;
