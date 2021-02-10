import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";
import MainScreen from '../Screens/MainScreen/MainScreen';
import RegisterScreen from '../Screens/RegisterScreen/RegisterScreen';
import SigninScreen from '../Screens/SigninScreen/SigninScreen';
import ChooseTemplateScreen from '../Screens/ChooseTemplateScreen/ChooseTemplateScreen';
import GeneratePDFScreen from '../Screens/GeneratePDFScreen/GeneratePDFScreen';

export default class Routers extends Component {
       render() {
        return (
            <Router>
                <Route path='/' exact component={ChooseTemplateScreen} />
                <Route path='/create' exact component={MainScreen} />
                <Route path='/signin' exact component={SigninScreen} />
                <Route path='/register' exact component={RegisterScreen} />
                <Route path='/generate' exact component={GeneratePDFScreen} />
            </Router>
       )
    }
};