import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import DescriptionIcon from "@mui/icons-material/Description";
import IconButton from "@mui/material/IconButton";
import { ListItemButton, ListItemIcon } from "@mui/material";
import Lists from "./ListsList/Lists";

function ListsList() {
	return (
		<List
			sx={{
				width: "100%",
				bgcolor: "background.paper",
			}}
		>
			{Lists.map((List) => (
				<ListItem
					key={List.id}
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
							primary={List.name}
							sx={{
								paddingTop: "3px",
							}}
						/>
					</ListItemButton>
				</ListItem>
			))}
		</List>
	);
}

export default ListsList;
