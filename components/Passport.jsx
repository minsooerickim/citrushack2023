/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/display-name */
import HTMLFlipBook from 'react-pageflip';
import React from 'react';

const Page = React.forwardRef((props, ref) => {
    return (
        <div className="demoPage bg-white rounded-2xl" ref={ref}>
            <h1>Page Header</h1>
            <p>{props.children}</p>
            <p>Page number: {props.number}</p>
        </div>
    );
});

export default function MyBook(props) {
    return (
        <HTMLFlipBook width={300} height={500}>
            <Page number="1">Page text</Page>
            <Page number="2">Page text</Page>
            <Page number="3">Page text</Page>
            <Page number="4">Page text</Page>
        </HTMLFlipBook>
    );
}