import React, { useState } from 'react';
import SearchResult from "../search-result-component";
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { allowedLikes } from "../../utils/constants";
import { Formik } from 'formik';
import * as Yup from 'yup';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


const searchSchema = Yup.object().shape({
    search: Yup.string().required('Search term is required'),
})

const useStyles = makeStyles(_ => ({
    textField: {
        width: '40%',
        marginBottom: '1rem'
    },
    button: {
        display: 'block'
    },
    form: {
        marginTop: '2rem',
        marginBottom: '2rem'
    }
}));

export const Search = withRouter(function (props) {
    const classes = useStyles();
    const [searchTerm, setSearchTerm] = useState("");
    const [showResult, setShowResult] = useState(false);
    const dispatch = useDispatch();
    const likedGifs = useSelector(state => state.gifs.likedGifs)
    const searchRef = React.createRef();

    function resetSearchForm() {
        const { current } = searchRef;
        setShowResult(false);
        setSearchTerm("");
        current && current.focus();
    }

    function goToResultPage() {
        props.history.push("/result");
    }

    return (
        <React.Fragment>
            <Typography className="section-title" variant="h6" gutterBottom>
                APP OVERVIEW
            </Typography>
            <p className='MuiTypography-body1'>
                Find out how weird you are by selecting the GIFs that make you laugh.
                We'll show you the least weird one to start, but you can move the slider to make them weirder.
            </p>
            <p className='MuiTypography-body1'>
                When you find a  GIF you like, press the <i>Like</i> button, Once you like 5 GIFs, we'll show you how weird you are.
            </p>
            <div className={classes.form}>
                {likedGifs.length === allowedLikes
                    ? (<Button variant="contained" onClick={goToResultPage} color="primary">
                        Calculate My Wierdness Score
                        </Button>)
                    : (<Formik initialValues={{ search: searchTerm }}
                        onSubmit={(values) => {
                            setShowResult(false);
                            setSearchTerm(values.search.trim());
                            setShowResult(true);
                        }}
                        validate={values => {
                            let errors = {};
                            if (values.search.trim() === "") {
                                const { current } = searchRef;
                                current && current.focus();
                                errors.search = 'Search term is required';
                            }
                            return errors;
                        }}
                        validationSchema={searchSchema}>
                        {({ values, touched, errors, handleChange, handleBlur, handleSubmit }) => {
                            return (
                                <form onSubmit={handleSubmit}>
                                    <TextField
                                        error={errors.name && touched.name}
                                        label="Search term *"
                                        name="search"
                                        className={classes.textField}
                                        value={values.search}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        inputRef={searchRef}
                                        helperText={(errors.search && touched.search) && errors.search}
                                    />
                                    <Button type="submit" variant="contained" color="primary" className={classes.button}>
                                        search
                                     </Button>
                                </form>
                            );
                        }}
                    </Formik>)
                }
            </div>
            {showResult && <h2 className="MuiTypography-h6 your-result">YOUR RESULT</h2>}
            {showResult && <SearchResult searchTerm={searchTerm} resetSearchForm={resetSearchForm} likedGifs={likedGifs} dispatch={dispatch} />}
        </React.Fragment>
    )
})