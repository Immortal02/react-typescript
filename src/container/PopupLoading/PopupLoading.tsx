import * as React from "react";
import AbstractPage, { AbstractPageProps, AbstractPageState } from "../../abstract/AbstractPage";
import { connect } from "react-redux";

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

    // btnClickHandler(transition: PageData.TRANSITION, event: any) {
    //     console.log("[PageMain btnClickHandler]");
    //     this.requestPageChange(PageData.PAGE.MOVIE, transition);
    // }

    // showPopup(popup: POPUP) {
    //     this.props.dispatch(showPopup(popup));
    // }

    render() {
        return (
            <AbstractPage {...this.props}>
                <h1 style={{top: 50}}>PAGE MAIN</h1>
            </AbstractPage>
        );
    }
}

let mapStateToProps = (state: any) => {
    return {
        ui : state.ui
    };
};

export default connect(mapStateToProps)(PageMain);