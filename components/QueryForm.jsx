import React from 'react';

class QueryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { category: '' };
  }

  handleChange = (e) => {
    this.setState({ category: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { category } = this.state;
    window.location = category;
  }

  render() {
    const { category } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="category">
            <h1>Enter your query</h1>
            <input
              id="category"
              type="text"
              value={category}
              onChange={this.handleChange}
            />
          </label>
          <input
            className="btn query-btn"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    );
  }
}

export default QueryForm;
