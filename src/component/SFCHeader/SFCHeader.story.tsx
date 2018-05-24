import * as React from "react";
import { storiesOf } from "@storybook/react";
import SFCHeader from "./SFCHeader";

export default function InputBoxStory() {
    storiesOf("SFCHeader", module)
        .add("title test 1", () => <SFCHeader title={"title is title."}/>)
        .add("title test 2", () => <SFCHeader title={"RIP, avicii"}/>);
}