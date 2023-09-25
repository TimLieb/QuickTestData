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
import { validateColumn } from "../../helpers/DataValidation";
import { useMemo } from "react";
import { useCustomListValue } from "../../context/CustomListContext";

const PreviewSection = () => {
	const column = useCurrentColumn();
	const columnsValue = useColumnsValue();
	const customLists = useCustomListValue();
	const error = validateColumn(column, customLists);

	const rows = useMemo(
		() =>
			error
				? []
				: generateColumnData(column.id, columnsValue, 100, customLists),
		[column, customLists]
	);

	const TableSection = () => {
		if (!error) {
			return (
				<Paper sx={{ width: "100%", overflow: "hidden" }}>
					<TableContainer
						sx={{
							width: "100%",
							overflow: "auto",
							maxHeight: "708px",
						}}
					>
						<Table size="small" stickyHeader>
							{/* <TableHead>
								<TableRow>
									<TableCell>{column.name}</TableCell>
								</TableRow>
							</TableHead> */}
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
			);
		} else {
			return (
				<Typography
					variant="Subtitle1"
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						width: "100%",
						height: "400px",
					}}
				>
					Error
				</Typography>
			);
		}
	};

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
				<TableSection />
			</Box>
		</>
	);
};

export default PreviewSection;
