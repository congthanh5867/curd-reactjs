import React, { Component } from 'react'
import Course from './Course'

export default class Home extends Component {
    render() {
        return (
            <div >
                <div className="row" style={{ marginBottom: '80px' }}>
                    <Course>Lap tinh php</Course>
                    <Course>Lap tinh SQL</Course>
                    <Course>Lap tinh C#</Course>
                    <Course>Lap tinh ReacJs</Course>
                    <Course>Lap tinh Java</Course>
                    <Course>Lap tinh ASP</Course>
                </div>
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>

            </div>
        )
    }
}
