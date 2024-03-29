import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(_ => ({
    root: { flexGrow: 1 },
    title: { flexGrow: 1 },
}));

export function Header() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Wierdness Calculator
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}