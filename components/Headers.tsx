import { Box, Typography } from "@mui/material";
import styles from "@/components/Headers.module.scss";

const Header = () => {
	return (
		<Box 
			id={styles.header} 
			component="div"
		>
			<header>
				<Typography 
          component="h1" 
          variant="h3"
          id={styles.banner}
        >
					Pizza Time
				</Typography>
			</header>
		</Box>
	);
};

export default Header;
