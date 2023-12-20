import React from 'react'
import home from '../images/home.png';
import logo from '../images/logo.png';
import gpay from '../images/05_logo_gpay.6a3cb873.png';
import phonepe from '../images/05_logo_phonepe.3264c8eb.png';
import upi from '../images/05_logo_upi.863e7765.png';
import paytm from '../images/paytm.svg';
import { useNavigate, useParams } from 'react-router-dom';

const Appchoose = () => {

    const { amount, uid } = useParams();

    const navigate = useNavigate();

    return (
        <>
            <div id="app" className="flex justify-center bd-highlight mb-3">
                <section className="w-full">
                    <div className="card card-custom card-stretch gutter-b nb-xs" style={{ boxShadow: 'rgb(214, 223, 230) 0px 3px 14px' }}>
                        <div id="loading" className="card-header border-0 p-0">
                            <div className="checkout-bg custom-background p-header-top-sub-container">
                                {/* <span className="p-cancel-transaction">×</span> */}
                                <div style={{ padding: '20px 15px 0 15px', height: '100px', display: 'flex', color: '#fff', justifyContent: 'space-between' }}>
                                    <div style={{ display: 'flex', fontSize: '16px', flexDirection: 'column', justifyContent: 'center', textAlign: 'left' }}>
                                        <span>Deposit Amount</span>
                                        <div>
                                            <span className='text-[22px] mr-[2px]'>₹</span>
                                            <span className='text-4xl mr-[2px]' id="amount">{Number(amount).toFixed(2)}</span>
                                        </div>
                                    </div>
                                    <div className='flex flex-col justify-center items-center'>
                                        <div>
                                            <img src={home} alt="" className="storeImg w-12 h-12" />
                                        </div>
                                        <div className='flex'>
                                            <div className='flex items-center text-lg font-normal top-0 text-[rgb(255,255,255)] flex-row mr-[2px]' >
                                                <span></span>
                                            </div>
                                            <div>
                                                <span id="minute" className="base-timer__label_only_time">08</span>
                                                <span>:</span>
                                                <span id="second" className="base-timer__label_only_time">50</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="template-header">
                                <div className='flex p-[10px] bg-white'>
                                    <img src={logo} alt="" className='h-[25px]' />
                                    <span id="merchant-name" title="" className="chk-brand-name text-base text-black ml-1" >Native Transfer</span>
                                </div>
                            </div>
                        </div>
                        <div className="card-body p-0 mb-[50px] nb-xs" style={{ padding: 0 }}>
                            <div className="text-left">
                                <div className="text-left payment-methods-view-container">
                                    <div className="checkout-upi-box pt-[10px] px-[15px] pb-[25px]">
                                        <div className="chk-upi-options-box">

                                            <div className="chk-upi-option-group chk-z-index-relative common-border-bottom-selection" style={{ display: 'block' }}>
                                                <fieldset>
                                                    <div className="chk-upi-option" style={{ marginBottom: 0 }}>
                                                        <label htmlFor="paytm-upi" className="custom-border-bottom noborder topborder bottompborder flex items-center justify-between">

                                                            <div className="flex space-x-2 items-center">
                                                                <img src={paytm} alt="" style={{ height: '15px' }} />
                                                                <span className='ml-[10px] text-base' >Paytm</span>
                                                            </div>
                                                            <div className="checkbox-part">
                                                                <input type="radio" name="paymehed" className="label-pay" id="paytm" value="paytmmp://pay?" />
                                                            </div>
                                                        </label>
                                                    </div>
                                                    <div className="chk-upi-option">
                                                        <label htmlFor="paytm-upi" className="custom-border-bottom noborder bottompborder flex items-center justify-between">
                                                            <div className="flex space-x-2 items-center">

                                                                <img src={phonepe} alt="" style={{ height: '15px' }} />
                                                                <span className='ml-[10px] text-base'>Phone Pe</span>
                                                            </div>
                                                            <div className="checkbox-part">
                                                                <input type="radio" name="paymehed" className="label-pay" id="phonepe" value="phonepe://pay?" />
                                                            </div>
                                                        </label>
                                                    </div>
                                                    <div className="chk-upi-option">
                                                        <label htmlFor="paytm-upi" className="custom-border-bottom noborder bottompborder flex items-center justify-between">
                                                            <div className="flex space-x-2 items-center">

                                                                <img src={gpay} alt="" style={{ height: '15px' }} />
                                                                <span className='ml-[10px] text-base'>Google Pay</span>
                                                            </div>
                                                            <div className="checkbox-part">
                                                                <input type="radio" name="paymehed" className="label-pay" id="googlepay" value="gpay://upi/pay?" />
                                                            </div>
                                                        </label>
                                                    </div>
                                                    <div className="chk-upi-option">
                                                        <label htmlFor="paytm-upi" className="custom-border-bottom noborder bottompborder flex items-center justify-between">
                                                            <div className="flex space-x-2 items-center">

                                                                <img src={upi} alt="" style={{ height: '15px' }} />
                                                                <span className='ml-[10px] text-base'>UPI Pay</span>
                                                            </div>
                                                            <div className="checkbox-part">
                                                                <input type="radio" name="paymehed" className="label-pay" id="upi" value="upi://pay?" />
                                                            </div>
                                                        </label>
                                                    </div>
                                                </fieldset>

                                            </div>

                                        </div>
                                        
                                    </div>
                                </div>
                            </div>

                            <button onClick={() => navigate('/pay', { state: { uid, amount } })} type="button" id="topay" className="btn btn-info btn-chk-paykun btn-pay-with-card custom-background click2pay" style={{ padding: '0.2rem', float: 'right', margin: '-5px 10px 0 0', fontSize: '0.9rem', zIndex: '50' }}>
                                Click To Pay
                            </button>


                        </div>
                    </div>

                </section>
            </div>
        </>
    )
}

export default Appchoose