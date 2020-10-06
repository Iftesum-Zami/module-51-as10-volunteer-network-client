import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    width: 230
  },
  media: {
    height: 180,
  },
});

const Volunteer = (props) => {
    const {id, url, title} = props.work;

    const classes = useStyles();
    const cardStyle = {
        margin: '10px'
    }

    return (
        <div className="col-md-3">
            <Card style={cardStyle} className={classes.root}>
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image={url}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="h5">
                            {title}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
};

export default Volunteer;