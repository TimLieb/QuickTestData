import { useEffect, useState } from "react";
import { CssBaseline, Box, Typography, Card } from "@mui/material";
import CrudDataGrid from "./components/CrudDataGrid.jsx";
import NavBarTop from "./components/NavBarTop.jsx";
import NavBarSide from "./components/NavBarSide.jsx";
import ConfigCard from "./components/ConfigCard.jsx";
import {
	useColumnsValue,
	useColumnsDispatch,
} from "./context/ColumnsContext.jsx";
import { useCustomListValue } from "./context/CustomListContext.jsx";

function App() {
	const columnsValue = useColumnsValue();
	const listValue = useCustomListValue();

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
						<div
							style={{
								display: "flex",
								height: "867px",
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
