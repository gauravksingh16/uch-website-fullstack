import React from "react";
import styles from "./Sidenav.module.css";
import logo from "../../Images/UCH_logo.svg";
import { BiSkipNext } from "react-icons/bi";
import { SlOptionsVertical } from "react-icons/sl";
import SidebarItem from "./SidebarItem";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { IoIosStats, IoIosPeople } from "react-icons/io";
import { FiPackage } from "react-icons/fi";
import { MdOutlineInventory } from "react-icons/md";
import { RiBillLine } from "react-icons/ri";
import { useState } from "react";

const Sidenav = () => {
  const [activeItem, setActiveItem] = useState("Orders");

  const handleActiveItem = (item) => {
    setActiveItem(item);
  };

  return (
    <aside className={styles.sidenavContainer}>
      <nav className={styles.navContainer}>
        <div className={styles.navTop}>
          <img src={logo} alt="" />
          <div>
            <BiSkipNext className={styles.icon} />
          </div>
        </div>
        <div className={styles.navList}>
          <SidebarItem
            icon={<MdOutlineDashboardCustomize />}
            text="Dashboard"
            active={activeItem === "Dashboard" ? true : false}
            onClick={() => handleActiveItem("Dashboard")}
            alert="False"
          />
          <SidebarItem
            icon={<IoIosStats />}
            text="Statistics"
            onClick={() => handleActiveItem("Statistics")}
            active={activeItem === "Statistics" ? true : false}
          />
          <SidebarItem
            icon={<FiPackage />}
            text="Orders"
            active={activeItem === "Orders" ? true : false}
            onClick={() => handleActiveItem("Orders")}
          />
          <SidebarItem
            icon={<MdOutlineInventory />}
            text="Inventory"
            active={activeItem === "Inventory" ? true : false}
            onClick={() => handleActiveItem("Inventory")}
          />
          <SidebarItem
            icon={<IoIosPeople />}
            text="Users"
            active={activeItem === "Users" ? true : false}
            onClick={() => handleActiveItem("Users")}
          />
          <SidebarItem
            icon={<RiBillLine />}
            text="Billings"
            active={activeItem === "Billings" ? true : false}
            onClick={() => handleActiveItem("Billings")}
          />
        </div>
        <div className={styles.navBottom}>
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuotwYQAKEQRFWuBTy0pLOC2bGbb0byFDIiHXyXuqXZg&s"
              alt=""
            />
          </div>
          <div className={styles.adminDets}>
            <div className={styles.heading}>Harpreet Kaur</div>
            <div className={styles.subContent}>harpreet@uch.com</div>
          </div>
          <div>
            <SlOptionsVertical className={styles.icon} />
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Sidenav;
