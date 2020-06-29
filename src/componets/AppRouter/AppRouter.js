import React, { Component } from 'react'
import { Route, Switch } from "react-router-dom";
// import Products from '../Products/Products';
import Home from '../Home/Home';

export default class AppRouter extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/Home" component={Home} />
                    {/* <Route path="/san-pham" component={Products} />
                    <Route path="/chi-tiet/:id" component={Detail} /> */}
                    {/* <Route path="/san-pham/add" component={addProducts} /> */}
                    {/* <Route path="/contact" component={Contact} />
                   
                    <Route path="/manaUser" component={AppManaUser} />
                    <Route path="/testApi" component={testApi} />
                    <Route component={Home} /> */}
                </Switch>
            </div>

        );
    }
}
