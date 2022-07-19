import { Container, Grid, ThemeProvider } from "@mui/material";
import theme from "@/layout/theme";
import Header from "@/components/Headers";

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Grid container>
          <Grid 
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
          >
            <Header></Header>
            {children}
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default Layout;