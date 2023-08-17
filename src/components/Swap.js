import React from 'react'

export const Swap = () => {
  return (
        <main className='main'>
            <div className='box'>
                <h2 className='box_header'>Swap</h2>
                <div className='divider'></div>
                <div className='from_token_box'>
                    <input className='amount' type='text' placeholder='0'/>
                    <div className='token_details'>
                        <p className='from_token'><img className='token_logo' src='images/eth-logo.png' alt=''/> sEther</p>
                        <p className='balance'>Balance: 0.0000000089</p>
                    </div>
                </div>
                <div className='switch_token'></div>
                <div className='to_token_box'>
                    <input className='amount' type='text' placeholder='0'/>
                    <div className='token_details'>
                        <p className='to_token'>DAI</p>
                        <p className='balance'>Balance: 0.000000089</p>
                    </div>
                </div>
                <div className='expected_output_header'>
                    Expected Output:
                </div>
                <div className='expected_output'>
                    <div className="expected_output_item">
                        <p>You'll receive:</p><p>0.000696267 sETH</p>
                    </div>
                    <div className="expected_output_item">
                        <p>Price impact:</p><p>~0.30%</p>
                    </div>
                    <div className="expected_output_item">
                        <p>Min. received after slippage (0.5%):</p><p>0.000692786 sETH</p>
                    </div>
                    <div className="expected_output_item">
                        <p>Network Fee:</p><p>~0.00000000001 ETH</p>
                    </div>

                </div>
                <div className='conversion_rate'>1 sEther = 0.00045 DAI</div>
                <div className='button'><button>Enter amount</button></div>
            </div>
        </main>
    )
}
