// Table component

import {Component} from "react";

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
                <th>Remove</th>
            </tr>
        </thead>
    )
}

const TableBody = (props) => {
    const rows = props.data.map((row,index) => {
        return (
            <tr key={index}>
                <td>{row.name} </td>
                <td>{row.job} </td>
                <td>
                    <button onClick={() => props.removeData(index)}> Delete </button>
                </td>
            </tr>
        )
    })
    return (
        <tbody>
            {rows}
        </tbody>
    )
}

class Table extends Component {
    render() {
        const {data, removeData} = this.props;
        return (
            <table>
                <TableHeader />
                <TableBody data={data} removeData={removeData}/>
            </table>
        )
    }
}

export default Table;