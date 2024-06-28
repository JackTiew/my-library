import './index.scss'

const VideoFrame = () => {
    
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        for (let i = 0; i < 10; i++) {
            captureFrame(file, i).then(({ url }) => {
                const img = document.createElement('img');
                img.src = url;
                document.body.appendChild(img);
            });
        }
    }

    const captureFrame = (file, time = 0) => {
        return new Promise((resolve) => {
            const vdo = document.createElement('video');
            vdo.currentTime = time;
            vdo.muted = true;
            vdo.autoplay = true;
            vdo.src = URL.createObjectURL(file);
            vdo.oncanplay = () => {
                const cvs = document.createElement('canvas');
                cvs.width = vdo.videoWidth;
                cvs.height = vdo.videoHeight;
                const ctx = cvs.getContext('2d');
                ctx.drawImage(vdo, 0, 0, cvs.width, cvs.height);
                cvs.toBlob((blob) => {
                    const url = URL.createObjectURL(blob);
                    resolve({url, blob});
                })
            }
        });
    }
    
    return (
        <div className='center'>
            <input type='file' onChange={handleFileChange}/>
        </div>
    )
}

export default VideoFrame