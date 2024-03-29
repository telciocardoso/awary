// Filename - components/SidebarData.js

import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

const SidebarData = [
	{
		title: "Home",
		path: "/home",
		icon: <AiIcons.AiFillHome />,
		iconClosed: <RiIcons.RiArrowDownSFill />,
		iconOpened: <RiIcons.RiArrowUpSFill />,

		subNav: [
			{
				title: "Services",
				path: "/services",
				icon: <IoIcons.IoIosPaper />,
			},
			{
				title: "Products",
				path: "/productsn",
				icon: <IoIcons.IoIosPaper />,
			},
		],
	},
	{
		title: "Services",
		path: "/service",
		icon: <IoIcons.IoIosPaper />,
		iconClosed: <RiIcons.RiArrowDownSFill />,
		iconOpened: <RiIcons.RiArrowUpSFill />,

		subNav: [
			{
				title: "Service 1",
				path: "/service",
				icon: <IoIcons.IoIosPaper />,
				cName: "sub-nav",
			},
			{
				title: "Service 2",
				path: "/service",
				icon: <IoIcons.IoIosPaper />,
				cName: "sub-nav",
			},
			{
				title: "Service 3",
				path: "/service",
				icon: <IoIcons.IoIosPaper />,
			},
		],
	},
	{
		title: "Events",
		path: "/events",
		icon: <FaIcons.FaEnvelopeOpenText />,

		iconClosed: <RiIcons.RiArrowDownSFill />,
		iconOpened: <RiIcons.RiArrowUpSFill />,

		subNav: [
			{
				title: "Event 1",
				path: "/events/events1",
				icon: <IoIcons.IoIosPaper />,
			},
			{
				title: "Event 2",
				path: "/events/events2",
				icon: <IoIcons.IoIosPaper />,
			},
		],
	},
	{
		title: "Support",
		path: "/support",
		icon: <IoIcons.IoMdHelpCircle />,
	},
	{
		title: "Contact",
		path: "/contact",
		icon: <FaIcons.FaPhone />,
	},
];

export default SidebarData;