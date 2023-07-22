
import './App.css';
import Nav from './components/Nav';
import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';
function App() {
  
  return (<>
  <div className='p-4 md:pl-16 md:pr-16 text-base font-Inter md:p-10 z-0'>
    <style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
</style>
  <div>
    <Nav/>
  </div>
  <SectionOne/>
  <SectionTwo/>
  </div>
  </>
  );
}

export default App;
