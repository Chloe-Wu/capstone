import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Map from "../../components/Map/Map";
import Topbar from "../../components/Topbar/Topbar";

function Home() {
  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="area">
          <Map />
        </div>
      </div>
    </div>
  );
}

export default Home;
