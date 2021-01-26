import React, {useState, useEffect} from 'react';


const Table = ({url, fields, selection}) => {

    const [data, setData] = useState(null)

    useEffect(() => {
        fetch(url).then(data => data.json()).then(res => {
            setData(res);
        })   
    }, [])


    return (
        <div>
            <table>
                <tr>
                    {fields.map(field => <td>{field}</td>)}
                </tr>
                {data ? data.map(el => {
                    const array = []; 
                    fields.forEach(field => {
                        if(el[selection] === 'Yes') array.push(<td>{el[field]}</td>);
                    })
                    return (
                    <tr>
                        {array}
                    </tr>
                    )
                })
            : 'loading'}
            </table>
        </div>
    )

}

export default Table;