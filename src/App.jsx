import './App.css'
import { cardData } from './assets/data/cardData'
import Card from './components/Card';

function App() {
  console.log("card data ", cardData);
  return (
    <div className=' overflow-y-auto overflow-x-hidden flex flex-col justify-center items-center bg-gray-400 pt-5 pb-5'>
      <div className='flex flex-col gap-6 items-center'>
        <h1 className=' font-semibold text-2xl'>NBA Cards Data</h1>
        <div className=' flex flex-row gap-3'>
          <button className=' px-3 py-2 bg-slate-500 rounded-md shadow-lg'>
            Save All
          </button>
          <button className='px-3 py-2 bg-slate-500 rounded-md shadow-lg'>
            Download CSV
          </button>
        </div>
      </div>

      <div className=' mt-12 flex w-[80%] items-center justify-center flex-wrap gap-6'>
        {
          cardData.map((card, i) => {
            return(
              <Card card={card} key={i}/>
            )
          })
        }
      </div>

    </div>
  )
}

export default App
