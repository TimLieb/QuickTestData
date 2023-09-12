import { CssBaseline, Box, Typography, Card, Divider } from "@mui/material";
import LeftConfigSection from "./ConfigCard/LeftConfigSection";
import { useState } from "react";
import { useConfigValue } from "../context/ConfigContext";

function ConfigCard() {
	const configValue = useConfigValue();

	return (
		<Card
			variant="outlined"
			sx={{
				width: "1313px",
				marginLeft: "5px",
				display: "flex",
			}}
		>
			<Box
				sx={{
					width: "75%",
				}}
			>
				<Typography variant="subtitle1" align="center" sx={{}}>
					Configure:{" "}
					<Box component="span" fontWeight="bold">
						{configValue.name}, {configValue.type}
					</Box>
				</Typography>
				<Divider />
				<Box
					sx={{
						display: "flex",
					}}
				>
					<LeftConfigSection />
				</Box>
			</Box>
			<Divider orientation="vertical" flexItem={true} />
			<Box
				sx={{
					width: "25%",
				}}
			>
				<Typography variant="subtitle1" align="center" sx={{}}>
					Preview
				</Typography>
				<Divider />
			</Box>
		</Card>
	);
}

export default ConfigCard;
