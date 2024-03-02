import { useState,useEffect } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import { Toaster,toast } from 'react-toastify/dist/components';

export default function BookTicket() {

  const [trains, setTrains] = useState([]);

  useEffect(() => {
    loadtrains();
  }, []);

  const loadtrains = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/train/all");
      setTrains(response.data);
    } catch (error) {
      toast.error("Failed to load trains");
    }
  };


  return (
    <>
      
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-semibold mb-8">Manage Trains</h1>
        <table className="w-full table-auto border-collapse shadow bg-white">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-400 px-4 py-2">ID</th>
              <th className="border border-gray-400 px-4 py-2">Train Name</th>
              <th className="border border-gray-400 px-4 py-2">Train Number</th>
              <th className="border border-gray-400 px-4 py-2">From</th>
              <th className="border border-gray-400 px-4 py-2">To</th>
              <th className="border border-gray-400 px-4 py-2">Total tickets</th>
              <th className="border border-gray-400 px-4 py-2">Book</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {trains.map((train, index) => (
              <tr key={train.trainId} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                <td className="border border-gray-400 px-4 py-2">{index + 1}</td>
                <td className="border border-gray-400 px-4 py-2">{train.trainName}</td>
                <td className="border border-gray-400 px-4 py-2">{train.trainNumber}</td>
                <td className="border border-gray-400 px-4 py-2">{train.fromLocation}</td>
                <td className="border border-gray-400 px-4 py-2">{train.toLocation}</td>
                <td className="border border-gray-400 px-4 py-2">{train.totalSeats}</td>
                <td className="border border-gray-400 px-4 py-2">
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link
          to={"/Addtrain"}
          className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md mt-4 inline-block"
        >
          Add New Train
        </Link>
      </div>
      <Toaster />
    </>
  )
}
