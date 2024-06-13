import { useEffect, useState } from 'react'
import CommonHelper from '../../libraries/CommonHelper';

const HighlightSearch = () => {

    const commonHelper = CommonHelper();
    const [ searchValue, setSearchValue ] = useState('');
    const [ randomText, setRandomText ] = useState([]);
    const displayText = randomText.filter(text => searchValue ? text.toLowerCase().includes(searchValue.toLowerCase()) : true);

    useEffect(() => {
        let texts = [];
        for(let i = 0; i < 20; i++) {
            texts.push(commonHelper.randomString(25));
        };
        setRandomText(texts);
    }, []);

    const getDisplayText = (text) => {
        let newText = text;

        if (searchValue) {
            const reg = new RegExp(searchValue, 'ig');
            
            newText = newText.replace(reg, function (key) {
                return `<em style='color: #F40; font-style: normal; font-weight: bold;'>${key}</em>`;
            })
        }

        return newText;
    };

    return (
        <div className='center'>
            <div>
                <div>
                    <input value={searchValue} onChange={e => setSearchValue(e.target.value)}/>
                </div>
                <div style={{ textAlign: 'center' }}>
                    {
                        displayText.map((text, index) => (
                            <div key={index} style={{ display: 'block' }} dangerouslySetInnerHTML={ {__html: getDisplayText(text)} }></div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default HighlightSearch