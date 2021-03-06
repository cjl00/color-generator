import React, { useState, useEffect } from 'react'

const SingleColor = ({ color: { rgb, weight, hex }, index }) => {
    const [alert, setAlert] = useState(false);
    const bcg = rgb.join(',');
    const hexValue = `#${hex}`;

    useEffect(() => {
        const timeout = setTimeout(() => {
            setAlert(false);
        }, 2000)
        return () => clearTimeout(timeout);
    })

    const clipboard = () => {
        setAlert(true);
        navigator.clipboard.writeText(hexValue);
    }
    return (
        <article className={`color ${index > 10 && 'color-light'}`} style={{ backgroundColor: `rgb(${bcg})` }} onClick={clipboard}>
            <p className='percent-value'>{weight} %</p>
            <p className='color-value'>{hexValue}</p>
            {alert && <p className='alert'>已经复制到剪切板</p>}
        </article>
    )
}

export default SingleColor
