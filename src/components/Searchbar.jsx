import React from 'react';

function Searchbar({ inputText, setInputText }) {
    const inputHandler = (e) => {
        const lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };

    return (
        <div style={{ width: '100%', rowGap: '20px', marginTop: '20px' }}>
            <input
                type="text"
                onChange={inputHandler}
                value={inputText}
                style={{
                    width: '100%',
                    padding: '10px',
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                }}
                placeholder="Search"
            />
        </div>
    );
}

export default Searchbar;
