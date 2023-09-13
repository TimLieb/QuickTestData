import { Box, Divider, Typography, Button, ButtonGroup } from "@mui/material";
import { useState } from "react";
import RandomiserSelecter from "./LeftConfigSection/RandomiserSelecter";
import ListAccordion from "./LeftConfigSection/ListAccordian";
import ValueCard from "./LeftConfigSection/ValueCard";
import { useConfigValue, useConfigDispatch } from "../../context/ConfigContext";
import ValueCardTest from "./LeftConfigSection/ValueCardTest";

function LeftConfigSection() {
	const configValue = useConfigValue();
	const randomiser = configValue.configType;

	function RandomiserCard() {
		const Card = randomiser === "list" ? <ListAccordion /> : <ValueCard />;
		return Card;
	}

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
				<RandomiserCard />
			</Box>
			<Divider orientation="vertical" flexItem={true} />
		</Box>
	);
}

export default LeftConfigSection;
