import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import QrScanner from 'qr-scanner';

const QRScannerComponent = () => {
  const videoRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const startScanner = async () => {
      try {
        // Prompt the user for camera access permission
        const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
        videoRef.current.srcObject = stream;

        // Start the QR scanner
        const scanner = new QrScanner(videoRef.current, result => {
          console.log('Scanned QR code:', result);
          if (result === 'arts') {
           navigate('/masar-latest/arts');
            // alert('Correct');
          } else if (result === 'center') {
            navigate('/masar-latest/center');
          } else {
            toast.error('كود غير صحيح برجاء المحاولة مجدداً');
          }
        });
        scanner.start();

        // Cleanup function
        return () => {
          scanner.destroy();
          stream.getTracks().forEach(track => track.stop());
        };
      } catch (error) {
        console.error('Error accessing camera:', error);
        // Handle errors accessing the camera here
      }
    };

    startScanner();

  }, []);

  return (
    <>
    <div className="relative">
      <video ref={videoRef} className='w-full h-full'/>
      <div className="w-full h-1 bg-red-500 absolute top-5 scanner-animate"></div>
    </div>
    </>
  )
};

export default QRScannerComponent;
