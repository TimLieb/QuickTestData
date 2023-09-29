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
				{/* <NavBarSide /> */}
				<Box
					sx={{
						// marginLeft: "150px",
						width: "100%",
						display: "flex",
						justifyContent: "center",
						padding: "5px",
						overflowX: "auto",
					}}
				>
					<CrudDataGrid />
					<ConfigCard />
				</Box>
			</CssBaseline>
		</>
	);
}

export default App;

// Notes
