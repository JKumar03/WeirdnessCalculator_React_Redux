import React from 'react';
import { withRouter } from 'react-router-dom';
import { LikedCard } from "./liked-card";
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { allowedLikes } from "../../utils/constants";

const useStyles = makeStyles(_ => ({
    root: { flexGrow: 1 },
    button: {
        marginBottom: '2rem'
    }
}));

export const LikedGifs = withRouter(function (props) {
    const classes = useStyles();
    const likedGifs = useSelector(state => state.gifs.likedGifs);
    const allowedLikesItems = allowedLikes;
    const likedGifsLength = likedGifs.length;
    const isResultActionDisabled = likedGifsLength < allowedLikesItems;

    function goToResultPage() {
        props.history.push("/result");
    }

    return (
        <div className={classes.root}>
            <Typography className="section-title" variant="h6" gutterBottom>
                YOUR LIKED GIFS
            </Typography>

            <Grid container spacing={2}>
                {likedGifs.map((gif, index) => (
                    <Grid item key={index}>
                        <LikedCard gif={gif} />
                    </Grid>
                ))}
            </Grid>

            <div className="calculate-wierdness">
                <Button variant="contained" disabled={isResultActionDisabled} onClick={goToResultPage} className={classes.button} color="primary">
                    Calculate my weirdness score
                </Button>

                {likedGifsLength < allowedLikesItems && (
                    <p className="MuiTypography-body1">
                        <strong>You must <i>like</i> ({allowedLikesItems - likedGifsLength}) more GIF to calculate your score.</strong>
                    </p>)
                }

                {likedGifsLength === allowedLikesItems && (
                    <p className="MuiTypography-body1">
                        You can now calculate your wirdness score.
                    </p>)
                }
            </div>
        </div >
    );
})


