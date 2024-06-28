import { useEffect, useState } from "react";

import CommonHelper from "../../libraries/CommonHelper";

const Debounce = () => {

    const commonHelper = CommonHelper();
    const [ isComplete, setIsComplete ] = useState(true);

    useEffect(() => {
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleResize = () => {
        setIsComplete(false);
        commonHelper.debounce(updateComplete, 500);
    };

    const updateComplete = () => {
        setIsComplete(true);
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ textAlign: 'center' }}>
                Resize to see changes
                <h1>{isComplete.toString()}</h1>
            </div>
        </div>
    )
}

export default Debounce