import React from "react"

const Dashboard = props => {

    const { color } = props
    let c = `#692b79`
    if (color) {
        c = color
    }

    return <React.Fragment>
            <svg {...props} viewBox="0 0 100 100" >
                
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="Dashboard">
                        <rect fillOpacity="0.01" fill="#FFFFFF" x="0" y="0" width="100" height="100"></rect>
                        <path d="M47.7517875,30.9345043 L17.6684999,55.6832558 L17.6684999,82.391379 C17.6684999,83.083226 17.9436599,83.7467371 18.4334501,84.2359471 C18.9232404,84.7251571 19.5875389,85 20.2802073,85 L38.5738367,84.9533487 C40.0101636,84.9447968 41.1700073,83.7793767 41.1699758,82.3447277 L41.1699758,66.7474949 C41.1699761,65.3067997 42.339277,64.1388855 43.7816828,64.1388852 L54.2246194,64.1388852 C55.6670253,64.1388855 56.8363262,65.3067997 56.8363264,66.7474949 L56.8363264,82.3330668 C56.8342583,83.026259 57.1085062,83.6917679 57.5985206,84.1826597 C58.088535,84.6735516 58.7540151,84.9494534 59.4480335,84.9494504 L77.7416651,85 C78.4343335,85 79.0986319,84.7251645 79.588422,84.2359545 C80.0782122,83.7467445 80.3533721,83.0832335 80.3533721,82.3913866 L80.3533721,55.6638171 L50.2467278,30.9345043 C49.5184693,30.3487442 48.480046,30.3487442 47.7517875,30.9345043 L47.7517875,30.9345043 Z M95.2724116,47.7563463 L81.6494966,36.5249383 L81.6494966,13.9532684 C81.6494966,12.8797248 80.7781842,12.0094457 79.7033659,12.0094457 L70.5331968,12.0094457 C69.4583785,12.0094457 68.5870661,12.8797248 68.5870661,13.9532684 L68.5870661,25.7833738 L53.9677325,13.7822122 C51.0767628,11.4059293 46.9061861,11.4059293 44.0152164,13.7822122 L2.71443105,47.7563463 C2.31180843,48.0850811 2.05765467,48.5610883 2.00866196,49.0781885 C1.95966925,49.5952887 2.11991324,50.110465 2.4536495,50.5088007 L6.61447693,55.5627405 C6.94312793,55.9666207 7.42020834,56.2219927 7.93890246,56.2716801 C8.45759659,56.3213675 8.97457559,56.1612198 9.3740907,55.827093 L47.7556829,24.2516416 C48.4839406,23.6658836 49.5223616,23.6658836 50.2506194,24.2516416 L88.6322108,55.8271005 C89.031021,56.1604396 89.54681,56.3204915 90.0645242,56.2715546 C90.5822385,56.2226178 91.05881,55.9687631 91.3879334,55.5666162 L95.5487602,50.5126765 C95.8831895,50.111943 96.0423086,49.5937588 95.9903347,49.0746536 C95.9383607,48.5555485 95.6796567,48.0790984 95.2724003,47.7524481 L95.2724116,47.7563463 Z" fill={c} fillRule="nonzero"></path>
                    </g>
                </g>
                
            </svg>
        </React.Fragment>
}
export default Dashboard