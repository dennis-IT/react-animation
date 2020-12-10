import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({

}
));

const PaintingCard = (props) => {
    const classes = useStyles();

    return (
        <section className={classes.card}>
            <img src={process.env.PUBLIC_URL + `/media/${props.datum.image}`} alt={props.datum.image} />
            <div>
                <h3>Acrylic Painting {props.datum.id}</h3>
                <p>{props.datum.desc}</p>
            </div>
        </section>
    );
};

export default PaintingCard;
