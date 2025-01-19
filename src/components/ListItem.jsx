import { FaRegCheckCircle } from "react-icons/fa";
import { MdDelete, MdDoneAll, MdOutlineExpandCircleDown } from "react-icons/md";

import { useEffect, useState } from "react";

const ListItem = ({ heading, detail, deleteTodoItem, index }) => {
  const BASE_URL = "https://random.imagecdn.app/200/200";

  const [details, setDetails] = useState(false);
  const [status, setStatus] = useState(false);
  const [imgUrl, setImgUrl] = useState("");
  // console.log(imgFetch);

  useEffect(() => {
    {
      {
        async function fetchImg() {
          const response = await fetch(BASE_URL);
          setImgUrl(response.url);
        }
        fetchImg();
      }
    }
  }, []);

  return (
    <div className="mt-10 w-[90%] p-2 bg-gray-500 flex flex-col justify-between items-center rounded-xl">
      {details ? (
        <div className="details-container bg-gray-400 rounded-lg py-2 px-4 mt-2 flex flex-col justify-center items-center text-xs">
          <div className="heading-container w-full flex flex-col justify-center items-center">
            <img src={imgUrl} alt="img" className="w-[200px] my-3" />

            <h1 className="text-lg flex items-center">
              {status && (
                <MdDoneAll size={30} className="text-green-600 mr-2" />
              )}
              {heading}
            </h1>
          </div>
          <h1 className="underline my-2 text-sm">Details:</h1>
          <p className="my-4">{detail}</p>
        </div>
      ) : (
        <div className="text-container w-full flex items-center">
          <div className="img w-[50px]">
            <img src={imgUrl} alt="img" className="w-full" />
          </div>
          <div className="text w-5/6 p-4 flex items-center">
            {status && <MdDoneAll size={30} className="text-green-600 mr-2" />}
            {heading}
          </div>
        </div>
      )}

      <div className="btns flex flex-nowrap mt-4  bg-gray-400 w-7/12 justify-center rounded-xl">
        <button className="p-2  mx-2 text-blue-300 hover:text-blue-500 ">
          <MdOutlineExpandCircleDown
            size={25}
            onClick={() => setDetails(!details)}
            className={details ? "rotate-180" : ""}
          />
        </button>
        <button
          className="p-2 mx-2 text-green-300 hover:text-green-500"
          onClick={() => setStatus(!status)}
        >
          <FaRegCheckCircle size={21} />
        </button>
        <button
          className="p-2  mx-2 text-red-300 hover:text-red-500"
          onClick={(e) => {
            deleteTodoItem(index);
          }}
        >
          <MdDelete size={25} />
        </button>
      </div>
    </div>
  );
};
export default ListItem;
