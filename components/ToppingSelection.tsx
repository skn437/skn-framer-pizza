import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Box, Button } from "@mui/material";
import styles from "@/components/ToppingSelection.module.scss";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import Link from "next/link";
import { useRouter } from "next/router";
import toppings from "@/pages/toppings";

const RadioButtonsGroup = () => {
	const router = useRouter();
  const [pizza, setPizza] = React.useState(router.query);

	return (
		<Box id={styles.topping}>
			<FormControl id={styles.selection}>
				<FormLabel id="demo-radio-buttons-group-label">Toppings</FormLabel>
				<RadioGroup
					aria-labelledby="demo-radio-buttons-group-label"
					defaultValue="female"
					name="radio-buttons-group"
          onChange={(e) => {
            setPizza({
              ...pizza,
              toppings: e.target.value
            });
          }}
				>
					<FormControlLabel
						value="extra-cheese"
						control={<Radio />}
						label="Extra Cheese"
					/>
					<FormControlLabel value="olive" control={<Radio />} label="Olive" />
					<FormControlLabel value="onion" control={<Radio />} label="Onion" />
				</RadioGroup>
			</FormControl>

			<Link
				href={{
					pathname: "/order",
					query: pizza
				}}
			>
				<Button
					variant="contained"
					endIcon={<ArrowForwardIosOutlinedIcon />}
					id={styles.button}
				>
					Next
				</Button>
			</Link>
		</Box>
	);
};

export default RadioButtonsGroup;
