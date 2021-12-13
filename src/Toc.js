import { Component } from 'react';


class Toc extends Component {


  render() {
    const list=[];
    for (let i = 0; i < this.props.contents.length; i++) {
      list.push( <li key ={this.props.contents[i].id} >
        
        <a href={this.props.contents[i].id + '.html'}
        onClick={(e) => {
          this.props.onChangepage(this.props.contents[i].id);
          e.preventDefault();
        }}>
        {this.props.contents[i].title}
      </a></li> );

    }
    return (
      <nav>
        <ul>
          {list}
        </ul>
      </nav>

    );
  }
}
export { Toc }
