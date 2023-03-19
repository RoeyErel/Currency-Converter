import Convertor from './components/convertor'


function App() {
    return (
        <div id="frame" className="w-full h-full">
            <div id="bg" className="min-w-full h-screen bg-gradient-to-br from-blue-500 via-blue-400 to-blue-500">
                <div id="box" className=" h-full w-full flex justify-center items-center">
                    <div id="box-bg" className="w-[750px] h-[500px] bg-black/70 rounded-xl">
                        <div id="header" className="flex justify-center items-start">
                            <h1 className="text-white font-bold text-[60px] mt-8 mb-2">Currency Converter</h1>
                        </div>
                        <Convertor/>
                    </div>
                </div>
            </div>
        </div>
  );
}

export default App;
