import { Box, Divider } from "@mui/material";
import RandomiserSelecter from "./LeftConfigSection/RandomiserSelecter";
import ListAccordion from "./LeftConfigSection/ListAccordian";
import {
	useColumnsValue,
	useCurrentColumn,
} from "../../context/ColumnsContext";
import ValueCard from "./LeftConfigSection/ValueCard";

function LeftConfigSection() {
	const columnsValue = useColumnsValue();
	const column = useCurrentColumn();
	const randomiser = column.configType;

	function RandomiserCard() {
		const Card = randomiser === "list" ? <ListAccordion /> : <ValueCard />;
		return Card;
	}

	return (
		<Box
			sx={{
				width: "33%",
				minWidth: "300px",
			}}
		>
			<RandomiserSelecter />
			<RandomiserCard />
		</Box>
	);
}

export default LeftConfigSection;
