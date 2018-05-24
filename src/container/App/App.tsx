import * as React from "react";
import { connect, Dispatch } from "react-redux";
import { RootState } from "@src/redux";
import * as UIReducer from "../../redux/uiReducer";
import SFCHeader from "../../component/SFCHeader";
import logo from "../../assets/image/logo.svg";
import "../../assets/scss/common.scss";
import "./style.scss";

interface AppProps {
    ui: UIReducer.UIState;
    showLoadingWithEpic: () => any;
    showLoading: () => any;
} 

interface AppState {
    reduxActionType: string;
}

class App extends React.Component <AppProps, AppState> {

    componentWillMount() {
        this.setState({ reduxActionType: this.props.ui.type });
    }

    componentWillReceiveProps(nextProps: AppProps) {
        console.log("nextProps", nextProps);
        this.setState({ reduxActionType: nextProps.ui.type });
    }

    btnClickHandler = ($withEpic: boolean) => {
        console.log("btnClickHnadler", $withEpic);
        if ($withEpic) {
            this.props.showLoadingWithEpic();
        } else {
            this.props.showLoading();
        }
    }

    render() {
        return (
            <div className="App">
                <SFCHeader title={"Welcome to React"}/>
                <img src={logo} className="App-logo" alt="logo"/>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <button onClick={this.btnClickHandler.bind(this, true)}>Button for redux epic</button>
                <button onClick={this.btnClickHandler.bind(this, false)}>Button for redux</button>
                <p className="App-redux">
                    {this.state.reduxActionType}
                </p>
            </div>
        );
    }
}

const mapStateToProps = (state: RootState) => {
    return {
        ui : state.ui
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
    showLoadingWithEpic: () => dispatch(UIReducer.showLoadingWithEpic()),
    showLoading: () => dispatch(UIReducer.showLoading()),
  });
  
export default connect(mapStateToProps, mapDispatchToProps)(App);
