import React from 'react';

class QueryForm extends React.Component {
  state = { category: '' };

  handleChange = (e) => {
    this.setState({ category: e.target.value });
  }

  render() {
    const { category } = this.state;

    return (
      <form>
        <label htmlFor="category">
          <h1>Enter your query</h1>
          <input
            id="category"
            type="text"
            value={category}
            onChange={this.handleChange}
          />
        </label>
        <a
          className="btn query-btn"
          href={category}
        >
          Search
        </a>
      </form>
    );
  }
}

export default QueryForm;
