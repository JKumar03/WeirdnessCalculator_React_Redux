import React from 'react';
import Search from "../search-component";
import LikedGifs from "../liked-gifs-component"
import Grid from '@material-ui/core/Grid';

export default function Home() {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={6}>
                <Search />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <LikedGifs />
            </Grid>
        </Grid>
    );
}