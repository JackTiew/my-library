import React, { useRef } from 'react'

const Recording = () => {

    const audioRef = useRef(null);

    const onScreenRecording = async () => {
        const screenStream = await navigator.mediaDevices.getDisplayMedia({
            video: true, // Screen
            audio: true, // Microphone
        });

        let chunks = [];
        const recorder = new MediaRecorder(screenStream);
        
        recorder.addEventListener('dataavailable', e => {
            chunks.push(e.data);
        });

        recorder.addEventListener('stop', () => {
            const blob = new Blob(chunks, { type: 'video/mp4' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'test.mp4';
            a.click();
            a.remove();
        })
        
        recorder.start();
    };

    let voiceStream;
    let recorder;
    let chunks = [];
    const onMicrophoneRecording = async() => {
        voiceStream = await navigator.mediaDevices.getUserMedia({
            audio: true, // Microphone
        });

        recorder = new MediaRecorder(voiceStream);
        
        recorder.addEventListener('dataavailable', e => {
            chunks.push(e.data);
        });

        recorder.start();
    };

    const onStopMicrophoneRecording = async() => {
        voiceStream.getTracks().forEach(track => track.stop());
        recorder.stop();

        recorder.addEventListener('stop', () => {
            const blob = new Blob(chunks, { type: 'audio/ogg; codecs=opus' });
            audioRef.current.src = window.URL.createObjectURL(blob);
            chunks = [];
        })
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '25dvh' }}>
            <div style={{ textAlign: 'center' }}>
                <button style={{ fontSize: 36 }} onClick={() => onScreenRecording()}>Record screen</button>
                <br /><br />
                <button
                    style={{ fontSize: 36 }}
                    onClick={() => onMicrophoneRecording()}
                >
                        {`Record microphone`}
                </button>
                <button
                    style={{ fontSize: 36 }}
                    onClick={() => onStopMicrophoneRecording()}
                >
                        {`Stop recording microphone`}
                </button>
                <br /><br />
                <audio ref={audioRef} controls src='' />
            </div>
        </div>
    )
}

export default Recording