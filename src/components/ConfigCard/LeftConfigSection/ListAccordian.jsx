import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { useCurrentColumn } from "../../../context/ColumnsContext";
import SampleLists from "./ListAccordian/SampleLists";
import CustomLists from "./ListAccordian/CustomLists";

const Accordion = styled((props) => (
	<MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
	borderTop: `1px solid ${theme.palette.divider}`,
	borderBottom: `1px solid ${theme.palette.divider}`,
	"&:not(:last-child)": {
		borderBottom: 0,
	},
	"&:before": {
		display: "none",
	},
}));

const AccordionSummary = styled((props) => (
	<MuiAccordionSummary
		expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
		{...props}
	/>
))(({ theme }) => ({
	flexDirection: "row-reverse",
	"& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
		transform: "rotate(90deg)",
	},
	"& .MuiAccordionSummary-content": {
		marginLeft: theme.spacing(1),
	},
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
	padding: theme.spacing(2),
	borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

function ListAccordian() {
	const column = useCurrentColumn();

	const [expanded, setExpanded] = React.useState(column.listConfig.type);

	const handleChange = (panel) => (event, newExpanded) => {
		setExpanded(newExpanded ? panel : false);
	};

	return (
		<>
			<Accordion
				expanded={expanded === "sample"}
				onChange={handleChange("sample")}
			>
				<AccordionSummary
					aria-controls="panel1d-content"
					id="panel1d-header"
				>
					<Typography>Sample lists</Typography>
				</AccordionSummary>
				<AccordionDetails
					sx={{
						padding: 0,
					}}
				>
					<SampleLists />
				</AccordionDetails>
			</Accordion>
			<Accordion
				expanded={expanded === "custom"}
				onChange={handleChange("custom")}
			>
				<AccordionSummary
					aria-controls="panel2d-content"
					id="panel2d-header"
				>
					<Typography>Custom lists</Typography>
				</AccordionSummary>
				<AccordionDetails
					sx={{
						padding: 0,
					}}
				>
					<CustomLists />
				</AccordionDetails>
			</Accordion>
		</>
	);
}

export default ListAccordian;
