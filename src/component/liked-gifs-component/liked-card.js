import React, { useState } from "react";
import { string, shape, number, bool } from 'prop-types';
import { envConfig } from "../../utils";
import { useDispatch } from 'react-redux';
import { removeLikedGifFromList } from "../../action";

import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import { red } from '@material-ui/core/colors';
import CancelIcon from '@material-ui/icons/Cancel';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(_ => ({
    card: {
        width: '100%',
        height: 345
    },
    avatar: {
        backgroundColor: red[500],
        height: 40,
        width: 40
    }
}));

export function LikedCard(props) {
    const classes = useStyles();
    const { gif: { title, url, searchTerm = "", import_datetime = "" }, deleteIcon } = props;
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const completeTitle = (title || 'No Title Found')
    const gifTitle = completeTitle.length > 30 ? `${completeTitle.substring(0, 30)}...` : completeTitle;
    const gifUrl = (url || envConfig.giphy.noImage);

    function handleClose() {
        setOpen(false);
    };

    function handleClickOpen() {
        setOpen(true);
    };

    function deleteLikedGif() {
        dispatch(removeLikedGifFromList(searchTerm.trim()));
        setOpen(false);
    }
    return (
        <React.Fragment>
            <Card className={classes.card}>
                <CardHeader
                    avatar={<Avatar src={envConfig.giphy.logo} aria-label="giphy avatar" className={classes.avatar} />}
                    title={gifTitle}
                    subheader={new Date(import_datetime).toDateString()}
                    action={
                        deleteIcon && (<IconButton aria-label="settings" onClick={handleClickOpen}>
                            <CancelIcon />
                        </IconButton>)
                    } />
                <CardMedia component="img" image={gifUrl} title={gifTitle} />
            </Card>
            <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title">{"UNLIKE GIF?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you sure, you want to unlike this GIF from your liked list?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        No
                    </Button>
                    <Button onClick={deleteLikedGif} color="primary" autoFocus>
                        Yes
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>

    )
}

LikedCard.propTypes = {
    gif: shape({
        title: string.isRequired,
        url: string.isRequired,
        searchId: string.isRequired,
        wierdness: number.isRequired,
        import_datetime: string.isRequired,
        searchTerm: string.isRequired
    }).isRequired,
    deleteIcon: bool
}

LikedCard.defaultProps = {
    deleteIcon: true
}