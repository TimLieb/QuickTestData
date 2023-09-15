import {
	Box,
	Divider,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
} from "@mui/material";
import {
	useColumnsValue,
	useCurrentColumn,
} from "../../context/ColumnsContext";
import { generateColumnData } from "../../helpers/DataGeneration";

//TODO add validation so section doesn't show up if there's any errors, make div scrollable

const PreviewSection = () => {
	const column = useCurrentColumn();
	const columnsValue = useColumnsValue();
	const rows = generateColumnData(column.id, columnsValue, 100);

	return (
		<>
			<Box
				sx={{
					width: "34%",
					minWidth: "300px",
				}}
			>
				<Typography
					variant="subtitle1"
					sx={{
						height: "40px",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					Preview
				</Typography>
				<Divider />
				<Paper sx={{ width: "100%", overflow: "hidden" }}>
					<TableContainer
						sx={{
							width: "100%",
							overflow: "auto",
							maxHeight: "708px",
						}}
					>
						<Table size="small" stickyHeader>
							<TableHead>
								<TableRow>
									<TableCell>{column.name}</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{rows.map((row, index) => (
									<TableRow key={index}>
										<TableCell
											component="th"
											scope="row"
											sx={{ height: "33.02px" }}
										>
											{row}
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>
				</Paper>
			</Box>
		</>
	);
};

export default PreviewSection;
