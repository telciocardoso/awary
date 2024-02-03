import React from "react";
import Sidebar from "../Sidebar";
import Avatar from 'react-avatar';

function Header() {
  return (
    
    <div className="header">
        <nav>
            <ul>
                <div>
                    <li>
                        Home
                    </li>
                </div>
                <div>
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