import React from 'react';

function Input(props) {
    return (
        <div className='input'>
            <div className='input-form'>
                <form onSubmit={e => props.handleSubmit(e)}>
                    <input 
                        className='search-input'
                        type='text'
                        value={props.searchParam}
                        placeholder="Enter a search term"
                        onChange={e => props.setSearchParam(e.target.value)}
                    />
                    <input 
                        type='submit'
                        value='Submit'
                    />
                </form>
            </div>
        </div>
    )
};
           
export default Input;
