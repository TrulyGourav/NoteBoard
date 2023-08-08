import {React, useState} from "react";
import ContactMailIcon from '@mui/icons-material/ContactMail';
import DrawIcon from '@mui/icons-material/Draw';
import Topics from './Topics';

function Header(){
    const [aboutMode, setAboutMode] = useState(false);
    function viewAbout(){
        setAboutMode(true);
    }
    function handleClose(){
        setAboutMode(false);
    }

    return <div>
      <header style={{ display: 'flex', alignItems: 'center' }}>
        <div>
          Note Board <DrawIcon />
        </div>
        <div style={{ marginLeft: 'auto', fontSize: '15px', display: 'flex', alignItems: 'center' }}>
          <ContactMailIcon style={{ marginRight: '5px' }} />
          <p style={{ margin: 0, marginRight: '20px' }}>gourav.oct@gmail.com</p>
          <button onClick={viewAbout} style={{backgroundColor: '#3f4c67'}}><p>About Project</p></button>
        </div>
      </header>
      {aboutMode && <Topics 
        onClose={handleClose} />}
    </div>
}
export default Header;