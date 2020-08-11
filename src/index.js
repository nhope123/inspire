/* Author: Nial Hope
   Creation date: 8th August, 2020
*/
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
/* 11 Quotes to be randomized: {title:'', author:''},*/
let quotes = {
  1:{title:"Programming isn't about what you know; it's about what you can figure out.", author:'Chris Pine'},
  2:{title:"The only way to learn a new programming language is by writing programs in it.", author:'Dennis Ritchie'},
  3:{title:"Sometimes it's better to leave something alone, to pause, and that's very true of programming.", author:'Joyce Wheeler'},
  4:{title:"In some ways, programming is like painting. You start with a blank canvas and certain basic raw materials. You use a combination of science, art, and craft to determine what to do with them.",
   author:'Andrew Hunt'},
  5:{title:"Testing leads to failure, and failure leads to understanding.",
   author:'Burt Rutan'},
  6:{title:"The best error message is the one that never shows up.",
   author:'Thomas Fuchs'},
  7:{title:"The most damaging phrase in the language is.. it's always been done this way",
   author:'Grace Hopper'},
  8:{title:"Don't write better error messages, write code that doesn't need them.",
   author:'Jason C. McDonald'},
  9:{title: "I think everybody in this country should learn how to program a computer because it teaches you how to think.",
   author:'Steve Jobs'},
  10:{title:"Measuring programming progress by lines of code is like measuring aircraft building progress by weight.",
   author:'Bill Gates'},
  11:{title:"The best thing about a boolean is even if you are wrong, you are only off by a bit.",
   author:'Anonymous'}
};

/* Random color for bacground and text */
let colors = ['#50796d','#FF6F61','#9B1B30','#77212E','#dd713c',
              '#fa9a85','#5a3e36', '#ce5b78','#935529','#e08119', '#2a4b7c','#577284',
              '#f96714','#264e36','#d79728','#2a293e','#9f9c99', '#797b3a','#dd4132',
              '#9e1030','#fe840e','#c62168','#8d9440','#ffd662','#00539c'
            ];

/* Random font-family for text */
let font = ["'Balsamiq Sans', cursive",
            "'Open Sans', sans-serif",
            "'Roboto', sans-serif",
            "monospace"];

/* Background color better suited for black fonts */
let betterWithBlack = ['#FF6F61','#DF7B49','#fa9a85','#D98197','#e08119','#F96C1A','#d79728',
                        '#9f9c99','#999C49','#E7746A','#fe840e','#ffd662'];

/* Function select random quote, random color, random font-family and select passing WCAG font contrast */
const quoteMe = ()=>{
  var randomNumber = Math.floor(Math.random() * 11) + 1;
  var randomColor = colors[Math.floor(Math.random() * colors.length)] ;
  var randomFont = font[ Math.floor(Math.random() * font.length) ];
  /* select font contrast for WCAG */
  var fontColor;
  if (betterWithBlack.includes(randomColor)) { fontColor = 'black'; }
  else {  fontColor = 'white'; }
  return ([quotes[randomNumber].title, quotes[randomNumber].author, randomColor, randomFont, fontColor ]);
}

/* Main app component */
class Inspire extends React.Component{
  constructor(props){
    super(props);
    this.state = {color: this.props.color,
                  title: this.props.title,
                  author:this.props.author,
                  fonts: this.props.font,
                  textColor: this.props.fontColor};
    this.randomizer = this.randomizer.bind(this);
  }
  /* Create / update app with random content */
  randomizer(){
    const [text, name, bColor, font, fontColor] = quoteMe();
    this.setState(
      {
        title: text, author: name, color: bColor, fonts: font, textColor: fontColor
      }
    )
  }

  render(){
    return(
      <div className="react-container" style={{backgroundColor: this.state.color, fontFamily:this.state.fonts }}>{/* Main container*/}
        <section id="quote-box"  > {/* Container hold the random quote elements */}
          <div id="text" > {this.state.title}</div> {/* Random quote text */}
          <div id="author" title="Author">{"~ " + this.state.author}</div> {/* Random quote Author citing */}
          <div className="interact">
            <a id="tweet-quote" href="twitter.com/intent/tweet" title="Tweet quote" style={{color: this.state.color}} > {/* Link to tweet quote */}
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </a>
            <div id="new-quote" onClick={this.randomizer} onKeyDown={this.randomizer} tabindex="0" title="Next Quote"
             style={{ backgroundColor: this.state.color, color: this.state.textColor}}>Next Quote</div> {/* Next quote selection buttom */}
          </div>
        </section>
        <div id="creator" style={{color: this.state.textColor}}>by Nial</div> {/* Creator citation */}
      </div>
    );
  }
}

const [text, name, bColor, fonty,fontsColor] = quoteMe();
const prop = {color: bColor, title: text, author: name, font:fonty, fontColor:fontsColor};
/* Render the app */
ReactDOM.render(<Inspire {...prop} />,document.getElementById('body'));
