import React, { useState } from 'react';
export default function ButtonCounterComponent() {
    var _a = useState(0), counter = _a[0], setCounter = _a[1];
    var buttonStyle = {
        marginRight: '5px'
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("input", { id: "counterButton", type: "button", onClick: function () { setCounter(counter + 1); }, value: "Increment Count", style: buttonStyle }),
        React.createElement("label", { htmlFor: "counterButton" },
            "Count: ",
            counter)));
}
//# sourceMappingURL=ButtonCounterComponent.js.map