import { Box, Divider, Typography, Button, ButtonGroup } from "@mui/material";
import { useState } from "react";
import RandomiserSelecter from "./StringConfigSection/RandomiserSelecter";
import ListAccordion from "./StringConfigSection/ListAccordian";

function StringConfigSection() {
	return (
		<Box
			sx={{
				display: "flex",
				height: "760px",
			}}
		>
			<Box
				sx={{
					width: "400px",
				}}
			>
				<RandomiserSelecter />
				<ListAccordion />
			</Box>
			<Divider orientation="vertical" flexItem={true} />
		</Box>
	);
}

export default StringConfigSection;
