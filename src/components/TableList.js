import React, { Component } from 'react';
import './TableList.css';

class TableList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const name = event.target.name.value;
    const age = event.target.age.value;
    const gender = event.target.gender.value;
    const newItem = { name, age, gender };
    this.setState(prevState => ({
      items: [...prevState.items, newItem]
    }), () => console.log(this.state.items));
    event.target.reset();
  }

  render() {
    return (
      <div className="container">
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>Nama</th>
                <th>Umur</th>
                <th>Jenis Kelamin</th>
              </tr>
            </thead>
            <tbody>
              {this.state.items.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.gender}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="form-container">
          <form onSubmit={this.handleSubmit}>
            <label>
              Nama:
              <input type="text" name="name" />
            </label>
            <label>
              Umur:
              <input type="number" name="age" />
            </label>
            <label>
              Jenis Kelamin:
              <select name="gender">
                <option value="male">Laki-laki</option>
                <option value="female">Perempuan</option>
              </select>
            </label>
            <button type="submit">Tambah Item</button>
          </form>
        </div>
      </div>
    );
  }
}

export default TableList;