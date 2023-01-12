import { useEffect , useState} from 'react';
import StudentList from './components/StudentList.js'
import './App.css';

const API_URL = 'http://localhost:9000'

function App() {
  const [studentData, setStudentData] = useState([]);
useEffect(() => {
  async function fetchData() {
    const res = await fetch(`${API_URL}/students`);
    const json = await res.json();
    console.log(json);
    const {data} = json;
    setStudentData(data);
  }
  fetchData();
}, []);

  return (
   <div>
    <h1>
      hii
    </h1>
    <StudentList studentData={studentData}/>
    </div>
  );
}

export default App;
