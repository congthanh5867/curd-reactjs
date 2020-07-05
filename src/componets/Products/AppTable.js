import React, { Component } from 'react'
import Item from './Item'
export default class AppTable extends Component {


    mappingData = () => {
        const result = this.props.list.map((item, key) => {
            return <Item key={key} index={key} id={item.id} data={item}>{item.proName}</Item>
        });

        return result;
    }

    classTable = () => {
        if (!this.props.statusForm) {
            return "col-xs-12 col-sm-12 col-md-12 col-lg-12"
        } else {
            return "col-xs-8 col-sm-8 col-md-8 col-lg-8"
        }
    }

    showButton = () => {
        if (!this.props.statusForm) {
            return <a className="btn btn-success btn-sm" href="them" role="button" onClick={(e) => this.props.formToogle(e)}><i className="fa fa-plus" aria-hidden="true" />Add</a>
        } else {
            return <a className="btn btn-danger btn-sm" href="dong" role="button" onClick={(e) => this.props.formToogle(e)}><i className="fa fa-close" aria-hidden="true" />X</a>
        }
    }



    render() {
        return (
            <div className={this.classTable()}>
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr align="center">
                            <th scope="col">STT</th>
                            <th scope="col">Name</th>
                            <th scope="col">Unit_price</th>
                            <th scope="col">Promotion_price</th>
                            <th scope="col" className="text-center" colSpan={2}>
                                {this.showButton()}
                            </th>
                        </tr>
                    </thead>
                    <tbody id="data-body">
                        {this.mappingData()}
                    </tbody>
                    <tfoot>
                        <tr align="center">
                            <th scope="col">STT</th>
                            <th scope="col">Name</th>
                            <th scope="col">Unit_price</th>
                            <th scope="col">Promotion_price</th>
                            <th scope="col" className="text-center" colSpan={2}>
                                option
                        </th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        )
    }
}
