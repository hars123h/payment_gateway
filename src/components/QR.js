import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import upi from '../images/05_logo_upi.863e7765.png';
import qr from '../images/qr.png';

const QR = () => {

    const location = useLocation().state;

    console.log(location);

    const navigate = useNavigate();

    return (
        <>
            <div className=" flex  justify-center">

                <label htmlFor="phonepe-upi" className="custom-border-bottom my-6 w-11/12 mx-auto" style={{ height: 'auto', paddingRight: '10px' }}>
                    <img src={upi} alt="" style={{ height: '35px' }} />
                    <span style={{ marginLeft: '10px', fontSize: '16px' }}></span>
                    {/* <div style={{ padding: '0.2rem', float: 'right', fontSize: '0.9rem' }} id="click_show_qr">Click To Hide QRCode</div> */}
                    <div id="upi_qr" >
                        <div className="title-count-down mt-3" style={{ width: '100%', textAlign: 'center', fontSize: '16px' }}>
                            Use Mobile Scan code to pay
                        </div>
                        <div className="title-count-down mt-3" style={{ width: '100%', fontSize: '14px', color: '#999', padding: '6px', textAlign: 'center' }}>
                            Or take a screenshot and save then open payment app to scan
                        </div>
                        <div className=" mt-2 col">
                            <div className="base-timer base-timer-with-only-time text-center" style={{ borderRadius: '2px' }}>
                                <span className="base-timer__label_only_time " style={{ color: '#f00' }}>
                                    <img id="qrcodeurl" alt='' src={qr} width="60%" className='mx-auto' />
                                </span>
                            </div>
                        </div>
                        <div className="title-count-down mt-3" style={{ width: '100%', fontSize: '14px', color: 'red', padding: '6px', textAlign: 'center' }}>
                            Do not use the same QR code to pay multiple times
                        </div>
                    </div>
                </label>
            </div>


            <div className='text-[#b88d34] text-sm w-11/12 mx-auto my-6' >
                <p className='mb-0'  >Note:</p>
                <p className='mb-0' >
                    If you have paid but have not received funds, please click the link to submit UTR.
                    <span onClick={() => navigate('/utr', { state: { uid: location.uid, amount: location.amount } })} className='text-[#007bff] inline-block ml-1'> Click here to submit UTR</span>
                </p>
            </div>


        </>
    )
}

export default QR