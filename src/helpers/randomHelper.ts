import quotes from '../assets/quotes';
import {colors, font, betterWithBlack} from '../assets/variables';

export const quoteMe = () => {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  var randomColor = colors[Math.floor(Math.random() * colors.length)] ;
  var randomFont = font[ Math.floor(Math.random() * font.length) ];
  /* select font contrast for WCAG */
  var fontColor;
  if (betterWithBlack.includes(randomColor)) { fontColor = 'black'; }
  else {  fontColor = 'white'; }

  return ({
    title: quotes[randomNumber].title,
    author: quotes[randomNumber].author,
    bgColor: randomColor,
    font: randomFont,
    color: fontColor,
  });
}
