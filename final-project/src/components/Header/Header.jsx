import React from "react";
import Sidebar from "../Sidebar";
import Avatar from 'react-avatar';

function Header() {
  return (
    
    <div className="header">
        <nav>
            <ul>
                <div className="p-1">
                    <li>
                        Home
                    </li>
                </div>
                <div className="p-1">
                    <li>
                    Technology
                    </li>
                </div>
                <div className="avatar">
                  <Avatar name="Telcio Cardoso" size="50" round={true} />
                </div>
        </ul>
      </nav>
    </div>

  );
}

export default Header;