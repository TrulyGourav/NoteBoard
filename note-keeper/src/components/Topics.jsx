import {React} from "react";
import DrawIcon from '@mui/icons-material/Draw';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';

function Topics(props){

    function closeAbout(){
        props.onClose();
    }

    return <div> 
            <form className="topic-form" style={{width: '700px'}}>
                <div>
                    <button onClick={closeAbout}><CancelPresentationIcon /></button>
                    <center><h2>-- Note Board -- </h2></center>
                    <center><DrawIcon /><br /><br />
                    <h3>This is a FullStack React and Springboot application.</h3><br />
                    <h3>Front-End is built using React.</h3><br />
                    <h3>Back-End is built using Springboot.</h3><br />
                    <h3>For deploying, Amazon Web Services (AWS) is used.</h3><br />
                    <h3>The database used in the project is PostgreSQL.</h3><br /></center>
                    
                    
                </div>
            </form>
        </div>
    
}
export default Topics;