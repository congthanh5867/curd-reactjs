import React, { Component } from 'react'
const { v4: uuidv4 } = require('uuid');
export default class AppAddPro extends Component {
    isInputChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: value
        })

    }

    submitForm = (e) => {
        e.preventDefault();
        e.target.reset();
        const { inputName, inputPass, stlLevel } = this.state;

        const item = {};
        item.id = uuidv4();
        item.username = inputName;
        item.password = inputPass;
        item.level = parseInt(stlLevel);

        // console.log(item);
        this.props.add(item);
    }
    render() {
        return (
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3" >
                <h3 style={{ textAlign: "center", backgroundColor: "#afafbd" }} > Them </h3>
                <form onSubmit={(e) => this.submitForm(e)} >
                    <div className="form-group" >
                        <label htmlFor="inputName" > Name </label>
                        <input type="text" className="form-control" id="inputName" name="inputName" placeholder="Name" onChange={(event) => this.isInputChange(event)} />
                    </div>
                    <div className="form-group" >
                        <label htmlFor="unit_price" > Uni_price </label>
                        <input type="text" className="form-control" id="unit_price" name="unit_price" placeholder="Name" onChange={(event) => this.isInputChange(event)} />
                    </div>
                    <div className="form-group" >
                        <label htmlFor="promotion_price" > Promotion_price </label>
                        <input type="text" className="form-control" id="inputName" name="promotion_price" placeholder="Name" onChange={(event) => this.isInputChange(event)} />
                    </div>
                    <div className="form-group" >
                        <label htmlFor="inputName" > Name </label>
                        <input type="text" className="form-control" id="inputName" name="inputName" placeholder="Name" onChange={(event) => this.isInputChange(event)} />
                    </div>
                    <button type="submit" className="btn btn-primary" > Add </button>
                </form>
            </div>
        )
    }
}
