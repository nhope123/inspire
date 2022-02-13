import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    height: '100vh',
    width: '100vw',    
  },
  card: {
    maxWidth: `${theme.spacing(94)}px`,
    width: '90%',
    height: 'auto',
    padding: theme.spacing(2),
    borderRadius: `${theme.spacing(1)}px`,
    display: 'flex',
    flexDirection: 'column',
    rowGap: `${theme.spacing(1)}px`,
  },
  fullBlock: {
    width: '100%',
  },
  bottom: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  linkBlock: {
    display: 'flex',
    columnGap: `${theme.spacing(1)}px`,
    alignItems: 'center',
    justifyContent: 'center',
  },
  link: {
    position: 'relative',
    height: 'auto',
    transform: 'scale(0.9)',
    textDecoration: 'none',
    '& :hover': {
      color: 'inherit',
      transform: 'scale(1.1)',
      zIndex: 2,

    },
    '& :visited': {color: 'inherit'},
  },
  footer: {
    position: 'absolute',
    bottom: '10vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    fontWeight: 'bold',    
  },
  button: {
    '& :active': {
      transform: 'scale(0.95)',
    },
  },
}));