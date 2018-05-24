import * as React from "react";
import * as UI from "../redux/uiReducer";

export interface AbstractPageState {
    pageData: any;
}

export interface AbstractPageProps {
    dispatch: any;
    style: any;
    className: string;
}

abstract class AbstractPage <P extends AbstractPageProps, S extends AbstractPageState> extends React.Component <P, S> {

    protected abstract className: string;
    
    constructor(props: any) {
        super(props);
    }

    requestToggleLoading(isShow: boolean) {
        console.log(`[AbstractPage requestToggleLoading] isSHow? ${isShow}`);
        this.props.dispatch(isShow ? UI.showLoading() : UI.hideLoading());
    }

    render() {
        return (
            <div className={this.props.className + " pages"} style={this.props.style}>
                {this.props.children}
            </div>
        );
    }
}

export default AbstractPage;