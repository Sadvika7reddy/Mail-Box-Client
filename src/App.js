import Signup from "./component/Signup";
import Layout from "./component/Layout/Layout";
import { Route,Routes} from "react-router-dom";
import About from "./component/About";
import Inbox from "./component/Inbox";
import InboxDetails from "./component/InboxDetails";
import Sent from "./component/Sent";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="signup" element={<Signup/>} />
          <Route path="about" element={<About/>} />
          <Route path='inbox' element={<Inbox/>}/>
          <Route path='/inbox/:productId' element={<InboxDetails/>}/>
          <Route path='sent' element={<Sent/>}/>
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;
