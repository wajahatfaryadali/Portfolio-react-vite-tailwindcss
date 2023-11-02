import { toast } from 'react-toastify';
const toaster = {
  

  show(type, msg, time) {
    switch(type){
      case 'success': 
        toast.success(msg, {
          position: "top-center",
          autoClose: time,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          zIndex: 999999
        });
        break;
      case 'error': 
        toast.error(msg, {
          position: "top-center",
          autoClose: time,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          zIndex: 999999
        });
        break;  
    }
  },
  
};

export default toaster;