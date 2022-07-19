import { Box, ListItem, Typography } from "@mui/material";
import { useRouter } from "next/router";
import styles from "@/pages/order.module.scss";

const order = () => {
  const router = useRouter();
  console.log(`Query Order: `, router.query);
  const array = Object.entries(router.query);
  console.log(`Array: `, array);
  return (
    <Box>
      <Typography
        component="h4"
        variant="h6"
      >
        Your order: 
      </Typography>

      <ul id={styles.pizza}>
        <li>Base: {router.query.base}</li>
        <li>Toppings: {router.query.toppings}</li>
      </ul>
    </Box>
  );
};

export default order;