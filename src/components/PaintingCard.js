import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Box } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    img: {
        width: '100%',
        height: '400px'
    }
}
));

const PaintingCard = (props) => {
    const classes = useStyles();
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <Box mb={6} data-aos="fade-up">
            <Grid container component='section'>
                <Grid item sm={6}>
                    <Box display='flex'>
                        <img src={process.env.PUBLIC_URL + `/media/${props.datum.image}`} alt={props.datum.image} className={classes.img} />
                    </Box>
                </Grid>
                <Grid item sm={6} style={{ backgroundColor: '#F5F5F5' }}>
                    <Box px={5} py={5}>
                        <h3 style={{ marginBottom: '1.5rem' }}>Acrylic Painting {props.datum.id}</h3>
                        <p>{props.datum.desc}</p>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default PaintingCard;
