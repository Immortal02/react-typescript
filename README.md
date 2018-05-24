# react-typescript
ReactJS sample project with `create-react-app`, `typescript`, `redux`, `redux-observable`, `sass`, `storybook`<br>
I hope this project will be helpful to people who develop with these things.
- [create-react-app](https://github.com/facebook/create-react-app)
- [typescript](https://github.com/Microsoft/TypeScript)
- [redux](https://github.com/reduxjs/redux)
- [redux-observable](https://github.com/redux-observable/redux-observable)
- [sass](https://github.com/sass/sass)
- [storybook](https://github.com/storybooks/storybook)

## usage for create-react-app
```
npm run start
( Run the app in development mode.)

npm run build 
( Build the app for production to the build folder )
```
also you can run scripts with `yarn`
```
yarn start
yarn build
```

## usage for storybook
**install storybook globally**
```
npm i -g @storybook/cli
```

**run storybook**
```
npm run storybook 
       or
yarn storybook
```
**how to add react components to storybook**

you just make `{name}.story.tsx` file, If you would like to add component to storybook

    .
    ├── src/
    │   ├── componenet                   # react components directory
    │   │   ├── SFCHeader                # SFCHeader component 
    │   │   │   ├── index.ts             # index file
    │   │   │   ├── SFCHeader.tsx        # component source
    │   │   │   ├── SFCHeader.story.tsx  # component storybook source
    └── ...

**SFCHeader.story.tsx** 
 ```
import * as React from "react";
import { storiesOf } from "@storybook/react";
import SFCHeader from "./SFCHeader";

export default function InputBoxStory() {
    storiesOf("SFCHeader", module)
        .add("just blank", () => <SFCHeader title={"title is title."}/>)
        .add("with default value", () => <SFCHeader title={"RIP, avicii"}/>);
}
 ```
## directory structure

    .
    ├── .storybook/
    ├── config/            # create-react-app configure files
    ├── public/            # create-react-app public files ( `index.html`, `favicon.ico` .. )
    ├── scripts/           # npm script files
    ├── src/               # create-react-app root source directory ( `*.ts`, `*.tsx` )
    │   ├── abstract       # abstract class souce files
    │   ├── assets         # assets source files ( image, scss )
    │   │   ├── image      # image source files
    │   │   └── scss       # scss source files
    │   ├── componenet     # react components
    │   ├── container      # react containers
    │   ├── data           # data source files
    │   ├── declare        # typescript type declare file
    │   └── redux          # redux source files
    └── ...                # etc files. ( `tsconfig`, `readme`, `package.json` .. )
    

  
  
