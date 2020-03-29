import React from 'react';

// export default function WithClass(props) { 
//     return (
//         <div className={props.classes}>
//             {props.children}
//         </div>
//     )
// }

const withClass = (Component, className) => {
    return (props) => (<div className={className}> <Component {...props} /> </div>)
}

export default withClass;