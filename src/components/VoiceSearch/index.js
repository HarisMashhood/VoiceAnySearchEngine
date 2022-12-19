import React from 'react'
import './index.css'
const VoiceSearch = ({ closeVoiceSearch }) => {
    return (
        <div className='container-fluid d-flex align-items-center justify-content-center voiceModal'>
            <div className='col-md-4 bg-light voice-search '>
                <div className='border-bottom w-100 d-flex align-items-center justify-content-between py-2 px-2'>
                    <h3>Voice Search</h3>
                    <i className='fa fa-times' onClick={() => closeVoiceSearch()}></i>
                </div>
                <div className='border-bottom w-100 h-50 d-flex align-items-center justify-content-center py-2'>
                    <div className='col-md-2 micIcon bg-danger text-white d-flex align-items-center justify-content-center'>
                        <i className='fa fa-microphone'></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VoiceSearch