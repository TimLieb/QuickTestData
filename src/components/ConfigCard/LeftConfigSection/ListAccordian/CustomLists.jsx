import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import DescriptionIcon from "@mui/icons-material/Description";
import {
	Box,
	Button,
	Divider,
	ListItemButton,
	ListItemIcon,
	Modal,
	Typography,
} from "@mui/material";
import ListCreator from "./CustomLists/ListCreator";

function CustomLists() {
	return (
		<>
			<List
				sx={{
					width: "100%",
					bgcolor: "background.paper",
				}}
			>
				<ListItem
					key={1}
					disableGutters
					sx={{
						padding: 0,
					}}
				>
					<ListItemButton
						sx={{
							padding: 0,
							":hover": {
								bgcolor: (theme) => theme.palette.divider,
							},
						}}
					>
						<ListItemIcon
							sx={{
								width: "24px",
								minWidth: "24px",
								height: "24px",
								marginLeft: "70px",
							}}
						>
							<DescriptionIcon />
						</ListItemIcon>
						<ListItemText
							primary={"Test"}
							sx={{
								paddingTop: "3px",
							}}
						/>
					</ListItemButton>
				</ListItem>
			</List>
			<Divider />
			<ListCreator />
		</>
	);
}

export default CustomLists;
