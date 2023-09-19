function NavBarSide() {
	return (
		<div
			style={{
				zIndex: 10,
				display: "inline-block",
				width: "150px",
				height: "100vh",
				position: "fixed",
				background: "white",
				borderRight: "1px solid rgba(0, 0, 0, 0.12)",
			}}
		></div>
	);
}

export default NavBarSide;
