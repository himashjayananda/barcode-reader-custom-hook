import useBarcodeReader from './useBarcodeReader';

function App() {
  const { data, error, BarcodeComponent } = useBarcodeReader();

  return (
    <div className="App">
      <>
        {!data && <BarcodeComponent />}
        <p>{data}</p>
        <p>{error}</p>
      </>
    </div>
  );
}

export default App;
