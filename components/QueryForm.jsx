import React from 'react';

class QueryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { category: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ category: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const categroyPath = this.state.category;
    window.location = categroyPath;
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="category">
            <h1>Enter your query</h1>
            <input
              id="category"
              type="text"
              value={this.state.category}
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
