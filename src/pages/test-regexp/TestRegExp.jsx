import React, { Component } from 'react';
import classNames from 'classnames';

import Data from './data';

const PresetKey = Object.keys(Data);

class TestRegExp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      regexp: '',
      examples: [],
      examplesString: '',
      show: []
    };
  }

  handleRegExp = e => {
    this.setState({ regexp: e.target.value });
  };

  handleExamples = e => {
    const examplesString = e.target.value;
    const examples = examplesString
      .split('\n')
      .filter(i => i)
      .map(item => {
        const units = item.split('//').map(item => item.trim());
        return { sample: units[0], info: units[1] };
      });
    this.setState({ examples, examplesString });
  };

  handlePreset = e => {
    const key = e.target.dataset.key;

    this.setState({
      examples: Data[key],
      examplesString: Data[key].reduce((total, item) => `${total}${item.sample}  //${item.info}\n`, '')
    });
  };

  render() {
    const { regexp, examplesString } = this.state;
    const result = this.validate();

    return (
      <div className="container test-regexp">
        <h2>正则表达式校验</h2>
        <form>
          <div className="form-group row">
            <label className="col-2">RegExp:</label>
            <input type="text" className="col-9 form-control" value={regexp} onChange={this.handleRegExp} />
          </div>
          <div className="form-group row">
            <label className="col-2">Preset: </label>
            <div>
              {PresetKey.map(key => (
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  key={key}
                  data-key={key}
                  onClick={this.handlePreset}
                >
                  {key}
                </button>
              ))}
            </div>
          </div>
          <div className="form-group row">
            <label className="col-2">Examples: </label>
            <textarea
              className="form-control col-9"
              rows="9"
              value={examplesString}
              onChange={this.handleExamples}
            ></textarea>
          </div>
        </form>

        <table className="table table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>Sample</th>
              <th>Info</th>
              <th>State</th>
            </tr>
          </thead>
          <tbody>
            {result.map(item => (
              <tr key={item.sample} className={classNames({ 'bg-danger': item.state === false })}>
                <td>{item.sample}</td>
                <td>{item.info}</td>
                <td>{item.state + ''}</td>
              </tr>
            ))}
            {result.length === 0 && (
              <tr>
                <td colSpan="3">Null</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }

  validate = () => {
    const { regexp, examples } = this.state;
    const result = examples.map(item => {
      let reg;
      try {
        reg = new RegExp(regexp);
      } catch {
        reg = undefined;
      }

      return {
        sample: item.sample,
        info: item.info,
        state: regexp && reg && item.sample ? reg.test(item.sample) : ''
      };
    });
    return result;
  };
}

export { TestRegExp };
