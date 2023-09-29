import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useColumnsValue } from "../../context/ColumnsContext";
import { useCustomListValue } from "../../context/CustomListContext";
import { validateAllColumns } from "../../helpers/DataValidation";
import { Box, Typography } from "@mui/material";
import { generateHeaders, generateRows } from "../../helpers/DataGeneration";
import { useEffect, useState } from "react";

const DataTable = () => {
	const columns = useColumnsValue();
	const customLists = useCustomListValue();

	const headers = generateHeaders(columns);
	const rows = generateRows(columns, 200, customLists);

	return (
		<Box>
			<Typography variant="subtitle2" sx={{ paddingBottom: "10px" }}>
				First 200 rows preview:
			</Typography>
			<TableContainer
				component={Paper}
				sx={{
					boxShadow: 0,
					border: "1px solid rgba(0, 0, 0, 0.12)",
					maxHeight: "600px",
					overflow: "auto",
				}}
			>
				<Table sx={{ minWidth: 150 }} size="small" stickyHeader>
					<TableHead>
						<TableRow key={1}>
							{headers.map((header, i) => (
								<TableCell
									key={"h" + i}
									sx={{
										position: "sticky",
										top: "-1px",
										bgcolor: "#fff",
									}}
								>
									{header}
								</TableCell>
							))}
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row, j) => (
							<TableRow
								key={"r" + j}
								sx={{
									"&:last-child td, &:last-child th": {
										border: 0,
									},
								}}
							>
								{row.map((line, k) => (
									<TableCell
										component="th"
										scope="row"
										key={"c" + j + k}
										sx={{ height: "33px" }}
									>
										{line}
									</TableCell>
								))}
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Box>
	);
};

export default DataTable;
