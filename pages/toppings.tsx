import { Box, Typography } from "@mui/material";
import styles from "@/pages/toppings.module.scss";
import ColorRadioButtons from "@/components/ToppingSelection";

const toppings = () => {
  return (
    <Box id={styles.container}>
      <Typography
        component="h1"
        variant="h5"
        id={styles.heading}
      >
        Step 2: Choose Toppings
      </Typography>

      <ColorRadioButtons></ColorRadioButtons>
    </Box>
  );
}

export default toppings;