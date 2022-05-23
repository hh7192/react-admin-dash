import React, {useState} from "react";
import "./new.scss";
import Sidebar from "../../componants/sidebar/Sidebar";
import Navbar from "../../componants/navbar/Navbar";
import IMG from "../../images/no-image.png";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";

const New = ({inputs, title}) => {
  const [file, setFile] = useState("");

  return (
    <div className='new'>
      <Sidebar />
      <div className='new__container'>
        <Navbar />
        <div className='top'>
          <h1 className='title'>{title}</h1>
        </div>
        <div className='bottom'>
          <div className='left'>
            <img
              src={file ? URL.createObjectURL(file) : IMG}
              alt='no-image'
              className='newImg'
            />
          </div>

          <div className='right'>
            <form className='form'>
              <div className='input__container'>
                <label htmlFor='file'>
                  Image: <DriveFolderUploadIcon className='icon' />
                </label>
                <input
                  type='file'
                  id='file'
                  className='input__file'
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </div>

              {inputs.map((input) => (
                <div className='input__container' key={input.id}>
                  <label>{input.label}</label>
                  <input
                    type={input.type}
                    placeholder={input.placeholder}
                    required
                    minlength='4'
                    maxlength='50'
                    className='input__info'
                  />
                </div>
              ))}

              <button type='submit' className='btn'>
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
