import React from 'react';

const Section = (props) => {
    return (
        <div className="container-fluid">
            <div className={"container "+props.className}>
                {props.children}
            </div>
        </div>
     );
}
 
export default Section;