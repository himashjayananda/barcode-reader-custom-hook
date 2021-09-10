// import { useState, useCallback, useRef, useEffect } from 'react';
// import { BrowserMultiFormatReader } from '@zxing/library';
// import Webcam from 'react-webcam';

// const CustomBarcodeReader = () => {
//   const [data, setData] = useState('');
//   const [error, setError] = useState('');
//   const webcamRef = useRef(null);
//   const barcodeReader = new BrowserMultiFormatReader();
//   let captureInterval;

//   const capture = useCallback(() => {
//     const imageSrc = webcamRef.current && webcamRef.current.getScreenshot();
//     if (imageSrc) {
//       barcodeReader
//         .decodeFromImage(undefined, imageSrc)
//         .then(result => {
//           clearInterval(captureInterval);
//           setData(result.text);
//           setError('');
//         })
//         .catch(err => {
//           setError(err.message);
//         });
//     }
//   }, []);

//   useEffect(() => {
//     if (!data) {
//       captureInterval = setInterval(capture, 100);
//     }
//   }, [data]);

//   return (
//     <>
//       <Webcam
//         audio={false}
//         width={500}
//         height={500}
//         ref={webcamRef}
//         screenshotFormat={'image/png'}
//         videoConstraints={{
//           facingMode: 'environment',
//         }}
//       />
//       <p>{data}</p>
//       <p>{error}</p>
//     </>
//   );
// };

// export default CustomBarcodeReader;
