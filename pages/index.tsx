import { Box, Button, Typography } from "@mui/material";
import type { NextPage } from "next";
import styles from "@/pages/index.module.scss";
import Link from "next/link";

const Home: NextPage = () => {
	return (
		<Box id={styles.container}>
			<Typography
				component="h2"
				variant="h6"
				id={styles.welcome}
			>
				Welcome to Pizza Joint
			</Typography>

			<Link href="/base">
				<Button 
					variant="outlined"
					id={styles.button}
				>
					Create Your Pizza
				</Button>
			</Link>
		</Box>
	);
};

export default Home;

