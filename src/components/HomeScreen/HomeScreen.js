import React, { useState } from 'react'

const HomeScreen = ({ setSearch, openVoiceSearch }) => {
    const [input, setInput] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        //dataValidating
        if (/^[a-zA-Z0-9].*/.test(input) || /^[a-zA-Z0-9]+" ".*/.test(input)) {
            setSearch(input)
        }
    }
    const handleButton = (e) => {
        if (/^[a-zA-Z0-9].*/.test(input) || /^[a-zA-Z0-9]+" ".*/.test(input)) {
            setSearch(input)
        }
    }
    const clearInput = () => {
        setInput('')
    }
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12 d-flex flex-column align-items-cemter justify-content-center border mt-5 py-2'>
                        <h1 className='mx-auto my-3' style={{color:'#009A17'}}>VoiceAnySearch Engine</h1>
                        <div className='formDiv col-md-5 mx-auto border my-5 pt-1 pb-1 d-flex align-items-center justify-content-between py-1'>
                            <i className='fa fa-search mx-1'></i>
                            <form style={{ width: "100%" }} className='ml-2' onSubmit={handleSubmit}>
                                <div className='form-group'>
                                    <input type='text' className='form-control border-0' placeholder='inputText'
                                        value={input} onChange={(e) => setInput(e.target.value)}
                                        style={{ boxShadow: 'none !important', outline: 'none !important' }}
                                    />
                                </div>
                            </form>
                            {input ? (<i className='fa fa-times mx-1' style={{ cursor: "pointer " }} onClick={clearInput}></i>) : null}
                            <button type="button" onClick={() => openVoiceSearch()} className='btn-lg mx-1'>
                                <i className='fa fa-microphone' style={{color:'red'}}></i>
                            </button>
                        </div>
                        <div className='btns mx-auto text-center'>
                            <button type='button' className='btn btn-default mx-1 border' style={{backgroundColor:'#009A17', color:'white'}} onClick={handleButton}>ExploreMe</button>
                            <button type='button' className='btn btn-default mx-1 border'>FeelingLucky</button>
                        </div>
                    </div>
                </div>
            </div>
            <h4 className='d-flex flex-column align-items-cemter justify-content-center ml-auto my-5' style={{color:'gray'}} >Checkout This AnySearchEngine Application with Voice Search command where you can search anything based on your choices and interests just by filling text field or by clicking on microphone button and say. It will show you all the realtime data. <br /> Used ReactJs Framework, React Hooks for state management across application, used GoogleSearchEngine API to render the realtime data, used bootstrap for styling. </h4>
        </>
    )
}

export default HomeScreen