import React from 'react';
import './App.css';

function App() {
    return (
        <div className="appWrapper">
            <header className="header">
                <img
                    src="https://assets-global.website-files.com/60abb689ce5c94972a5f808a/6107298ce4b5511f5f772f3f_Telos%20Logo%20Small.png"
                    alt=""/>
            </header>
            <nav className="nav">
                <div>
                    <a>Profile</a>
                </div>
                <div>
                    <a>Messages</a>
                </div>
                <div>
                    <a>News</a>
                </div>
                <div>
                    <a>Music</a>
                </div>
                <div>
                    <a>Settings</a>
                </div>
            </nav>
            <div className="content">
               <div>
                <img src="https://sites.google.com/site/prirodanaha/_/rsrc/1468741750018/home/%D0%96%D0%B8%D0%B2%D0%B0%D1%8F-%D0%BF%D1%80%D0%B8%D1%80%D0%BE%D0%B4%D0%B0.jpg" alt=""/>
               </div>
                <div>
                    <img src="https://i.doska.by/images/2022-01-14/6273/UX8OHklg/animals-dogs-newfoundland-1-1.800.jpg" alt="" className='logo'/>
                    <span>I'm beautiful dog. <br/> My name is Nju. <br/> I live in minsk. <br/>I'm 10 y.o.</span>
                </div>
                <div>
                    <h3>My posts</h3>
                </div>
                <div>post 1</div>
                <div>post 2</div>
                <div>post 3</div>
                <div>post 4</div>
                <div>post 5</div>
            </div>
        </div>
    );
}

export default App;
