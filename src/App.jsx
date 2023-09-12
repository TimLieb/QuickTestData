import { useEffect, useState } from "react";
import { CssBaseline, Box, Typography, Card } from "@mui/material";
import CrudDataGrid from "./components/CrudDataGrid.jsx";
import NavBarTop from "./components/NavBarTop.jsx";
import NavBarSide from "./components/NavBarSide.jsx";
import ConfigCard from "./components/ConfigCard.jsx";

function App() {
	return (
		<>
			<CssBaseline>
				<NavBarTop />
				<div style={{ display: "flex" }}>
					<NavBarSide />
					<Box
						sx={{
							marginLeft: "150px",
							width: "100%",
						}}
					>
						<Box
							sx={{
								width: "100%",
								height: "65px",
							}}
						></Box>
						<div
							style={{
								display: "flex",
								height: "800px",
								padding: "5px",
							}}
						>
							<CrudDataGrid />
							<ConfigCard />
						</div>
					</Box>
				</div>
			</CssBaseline>
		</>
	);
}

export default App;

// Notes
