import axios from "axios"
import { useEffect, useState } from "react"
import './MyTableStyle.css'

function MyTable() {
  const [arr, setArr] = useState([]);
  const [filterArray, setFilterArray] = useState([])


 
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => {
      setArr(res.data)
      setFilterArray(res.data)
    })
    .catch(error => console.log(error))
  }, [])

  const handleFilter = (e) => {
    setFilterArray(arr.filter(f => f.name.toLowerCase().includes(e.target.value)))
  }

 
  return (
    <div className="tableContainer">
        <input
          onChange={handleFilter}
          placeholder="search name"
        />
          <table className="unstyledTable">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>City</th>
              </tr>
            </thead>
            <tbody>
              {filterArray.map(item => 
                <tr key = {item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.address.city}</td>
                </tr>
              )}
            </tbody>
        </table>
      </div>
  )
}

export default MyTable