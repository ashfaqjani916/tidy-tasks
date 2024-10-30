
import Today from '../components/views/Today'

// interface User {
//   displayName: string | null;
//   emailAddress: string;
//   exp: number;
//   iat: number;
//   id: string;
//   photoURL: string;
// }


const Home = () => {



  return (
    <div className=" flex w-full min-h-full flex-col font-custom border-3 border-black">

      <Today />
    </div>
  )
}

export default Home
