import React from "react";

const Search = ({change, fields, selection}) => {

    const array = fields.map(el => <option value={el}>{el}</option>);

    return (
        <div>
            <form>
                <select onChange={(e) => change(e.target.value)} name="select" value={selection}>
                    {array}
                </select>
            </form>
        </div>
    )

}

export default Search;