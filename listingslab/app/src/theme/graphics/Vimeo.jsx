import React from 'react'

const Vimeo = props => {

    const { color } = props
    let c = `#ffffff`
    if (color) {
        c = color;
    }
    
    return (
        <React.Fragment>
            <svg {...props} viewBox="0 0 512 512">
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g>
                        <rect fillOpacity="0.01" fill="#FFFFFF" x="0" y="0" width="512" height="512"></rect>
                        <g transform="translate(17.000000, 17.000000)" fillRule="nonzero">
                            
                            <path d="M125.80182,179.114524 C134.931034,190.275107 169.785992,325.037346 181.420689,349.89699 C191.575599,371.698094 219.587214,400.519889 250.305397,379.937298 C281.00583,359.353952 383.097771,269.23394 401.372792,162.808399 C419.631818,56.4164722 278.517509,78.7034432 263.570078,171.396284 C300.929314,148.205884 320.870549,180.81888 301.753176,217.743305 C282.670269,254.632189 265.23377,278.691499 256.103369,278.691499 C246.99072,278.691499 239.980045,254.00546 229.538973,210.858452 C218.745459,166.250732 218.811887,85.8999528 173.937416,95.0095611 C131.618131,103.597447 76,172.265948 76,172.265948 L89.2824223,190.275107 C89.2824223,190.275107 116.671998,167.952442 125.80182,179.114524 Z" fill={c}></path>
                        </g>
                    </g>
                </g>
            </svg>
        </React.Fragment>
    )
}

export default Vimeo
