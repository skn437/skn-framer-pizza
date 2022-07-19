import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import styles from "@/components/BaseSelection.module.scss";
import { useRecoilState } from "recoil";
import pizzaAtom from "@/recoil/pizzaAtom";
import Link from "next/link";
import { Box, Button } from "@mui/material";
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

const RadioButtonsGroup = () => {
	const [pizza, setPizza] = useRecoilState(pizzaAtom);

	return (
		<Box id={styles.base}>
			<FormControl id={styles.selection}>
				<FormLabel id="demo-radio-buttons-group-label">Base</FormLabel>

				<RadioGroup
					aria-labelledby="demo-radio-buttons-group-label"
					defaultValue="classic"
					name="radio-buttons-group"
					onChange={(e) => {
						setPizza({
							...pizza,
							base: e.target.value
						});
					}}
				>
					<FormControlLabel 
						value="classic" 
						control={<Radio />} 
						label="Classic"
					/>

					<FormControlLabel 
						value="thin-crispy" 
						control={<Radio />} 
						label="Thin & Crispy" 
					/>
					
					<FormControlLabel 
						value="thin-crust" 
						control={<Radio />} 
						label="Thin Crust" 
					/>
				</RadioGroup>
			</FormControl>

			<Link href={{
				pathname: "/toppings",
				query: pizza
			}}>
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
