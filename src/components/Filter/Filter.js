import React from 'react';
import LogRender from '../LogRender';
import style from './Filter.module.css';

class Filter extends LogRender {
  constructor(props) {
    super(props);

    this.from = React.createRef();
    this.before = React.createRef();
  }

  handleSubmit = event => {
    event.preventDefault();

    const from = Number(this.from.current.value);
    const before = Number(this.before.current.value);

    if (Number.isNaN(from) || Number.isNaN(before) || from < 0) {
      this.props.getPrice(null, null);
    } else {
      this.props.getPrice(from, before);
    }
  };

  render() {
    return (
      <form className={style.filter} onSubmit={this.handleSubmit}>
        <fieldset className={style.fieldset}>
          <legend className={style.filterTitle}>Цена</legend>
          <div className={style.fieldContainer}>
            <div className={style.field}>
              <label className={style.fieldLabel} htmlFor="from">
                от
              </label>
              <input
                className={style.fieldInput}
                type="text"
                name="from"
                id="from"
                placeholder="1000"
                ref={this.from}
                defaultValue={this.props.from}
                required
              />
            </div>
            <div className={style.field}>
              <label className={style.fieldLabel} htmlFor="before">
                до
              </label>
              <input
                className={style.fieldInput}
                type="text"
                name="before"
                id="before"
                placeholder="40000"
                ref={this.before}
                defaultValue={this.props.before}
                required
              />
            </div>
          </div>
          <button className={style.filterApply} type="submit">
            Применить
          </button>
        </fieldset>
      </form>
    );
  }
}

export default Filter;
