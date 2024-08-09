import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-500 text to-black p-4 rounded-lg'>Welcome to tailwind test</h1>
      <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <img className="w-24 h-24 md:round rounded-full mx-auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdGblMMyDkR7X9ayiTCguObSri0R514XTyew&s" alt="" width="384" height="512" />{/* In jsx every tag must be closed therefore we close img tag */}
        <div className="pt-6 md:p-8 text-center space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              “Tailwind CSS is the only framework that I've seen scale
              on large teams. It’s easy to customize, adapts to any design,
              and the build size is tiny.”
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">
              UserIndt
            </div>
            <div className="text-slate-700 dark:text-slate-500">
              Staff Engineer, Algolia
            </div>
          </figcaption>
        </div>
      </figure>

      { /*Props (makes components reusable)*/}

      <Card username="Someone" btnText="Visit" />
      <Card username="AnotherSomeone" btnText="Click" />{/* reuse of components */}

    </>
  )
}

export default App
