import React, { Component } from 'react'
// const { v4: uuidv4 } = require('uuid');
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
        const { proName, unit_price, promotion_price, category_id, description, ProductImage } = this.state;

        const item = {};
        item.proName = proName;
        item.description = description;
        item.category_id = parseInt(category_id);
        item.unit_price = parseInt(unit_price);
        item.promotion_price = parseInt(promotion_price);
        item.ProductImage = ProductImage;

        // console.log(item);
        this.props.add(item);
    }
    render() {
        return (
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3" >
                <h3 style={{ textAlign: "center", backgroundColor: "#afafbd" }} > Them </h3>
                <form onSubmit={(e) => this.submitForm(e)} >
                    <div className="form-group" >
                        <label htmlFor="proName" > Name </label>
                        <input type="text" className="form-control" id="proName" name="proName" placeholder="Name" onChange={(event) => this.isInputChange(event)} />
                    </div>
                    <div className="form-group" >
                        <label htmlFor="unit_price" > Uni_price </label>
                        <input type="number" className="form-control" id="unit_price" name="unit_price" placeholder="1000000" onChange={(event) => this.isInputChange(event)} />
                    </div>
                    <div className="form-group" >
                        <label htmlFor="promotion_price" > Promotion_price </label>
                        <input type="number" className="form-control" id="promotion_price" name="promotion_price" placeholder="10000" onChange={(event) => this.isInputChange(event)} />
                    </div>
                    <div className="form-group" >
                        <label htmlFor="category_id" > Category_id </label>
                        <input type="number" className="form-control" id="category_id" name="category_id" placeholder="10000" onChange={(event) => this.isInputChange(event)} />
                    </div>
                    <div className="form-group" >
                        <label htmlFor="description" > Description </label>
                        <input type="text" className="form-control" id="description" name="description" placeholder="Name" onChange={(event) => this.isInputChange(event)} />
                    </div>
                    <div className="form-group" >
                        <label htmlFor="ProductImage" > ProductImage </label>
                        <input type="text" className="form-control" id="ProductImage" name="ProductImage" placeholder="Name" onChange={(event) => this.isInputChange(event)} />
                    </div>
                    {/* ProductImage */}
                    <div className="row">
                        <button type="submit" className="btn btn-primary" > Add </button>
                        <button onClick={(e) => this.props.formToogle(e)} className="btn btn-primary" style={{ marginLeft: 10 }} > Cancel </button>
                    </div>
                </form>
            </div>
        )
    }
}
