import React from "react";
import "./School.css";
import video from "../../assets/video.png";

function School() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className = "info">
          <h2 className = "schoolName">Wireframe High School</h2>
          <p className = "schoolAddress">1010 911 NE street, WA, 98911</p>
          <hr/>
          <ul className = "buildingFilter"><p>Buildings detected shooter</p>
            <p><label><input type="checkbox" checked/>Student Hall</label></p>
            <p><label><input type="checkbox"/>Health Center</label></p>
          </ul>
          <p className = "filterResult">Filtered 6 classrooms on first floor. </p>
        </div>
        <div className="scrollbox">
        <div className="featuredItem">
          <div className="video"><a href="http://ast-vid-stream.centralus.cloudapp.azure.com:443/" alt="liveVideo"><img alt="video" src={video}/></a></div>
          <div className = "roomInfo">
          <span className="featuredTitle"><strong>classroom 103</strong> <th className="widgetStatusDanger">danger</th></span>
          <br/><br/>
          <span className="attackerNum">Attacker: 1</span>
          <br/>
          <span className="studentNum">Students: 21</span>
          </div>
        </div>
        <div className="featuredItem">
          <div className="video"><img alt="video" src={video}/></div>
          <div className = "roomInfo">
          <span className="featuredTitle"><strong>classroom 101</strong><th className="widgetStatusSafe">safe</th></span>
          <br/><br/>
          <span className="attackerNum">Attacker: 0</span>
          <br/>
          <span className="studentNum">Students: 3</span>
          </div>
        </div>
        <div className="featuredItem">
          <div className="video"><img alt="video" src={video} /></div>
          <div className = "roomInfo">
          <span className="featuredTitle"><strong>classroom 102</strong> <th className="widgetStatusSafe">safe</th></span>
          <br/><br/>
          <span className="attackerNum">Attacker: 0</span>
          <br/>
          <span className="studentNum">Students: 0</span>
          </div>
        </div>
        <div className="featuredItem">
          <div className="video"><img src={video} alt="video" /></div>
          <div className = "roomInfo">
          <span className="featuredTitle"><strong>classroom 104</strong> <th className="widgetStatusSafe">safe</th></span>
          <br/><br/>
          <span className="attackerNum">Attacker: 0</span>
          <br/>
          <span className="studentNum">Students: 5</span>
          </div>
        </div>
        <div className="featuredItem">
          <div className="video"><img src={video} alt="video" /></div>
          <div className = "roomInfo">
          <span className="featuredTitle"><strong>classroom 105</strong> <th className="widgetStatusSafe">safe</th></span>
          <br/><br/>
          <span className="attackerNum">Attacker: 0</span>
          <br/>
          <span className="studentNum">Students: 21</span>
          </div>
        </div>
        <div className="featuredItem">
          <div className="video"><img src={video} alt="video" /></div>
          <div className = "roomInfo">
          <span className="featuredTitle"><strong>classroom 106</strong> <th className="widgetStatusSafe">safe</th></span>
          <br/><br/>
          <span className="attackerNum">Attacker: 0</span>
          <br/>
          <span className="studentNum">Students: 21</span>
          </div>
        </div>
        </div>
        {/* <div className="featuredItem">
          <p className="featuredTitle">classroom 101</p>
          <th className="widgetStatus">Civilians: </th>
        </div>
        <div className="featuredItem">
          <p className="featuredTitle">classroom 102</p>
          <th className="widgetStatus">Civilians: </th>
        </div>
        <div className="featuredItem">
          <p className="featuredTitle">classroom 103</p>
          <th className="widgetStatus">Civilians: </th>
        </div>
        <div className="featuredItem">
          <p className="featuredTitle">classroom 104</p>
          <th className="widgetStatus">Civilians: </th>
        </div>
        <div className="featuredItem">
          <p className="featuredTitle">classroom 105</p>
          <th className="widgetStatus">Civilians: </th>
        </div> */}
      </div>
    </div>
    
  );
}

export default School;
