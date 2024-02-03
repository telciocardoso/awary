// Filename - components/Sidebar.js

import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import SidebarData from "../SidebarData";
import SubMenu from "../SubMenu";
import { IconContext } from "react-icons/lib";



const SidebarNav = styled.nav`
	position: absolute;
	width: 200px;
	height: 100%;

	justify-content: left;

	border-right: 1px solid #00bc51;
    border-radius: 1px;
	
`;

const SidebarWrap = styled.div`
	width: 80%;
`;

const Sidebar = () => {
	const [sidebar, setSidebar] = useState(true);

	const showSidebar = () => setSidebar(!sidebar);

	return (
		<>
				<SidebarNav sidebar={sidebar}>
					<SidebarWrap>
						{SidebarData.map((item, index) => {
							return (
								<SubMenu
									item={item}
									key={index}
								/>
							);
						})}
					</SidebarWrap>
				</SidebarNav>
			
		</>
	);
};

export default Sidebar;
