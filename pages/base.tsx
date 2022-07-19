import { Box, Typography } from "@mui/material";
import styles from "@/pages/base.module.scss";
import RadioButtonsGroup from "@/components/BaseSelection";
import type { NextPage } from "next";

const base: NextPage = () => {  
  return (
    <Box id={styles.container}>
      <Typography
        component="h1"
        variant="h5"
        id={styles.heading}
      >
        Step 1: Choose Your Base
      </Typography>

      <RadioButtonsGroup></RadioButtonsGroup>
    </Box>
  );
}

export default base;