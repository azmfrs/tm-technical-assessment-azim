import Grid from "@mui/material/Grid"
import { Provider } from "react-redux"
import MyForm from "./components/MyForm"
import store from './store'

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


const App = () => {

    return (
        <>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                        >
                            TM Technical Assessment - Azim
                        </Typography>
                    </Toolbar>
                </Container>
            </AppBar>
            <br />
            <Provider store={store}>
                <Grid container spacing={{ xs: 2, md: 3 }}>
                    <Grid item xs={12} md={4} lg={6}>
                        <MyForm />
                    </Grid>
                </Grid>
            </Provider>
        </>
    );
};
export default App;