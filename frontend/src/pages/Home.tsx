
import TemporaryDrawer from '../components/Drawer'

import Today from '../components/views/Today'

const Home = () => {
  return (
    <div className=" flex font-custom">
      <TemporaryDrawer />
      <Today />
    </div>
  )
}

export default Home
