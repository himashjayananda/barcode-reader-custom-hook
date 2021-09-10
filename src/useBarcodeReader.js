import { useState, useCallback, useRef, useEffect, useMemo } from 'react';
import { BrowserMultiFormatReader } from '@zxing/library';
import Webcam from 'react-webcam';

const useBarcodeReader = () => {
  const [data, setData] = useState('');
  const [error, setError] = useState('');
  const webcamRef = useRef(null);
  const barcodeReader = useMemo(() => new BrowserMultiFormatReader(), []);
  const captureInterval = useRef();

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current && webcamRef.current.getScreenshot();
    if (imageSrc) {
      barcodeReader
        .decodeFromImage(undefined, imageSrc)
        .then(result => {
          setError('');
          setData(result.text);
          clearInterval(captureInterval.current);
        })
        .catch(err => {
          setError(err.message);
        });
    }
  }, [barcodeReader]);

  useEffect(() => {
    if (!data) {
      captureInterval.current = setInterval(capture, 100);
    }
  }, [data, capture]);

  const BarcodeComponent = () => (
    <>
      <Webcam
        audio={false}
        width={480}
        height={360}
        ref={webcamRef}
        screenshotFormat={'image/png'}
        videoConstraints={{
          facingMode: 'environment',
        }}
      />
    </>
  );

  return {
    data,
    error,
    BarcodeComponent,
  };
};

export default useBarcodeReader;
