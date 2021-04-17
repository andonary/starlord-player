import wallpaper from './assets/images/wallpaper.jpg';
import Player from './components/player';

function App() {
  return (
    <div className="App bg-no-repeat bg-auto bg-top md:bg-right-top font-sans font-base font-normal text-red-100 w-screen" style={{
          backgroundImage: `url(${wallpaper})`,
          height: "100vh",
          backgroundColor: '#040404'
    }}>
        <div className="container mx-auto">
            <Player/>
        </div>
    </div>
  );
}

export default App;
