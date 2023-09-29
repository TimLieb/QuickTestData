import { Box, Typography, Card, Divider } from "@mui/material";
import LeftConfigSection from "./ConfigCard/LeftConfigSection";
import { useColumnsValue, useCurrentColumn } from "../context/ColumnsContext";
import RightConfigSection from "./ConfigCard/RightConfigSection";
import PreviewSection from "./ConfigCard/PreviewSection";

function ConfigCard() {
	const columnsValue = useColumnsValue();
	const column = useCurrentColumn();
	const hasConfig = columnsValue.config !== null;

	return (
		<Card
			variant="outlined"
			sx={{
				width: "60%",
				minWidth: "900px",
				marginLeft: "5px",
				display: "flex",
			}}
		>
			<Box
				sx={{
					width: "100%",
				}}
			>
				<Typography
					variant="subtitle1"
					align="center"
					sx={{
						height: "40px",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					Configure:
					<Box component="span" fontWeight="bold">
						{hasConfig
							? `\u2002${column.name}, ${column.type}`
							: "\u2002Select a row"}
					</Box>
				</Typography>
				<Divider />
				<Box
					sx={{
						display: "flex",
						width: "100%",
						maxHeight: "814px",
					}}
				>
					{hasConfig ? (
						<>
							<LeftConfigSection />
							<Divider orientation="vertical" flexItem={true} />
							<RightConfigSection />
							<Divider orientation="vertical" flexItem={true} />
							<PreviewSection />
						</>
					) : (
						<Typography
							variant="Subtitle1"
							sx={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								width: "100%",
								height: "760px",
							}}
						>
							Select a row
						</Typography>
					)}
				</Box>
			</Box>
		</Card>
	);
}

export default ConfigCard;
