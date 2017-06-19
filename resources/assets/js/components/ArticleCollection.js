import React from 'react';
import Article from 'Article';

export default class ArticleCollection extends React.Component {
  render() {
    return (
      <div className="blog-collection" id="blog">
        <Article></Article>
      </div>
    );
  }
}
