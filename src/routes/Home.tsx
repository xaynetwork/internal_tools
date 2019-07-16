import React from 'react';
import { Link, RouteComponentProps } from '@reach/router';

import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardActionArea from '@mui/material/CardActionArea';

const useStyles = makeStyles((theme: Theme) => ({
  cardsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, minmax(auto, 1fr))',
    gap: '20px',
    padding: theme.spacing(4, 0),

    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: 'repeat(3, minmax(auto, 1fr))',
    },
  },
  cardActionArea: {
    padding: theme.spacing(4),
    color: 'inherit',
    textDecoration: 'none',
  },
}));

const links: {
  to: string;
  title: string;
}[] = [
  {
    to: '/signature',
    title: 'Signature',
  },
];

const Home: React.FC<RouteComponentProps> = () => {
  const classes = useStyles();
  return (
    <Box className={classes.cardsContainer}>
      {links.map((link) => (
        <Card key={link.to}>
          <CardActionArea
            className={classes.cardActionArea}
            component={Link}
            to={link.to}
          >
            {link.title}
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
};

export default Home;
