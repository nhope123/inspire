import { Button, debounce, Paper, Typography } from '@material-ui/core';
import { GitHub, Twitter } from '@material-ui/icons';
import clsx from 'clsx';
import React, {useState} from 'react';
import { quoteMe } from '../../helpers/randomHelper';
import { useStyles } from './inspireStyles';

interface InspireProps {
  author: string;
  bgColor: string;
  color: string;
  font: string;
  title: string;
}

const twitter = 'https://twitter.com/intent/tweet';
const website = 'https://nhope123.github.io/'; 
const github = 'https://github.com/nhope123/inspire';

const Inspire: React.FC = () => {
  const [quote, setQuote] = useState<InspireProps>(quoteMe());
  const classes = useStyles();

  const container ={backgroundColor: quote.bgColor, fontFamily: quote.font };
  const button = {backgroundColor: quote.bgColor, color: quote.color};

  console.log('quote', quote);

  const _handleClick = debounce(() => {
    setQuote(() => quoteMe());
  }, 600);
  

  return (
    <div 
      className={classes.root}
      style={container}
    >
      <Paper
        className={classes.card}
        elevation={15}
      >
        <div className={classes.fullBlock}>
          <Typography
            variant='h6'
            align='center'
          >
            {quote.title}
          </Typography>
        </div>
        <div className={classes.fullBlock}>
          <Typography
            variant='h6'
            align='right'
          >
            {`~ ${quote.author}`}
          </Typography>
        </div>
        <div className={clsx(classes.fullBlock, classes.bottom)}> 
          <div className={classes.linkBlock}>
            <a
              className={classes.link}
              style={{color: quote.bgColor}}
              href={twitter}
              target={'_blank'} 
              rel="noopener noreferrer"         
            >
              <Twitter />
            </a>
            <a
              className={classes.link}
              style={{color: quote.bgColor}}
              href={github}
              target={'_blank'}
              rel="noopener noreferrer"
            >
              <GitHub />
            </a>
          </div>       
          <Button
            className={classes.button}
            onClick={() => _handleClick()}
            onKeyDown={() => _handleClick()}
            style={button}
            title={quote.title}
            variant='contained'
          >
            {'Next Quote'}
          </Button>
        </div>     
      </Paper>
      <div className={clsx(classes.footer, classes.fullBlock)}>        
        <a
          className={classes.link}
          style={{color: quote.color}}
          href={website}
          target={'_blank'} 
          rel="noopener noreferrer"
        >
          {'by Nial'}
        </a>
      </div>
    </div>
    
  );
};

export default Inspire;
