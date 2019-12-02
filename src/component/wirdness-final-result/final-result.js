import React from 'react';
import { object } from 'prop-types';
import { LikedCard } from "../liked-gifs-component";
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';
import { restart } from "../../action";
import { allowedLikes } from "../../utils/constants"

const useStyles = makeStyles(_ => ({
    root: { flexGrow: 1 },
    result: {
        marginTop: '2rem',
        marginBottom: '2rem'
    },
    button: {
        marginTop: '1rem',
        marginBottom: '1rem'
    }
}));

export const FinalResult = withRouter(function (props) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const likedGifs = useSelector(state => state.gifs.likedGifs);

    function startOver() {
        dispatch(restart())
        props.history.push("/")
    }

    function calulateWirdness() {
        const total = likedGifs.reduce(function (accumulator, gif) {
            return accumulator + (gif.wierdness || 0)
        }, 0);
        return (total / allowedLikes).toFixed(2)
    }

    return (
        <div className={classes.root}>
            <div className={classes.result}>
                {likedGifs.length === 0 ? (
                    <Typography variant="h6">
                        No gif selected
                    </Typography>)
                    : (
                        <Typography variant="h6" className="score">
                            You scored an {calulateWirdness()} out of 10 on wierdness Scale!
                    </Typography>)
                }
            </div>
            {likedGifs.length !== 0 && (
                <React.Fragment >
                    <Typography className="section-title" variant="h6" gutterBottom>
                        The GIFs you liked
                    </Typography>

                    <Grid container spacing={3} className="final-result">
                        {likedGifs.map((gif, index) => (
                            <Grid item key={index}>
                                <LikedCard deleteIcon={false} gif={gif} />
                                <Typography className="section-title" variant="h6" gutterBottom>
                                    {gif.wierdness}/10
                                </Typography>
                            </Grid>
                        ))}
                    </Grid>
                </React.Fragment>
            )}
            <div className="start-over">
                <Button variant="contained" onClick={startOver} className={classes.button} color="primary">
                    start over
                </Button>
            </div>
        </div >
    );
})

FinalResult.propTypes = {
    history: object.isRequired
}