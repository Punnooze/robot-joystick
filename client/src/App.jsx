// MessageInput.js
// import { useEffect, useState } from 'react';
import axios from 'axios';

const MessageInput = () => {
  // const [w, setW] = useState(false);
  // const [a, setA] = useState(null);
  // const [s, setS] = useState(null);
  // const [d, setD] = useState(null);

  // const handleClick = async () => {
  //   // console.log(w, a, s, d);
  //   // const message = [w, a, s, d];
  //   console.log('clicked');
  //   const message = 'hello';
  //   console.log(message);
  //   const res = await axios.post('http://localhost:3001/api/message', {
  //     message: message,
  //   });
  //   if (res.data.message === 'received') console.log('success');
  // };

  // useEffect(() => {
  const handleW = async () => {
    try {
      const message = 'W';
      console.log('clicked');
      const res = await axios.post(
        `http://localhost:3001/api/message?message=${message}`,
        {
          message: message,
        }
      );
      if (res.data.message === 'received') {
        console.log('success');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  const handleA = async () => {
    try {
      const message = 'A';
      console.log('clicked');
      const res = await axios.post(
        `http://localhost:3001/api/message?message=${message}`,
        {
          message: message,
        }
      );
      if (res.data.message === 'received') {
        console.log('success');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  const handleS = async () => {
    try {
      const message = 'S';
      console.log('clicked');
      const res = await axios.post(
        `http://localhost:3001/api/message?message=${message}`,
        {
          message: message,
        }
      );
      if (res.data.message === 'received') {
        console.log('success');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  const handleD = async () => {
    try {
      const message = 'D';
      console.log('clicked');
      const res = await axios.post(
        `http://localhost:3001/api/message?message=${message}`,
        {
          message: message,
        }
      );
      if (res.data.message === 'received') {
        console.log('success');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // const downW = () => {
  //   console.log('down');
  //   setW(true);
  //   const logPressed = () => {
  //     console.log('Pressed');
  //     requestAnimationFrame(logPressed);
  //   };
  //   logPressed;
  // };
  // const upW = () => {
  //   console.log('up');
  //   setW(false);
  // };

  //   if (w) handleClick;
  // }, [w]);

  //console.log(res.data.message);

  return (
    <div className="bg-background h-[100vh] w-[100vw] flex justify-center items-center">
      <div className="w-[90vh] h-[70vh] bg-darkgrey flex justify-around items-center rounded-md">
        <div className="flex flex-col h-[40vh] justify-around bg-darkergrey px-[40px] rounded-md">
          <button className='bg-lightgrey text-background border-2 border-background outline-none hover:bg-background hover:text-lightgrey hover:border-lightgrey duration-200 focus:border-lightgrey focus:border-2'
            onClick={
              // setW('W')
              handleW
            }
            // onMouseDown={downW}
            // onMouseUp={upW}
          >
            W
          </button>
          <button className='bg-lightgrey text-background border-2 border-background outline-none hover:bg-background hover:text-lightgrey hover:border-lightgrey duration-200 focus:border-lightgrey focus:border-2'
            onClick={
              // setS('S')
              handleS
            }
          >
            S
          </button>
        </div>
        <div className="flex  w-[40vw] justify-around bg-darkergrey py-[40px] rounded-md">
          <button className='bg-lightgrey text-background border-2 border-background outline-none hover:bg-background hover:text-lightgrey hover:border-lightgrey duration-200 focus:border-lightgrey focus:border-2'
            // onClick={() => {
            //   // setA('A');
            //   console.log('clicking a');
            //   handleClick;
            // }}
            onClick={
              // setA('A')
              handleA
            }
          >
            A
          </button>
          <button className='bg-lightgrey text-background border-2 border-background outline-none hover:bg-background hover:text-lightgrey hover:border-lightgrey duration-200 focus:border-lightgrey focus:border-2'
            onClick={
              // setD('D')
              handleD
            }
          >
            D
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessageInput;
