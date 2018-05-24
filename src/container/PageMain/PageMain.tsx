import * as React from "react";
import AbstractPage, { AbstractPageProps, AbstractPageState } from "../../abstract/AbstractPage";
import { connect } from "react-redux";
import { RootState } from "@src/redux";

interface PageMainProps extends AbstractPageProps {
} 

interface PageMainState extends AbstractPageState {

}

class PageMain extends AbstractPage <PageMainProps, PageMainState> {

    className: string = this.props.className;
    
    constructor(props: any) {
        super(props);
        console.log("[PageMain constructor]");
    }

    componentWillMount() {
        console.log("[PageMain componentWillMount]");
    }

    render() {
        return (
            <AbstractPage {...this.props}>
                <h1 style={{top: 50}}>PAGE MAIN</h1>
            </AbstractPage>
        );
    }
}

let mapStateToProps = (state: RootState) => {
    return {
        ui : state.ui
    };
};

export default connect(mapStateToProps)(PageMain);