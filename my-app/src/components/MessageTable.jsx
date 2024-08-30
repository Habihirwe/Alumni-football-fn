import { useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
import { getMessage } from "../redux/messageSlice";
import { deleteMessage } from "../redux/messageSlice";

const MessageTable = () => {

    const {messages,error,loading}=useSelector((state)=>state.message)
    const dispatch= useDispatch()

    useEffect(() => {
        dispatch(getMessage());
      }, [dispatch]);
    

      const handleDelete = (messageID) => {
        dispatch(deleteMessage(messageID));
      };




  return (
    <div id="usertable" className="overflow-x-auto rounded-lg">
      <table className="min-w-full bg-white text-black rounded-lg">
        <thead>
          <tr className="w-full bg-yellow-50 text-left text-black">
            <th className="px-3 py-2">USERNAME</th>
            <th className="px-3 py-2">EMAIL</th>
            <th className="px-3 py-2">NUMBER</th>
            <th className="px-3 py-2">MESSAGE</th>
            <th className="px-3 py-2">DELETE</th>
          </tr>
        </thead>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        <tbody>
          { Array.isArray(messages)? messages.map((message) => (
            <tr key={message._id} className="border-none">
              <td className="px-3 py-2">{message.name}</td>
              <td className="px-3 py-2">{message.email}</td>
              <td className="px-3 py-2">{message.phoneNumber}</td>
              <td className="px-3 py-2">{message.content}</td>
              <td className="px-4 py-2">
                <button onClick={() => handleDelete(message._id)} className="text-red-500 hover:text-red-700">
                  Delete
                </button>
              </td>
            </tr>
          )):(
            <p>No message available.</p>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MessageTable;
