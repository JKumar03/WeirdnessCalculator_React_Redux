import React, { useState, useEffect } from "react";
import { string, func, array } from 'prop-types';
import { useSelector } from 'react-redux';
import { envConfig } from "../../utils";
import { addLikedGifToList, removeLikedGifFromList, fetchWierdness } from "../../action";

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { red } from '@material-ui/core/colors';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import { makeStyles } from '@material-ui/core/styles';
import Skeleton from '@material-ui/lab/Skeleton';


const ratings = [...Array(11).keys()].map(function (value) {
    return { value, label: value.toString() }
})

const useStyles = makeStyles(_ => ({
    card: {
        maxWidth: '100%',
        margin: 'auto'
    },
    media: {
        height: 0,
        paddingTop: '56.25%',
    },
    avatar: {
        backgroundColor: red[500]
    },
    slider: {
        marginTop: '1rem'
    },
    fullSkeleton: {
        height: 10,
        width: '80%'
    },
    halfSkeleton: {
        height: 10,
        width: '40%'
    },
    button: {
        paddingLeft: '1rem',
        paddingRight: '1rem',
        backgroundColor: '#3f51b5',
        color: '#fff'
    },
    buttonSkelton: {
        width: '40%',
        height: 36
    }
}));


function valuetext(value) {
    return value
}

export function SearchResult(props) {
    const { searchTerm, resetSearchForm, dispatch, likedGifs } = props;
    const classes = useStyles();
    const [wierdness, setWierdness] = useState(0);
    const gif = useSelector(state => state.wierdness.gif);
    const isLoading = useSelector(state => state.wierdness.isLoading);
    const { title = '', url = '', import_datetime = '' } = (gif || {});
    const gifTitle = (title || 'No Title Found');
    const gifUrl = (url || envConfig.giphy.noImage);
    const isError = useSelector(state => state.wierdness.isErrror);;

    const matchedGif = likedGifs.find(_gif => (_gif.searchTerm.trim() === searchTerm.trim()));
    const isLiked = matchedGif ? true : false;

    useEffect(function () {
        if (searchTerm) {
            dispatch(fetchWierdness(searchTerm, wierdness));
        }
    }, [wierdness, searchTerm,dispatch]);


    function handleChange(_, newValue) {
        setWierdness(newValue);
    }

    function addLikedGif() {
        const values = { ...gif, wierdness, searchTerm: searchTerm.trim() }
        dispatch(addLikedGifToList(values));
        resetSearchForm && resetSearchForm();
    }

    function removeLikedGif(searchTerm) {
        return function () {
            const term = searchTerm ? searchTerm.trim() : '';
            dispatch(removeLikedGifFromList(term))
        }
    }

    return (
        <React.Fragment>
            {isError && (<Typography gutterBottom variant="h6">
                Error in Fetching retry in some time.
                    </Typography>)}
            <Card className={classes.card}>
                <CardHeader
                    avatar={
                        isLoading
                            ? (<Skeleton variant="circle" width={40} height={40} />)
                            : (<Avatar src={envConfig.giphy.logo} aria-label="giphy avatar" className={classes.avatar} />)
                    }
                    title={isLoading ? <Skeleton className={classes.fullSkeleton} /> : gifTitle}
                    subheader={isLoading ? <Skeleton className={classes.halfSkeleton} /> : new Date(import_datetime).toDateString()} />


                {isLoading
                    ? (<Skeleton variant="rect" className={classes.media} />)
                    : (<CardMedia className={classes.media} image={gifUrl} title={gifTitle} />)
                }

                <CardActions>
                    {(isLoading || !gif)
                        ? (<Skeleton variant="rect" className={classes.buttonSkelton} />)
                        : (
                            <React.Fragment>
                                {isLiked
                                    ?
                                    (<Button className={classes.button} color="primary" onClick={removeLikedGif(matchedGif.searchTerm)} startIcon={<ThumbUpIcon />}>
                                        Unlike
                                    </Button>)

                                    :
                                    (<Button className={classes.button} color="default" onClick={addLikedGif} startIcon={<ThumbUpIcon />}>
                                        Like
                                    </Button>)
                                }
                            </React.Fragment>
                        )}
                </CardActions>

                <CardContent>
                    <Typography gutterBottom variant="h6">
                        Weirdness Scale
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Move the slider to make them weirder, when you find a gif you press like button.
                    </Typography>
                    <Slider
                        className={classes.slider}
                        onChange={handleChange}
                        defaultValue={wierdness}
                        getAriaValueText={valuetext}
                        aria-labelledby="discrete-slider-always"
                        step={1}
                        max={10}
                        min={0}
                        marks={ratings}
                        valueLabelDisplay="auto" />
                </CardContent>


            </Card>
        </React.Fragment>

    )
}

SearchResult.prototype = {
    searchTerm: string.isRequired,
    resetSearchForm: func.isRequired,
    dispatch: func.isRequired,
    likedGifs: array.isRequired
}
