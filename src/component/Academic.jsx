import React from 'react'
import "../component/Academic.css"
import GroupsIcon from '@mui/icons-material/Groups';
const Academic = () => {
  return ( 
    <div className='body'>
    <div className="container">
    <div className="card">
        <div className="face face1">
            <div className="content">
                <div className="icon">
                    <GroupsIcon fontSize='large' />
                </div>
            </div>
        </div>
        <div className="face face2">
            <div className="content">
                <h3>
                    <a  >_CLUBS</a>
                </h3>
                <p>This is where I network and build my professional protfolio.</p>
            </div>
        </div>
    </div>
    <div className="card">
        <div className="face face1">
            <div className="content">
                <div className="icon">
                    <i className="fa fa-twitter-square" aria-hidden="true"></i>
                </div>
            </div>
        </div>
        <div className="face face2">
            <div className="content">
                <h3>
                    <a >STUDY-MATERIAL</a>
                </h3>
                <p>This is where I read news and network with different social groups.</p>
            </div>
        </div>
    </div>
    <div className="card">
        <div className="face face1">
            <div className="content">
                <div className="icon">
                    <i className="fa fa-github-square" aria-hidden="true"></i>
                </div>
            </div>
        </div>
        <div className="face face2">
            <div className="content">
                <h3>
                    <a  >CODING SOURCE</a>
                </h3>
                <p>This is where I share code and work on projects.</p>
            </div>
        </div>
    </div>
    
    
    
    
</div>

    </div>
  )
}

export default Academic;
