import React, { useState } from 'react'

export function Compare(props) {
    const [checked, setChecked] = useState(false);

    function check() {
        setChecked(!checked);
    }

    return <React.Fragment>
        <div className="itemCompare">
            <span className={"box " + (checked ? "checked" : "")} onClick={check}></span>
            <span className="info" onClick={check}>{checked ? "產品比較" : "比較"}</span>
        </div>
        <div className="itemCompareMobile">
            <div className={"button " + (checked ? "checked" : "")} onClick={check}>產品比較</div>
        </div>
    </React.Fragment>;
}