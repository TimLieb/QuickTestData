import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import DescriptionIcon from "@mui/icons-material/Description";
import IconButton from "@mui/material/IconButton";
import {
	Divider,
	ListItemButton,
	ListItemIcon,
	TextField,
	FormGroup,
	FormControlLabel,
	Checkbox,
} from "@mui/material";
import { Height } from "@mui/icons-material";

function ValueCard() {
	return (
		<>
			<Divider />
			<List
				sx={{
					width: "100%",
					paddingLeft: "20px",
					paddingTop: "15px",
				}}
			>
				<ListItem
					key={1}
					disableGutters
					sx={{
						padding: 0,
					}}
				>
					<TextField
						id="stringLength"
						label="Length"
						variant="outlined"
						helperText="Integer or Range e.g '3' or '3-9'"
						size="small"
					/>
				</ListItem>
				<ListItem
					key={2}
					sx={{
						padding: 0,
						paddingTop: "10px",
					}}
				>
					<FormGroup>
						<FormControlLabel
							control={<Checkbox defaultChecked />}
							label="Lowercase characters"
							sx={{
								height: "38px",
							}}
						/>
						<FormControlLabel
							control={<Checkbox />}
							label="Uppercase characters"
							sx={{
								height: "38px",
							}}
						/>
						<FormControlLabel
							control={<Checkbox />}
							label="Numbers"
							sx={{
								height: "38px",
							}}
						/>
						<FormControlLabel
							control={<Checkbox />}
							label="Special characters"
							sx={{
								height: "38px",
							}}
						/>
					</FormGroup>
				</ListItem>
			</List>
		</>
	);
}

export default ValueCard;
