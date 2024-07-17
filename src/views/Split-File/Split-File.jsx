import { useState } from "react";

const SplitFile = () => {

    const CHUNK_SIZE = 1024 * 1024 * 5;
    const THREAD_COUNT = navigator.hardwareConcurrency || 4;
    const [ usedTime, setUsedTime ] = useState(0);

    const cutFile = async (file) => {
        return new Promise(resolve => {
            const chunkCount = Math.ceil(file.size / CHUNK_SIZE);
            const threadChunkCount = Math.ceil(chunkCount / THREAD_COUNT);
            const result = [];
            let finishCount = 0;
    
            for(let i = 0; i < THREAD_COUNT; i++) {
                const worker = new Worker(new URL('./worker.js', import.meta.url), {type: 'module'});
    
                const start = i * threadChunkCount;
                let end = (i + 1) * threadChunkCount;
                if (end > chunkCount) {
                    end = chunkCount;
                }
                worker.postMessage({file, start, end, CHUNK_SIZE});

                // eslint-disable-next-line no-loop-func
                worker.onmessage = e => {
                    result[i] = e.data;
                    worker.terminate();
                    finishCount++;
                    if (finishCount === THREAD_COUNT) {
                        resolve(result.flat());
                    }
                };
            }
        });
    };

    const handleFileChange = async (event) => {
        const file = event.target.files[0];
        
        let startTime = new Date();
        console.time('cutFile');

        const chunks = await cutFile(file);

        let endTime = new Date();
        console.timeEnd('cutFile');
        console.log(chunks);

        let timeElapsed = endTime - startTime;
        setUsedTime(timeElapsed);
    };

    console.log(usedTime);

    return (
        <div className='center'>
            <div>
                <input type='file' onChange={handleFileChange}/>
                <br /><br /><br />
                <span>Time Used for file splitting: {usedTime}ms</span>
            </div>
        </div>
    )
}

export default SplitFile