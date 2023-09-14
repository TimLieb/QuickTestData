import { Box, Typography, Card, Divider } from "@mui/material";
import LeftConfigSection from "./ConfigCard/LeftConfigSection";
import { useColumnsValue, useCurrentColumn } from "../context/ColumnsContext";

function ConfigCard() {
	const columnsValue = useColumnsValue();
	const column = useCurrentColumn();

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
						{column.name}, {column.type}
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
