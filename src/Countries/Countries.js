import React from "react";
import Country from "../Country/Country";

function Countries(props) {
    return (<div className='columns is-multiline is-mobile'>
        {
            props.countries.map(c =>
                <div className='column is-12'>
                    <Country key={c.numericCode} country={c} />
                </div>
            )
        }
    </div>);
}

export default Countries;