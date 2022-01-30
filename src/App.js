import { useState } from 'react'
import './App.css'
import Checkbox from './Component/Checkbox/Checkbox'

function App() {
  const [checked, setChecked] = useState(false)
  const [checkedTwo, setCheckedTwo] = useState(false)
  const [checkedThree, setCheckedThree] = useState(false)
  const [checkedFour, setCheckedFour] = useState(false)
  // eslint-disable-next-line no-unused-vars
  const [search, setSearch] = useState('')

  const handleChange = () => {
    setChecked(!checked)
  }

  const handleChangeTwo = () => {
    setCheckedTwo(!checkedTwo)
  }

  const handleChangeThree = () => {
    setCheckedThree(!checkedThree)
  }

  const handleChangeFour = () => {
    setCheckedFour(!checkedFour)
  }

  const handleEvent = (e) => {
    setSearch(e.target.value)
    console.log(e.target.value)
  }

  return (
    <div className='container'>
      <div className='header'>
        <p>Select Report assessment grade</p>
      </div>

      <form>
        <input type='text' placeholder='Search...' onChange={handleEvent} />
        {search}
      </form>

      <Checkbox label='Green' value={checked} onChange={handleChange} />
      <Checkbox label='Yellow' value={checkedTwo} onChange={handleChangeTwo} />
      <Checkbox
        label='Orange'
        value={checkedThree}
        onChange={handleChangeThree}
      />
      <Checkbox label='Red' value={checkedFour} onChange={handleChangeFour} />
    </div>
  )
}

export default App
