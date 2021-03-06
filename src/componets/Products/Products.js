import React, { Component } from 'react'
import productApi from "../api/ProductApi";



import AppTable from './AppTable';
import AppAddPro from './AppAddPro';

export default class Products extends Component {
    constructor(props) {
        super(props)
        this.productApi = new productApi();
        this.state = {
            list: [],
            statusForm: false,
        }
    }

    onList = async () => {
        let res = await this.productApi.list();
        // console.log(res);
        if (res) {
            this.setState({
                list: res
            })
        }
    }


    UNSAFE_componentWillMount = async () => {
        await this.onList();
    }

    changeStatusForm = (event) => {
        event.preventDefault();
        this.setState({
            statusForm: !this.state.statusForm
        })
    }

    addProducts = async (item) => {

        // console.log(item);

        let response = await this.productApi.add(item);
        if (response) {
            alert("them moi thanh cong");
        }
        else {
            alert("khong thanh cong");
        }

        this.state.list.push(item);

        this.setState({
            list: this.state.list
        })




    }

    showForm = () => {
        if (this.state.statusForm) {
            return <AppAddPro formToogle={(e) => this.changeStatusForm(e)} add={(item) => this.addProducts(item)}></AppAddPro>
        }
    }

    // addProducts = (item) => {
    //     console.log(item);


    //     this.state.list.push(item);
    //     this.setState({
    //         list: this.state.list
    //     })
    // }

    render() {
        return (
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <label style={{ fontSize: 20 }}>Search</label>
                            <input className="form-control" placeholder="Search "></input>
                        </div>
                    </div>
                    <br></br>
                    <div className="row">
                        {/* {this.mappingData()} */}
                        <AppTable list={this.state.list} statusForm={this.state.statusForm} formToogle={(e) => this.changeStatusForm(e)} />
                        {this.showForm()} {/* phan them  */}
                    </div>
                </div>
            </div>
        )
    }
}
