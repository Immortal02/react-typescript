import * as React from "react";
import "./style.scss";

interface SFCHeaderProps {
    title: string;
}

const SFCHeader: React.SFC <SFCHeaderProps> = (props: SFCHeaderProps) => {
    return (
        <header className="SFCHeader">
            <h1 className="SFCHeader-title">{props.title}</h1>
        </header>
    );
};

export default SFCHeader;