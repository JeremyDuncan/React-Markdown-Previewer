const root = ReactDOM.createRoot(
  document.getElementById('root')
);


const projectName = 'markdown-previewer';

marked.setOptions({
  breaks: true,
  highlight: function (code) {
    return Prism.highlight(code, Prism.languages.javascript, 'javascript');
  }
});

const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  return `<a target="_blank" href="${href}">${text}</a>`;
};



class ReactApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editorInput: placeholder
    }
  }
  
  handleChange = (e) => {
    console.log(e.target.value)
    this.setState({editorInput: e.target.value})
  }
  
  
  render() {
    return (
      <div id="wrapper">
        
        <h1 id="editor-title">Editor</h1>
        <textarea 
          id="editor" 
          name="Editor" 
          rows="30" 
          cols="80" 
          value={this.state.editorInput} 
          onChange={this.handleChange}
          >
        </textarea>
        
        <Preview editorInput={this.state.editorInput} />
   
      </div>
    );
  }
}       



class Preview extends React.Component {
  render() {
    return (
      <div>
      <h1 id="markdown-preview-title">Markdown Preview</h1>
      <div dangerouslySetInnerHTML={{ __html: marked(this.props.editorInput, { renderer: renderer })}} id="preview" />

      <div className="footer">
          <div id="name">Jeremy Duncan &copy; 2022</div>
          <div id="page"><a href="https://github.com/JeremyDuncan">Jeremy's GitHub</a> </div>
        </div>
      </div>
    );
  }
}



root.render(
  <div>
    <ReactApp />
  </div>
);


const placeholder = 
`
# This is My React Markdown Previewer!

## This is a Sub-Heading
### Here is some cool stuff you can do:

You can add code, \`<div><p>HTML Markup</p></div>\`, between 2 backticks.

\`\`\`
// Here is some JavaScript:

var markupFunction = (firstStatement, secondStatement) => {
  if (firstStatement == true && secondStatement == true) {
    return true;
    } else {
    return false;
    }
}
\`\`\`

You can make text **bold**, _italic_, or **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

You can make [links](https://jeremyduncan.github.io/).
> You can even make Block Quotes!

You can make tables if you want:

Table Header 1 | Table Header 2 | Table Header 3
------------ | ------------- | -------------
Table Data | Table Data | Table Data
Table Data | Table Data | Table Data

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.
          - pretty cool huh?


1. You can make numbered lists
1. Use just 1s if you want!
1. See how easy that was?
<h3>Oh and you can add images like this:</h3>


<img  width="400px" src="https://jeremyduncan.github.io/devry-projects/assets/img/Jeremy_duncan_logo_portfolio.png" />



<h3>or like this:</h3>

![Jeremy Duncan's Logo](https://jeremyduncan.github.io/devry-projects/assets/img/Jeremy_duncan_logo_portfolio.png)

## You can even add styles to your prevew!
\`\`\`
 <style>
 
  #preview {
    border:5px solid black;
    border-radius: 15px;
    background-color: grey;
    padding: 10px;
  }
  
  p {
    color: white;
  }
  
  h1 {
    color: #FFF;
    text-shadow: #FFF 0 -1px 4px, #ff0 0 -2px 10px,
    #ff8000 0 -10px 20px, red 0 -18px 40px;
  }
  
  h2 {
    color: #FFF;

    text-shadow: 0 0 5px #FFF, 0 0 10px #FFF, 
    0 0 15px #FFF, 0 0 20px #49ff18, 
    0 0 30px #49FF18, 0 0 40px #49FF18, 
    0 0 55px #49FF18, 0 0 75px #49ff18;
  }
  
  h3 {
    color: #FFFFFF;
    text-shadow: 0 1px 0 #CCCCCC, 0 2px 0 #c9c9c9, 
    0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa,
    0 6px 1px rgba(0,0,0,.1), 0 0 5px rgba(0,0,0,.1), 
    0 1px 3px rgba(0,0,0,.3), 0 3px 5px rgba(0,0,0,.2), 
    0 5px 10px rgba(0,0,0,.25), 0 10px 10px rgba(0,0,0,.2), 
    0 20px 20px rgba(0,0,0,.15);
  }
  
  > p > code {
    padding: 3px;
    color black;
  }
  
 code {
    background: white;
    font-size: 0.875rem;
    font-weight: bold;
    color: black;
  }
  
  pre {
    display: block;
    overflow: auto;
    background: white;
    padding: 5px;
    line-height: 1.2;
    border-radius: 5px;
    box-shadow: 3px 3px 23px black;
  }
  
  li {
    color: white;
  }
\`\`\`

 <style>
 
  #preview {
    border:5px solid black;
    border-radius: 15px;
    background-color: grey;
    padding: 10px;
  }
  
  p {
    color: white;
  }
  
  h1 {
    color: #FFF;
    text-shadow: #FFF 0 -1px 4px, #ff0 0 -2px 10px, #ff8000 0 -10px 20px,
    red 0 -18px 40px;
  }
  
  h2 {
    color: #FFF;
    text-shadow: 0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px #49ff18, 
    0 0 30px #49FF18, 0 0 40px #49FF18, 0 0 55px #49FF18, 0 0 75px #49ff18;
  }
  
  h3 {
    color: #FFFFFF;
    text-shadow: 0 1px 0 #CCCCCC, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 
    0 5px 0 #aaa, 0 6px 1px rgba(0,0,0,.1), 0 0 5px rgba(0,0,0,.1), 
    0 1px 3px rgba(0,0,0,.3), 0 3px 5px rgba(0,0,0,.2), 0 5px 10px rgba(0,0,0,.25), 
    0 10px 10px rgba(0,0,0,.2), 0 20px 20px rgba(0,0,0,.15);
  }
  
  > p > code {
    padding: 3px;
    color black;
  }
  
 code {
    background: white;
    font-size: 0.875rem;
    font-weight: bold;
    color: black;
  }
  
    pre {
    display: block;
    overflow: auto;
    background: white;
    padding: 5px;
    line-height: 1.2;
    border-radius: 5px;
    box-shadow: 3px 3px 23px black;
  }
  
  li {
  color: white;
  }
</style>
`;