import React from "react";
import ReactDataGrid from "react-data-grid";
//npm  install react-data-grid@5.0.1
//npm install react-data-grid-addons@5.0.1


const columns = [
  { key: "id", name: "ID", editable: true },
  { key: "title", name: "Title", editable: true },
  { key: "complete", name: "Complete", editable: true }
];

const rows = [
  { id: 0, title: "Task 1", complete: 20 },
  { id: 1, title: "Task 2", complete: 40 },
  { id: 2, title: "Task 3", complete: 60 }
];

export default class Grid1 extends React.Component {
  state = { rows };

  onGridRowsUpdated = ({ fromRow, toRow, updated }) => {
    this.setState(state => {
      const rows = state.rows.slice();
      for (let i = fromRow; i <= toRow; i++) {
        rows[i] = { ...rows[i], ...updated };
      }
      return { rows };
    });
  };
  render() {
    return (
        <div>
        <h2 className="bg-info text-center">Editable React Data Grid</h2>
      <ReactDataGrid
        columns={columns}
        rowGetter={i => this.state.rows[i]}
        rowsCount={3}
        onGridRowsUpdated={this.onGridRowsUpdated}
        enableCellSelect={true}
      />
      </div>
    );
  }
}


