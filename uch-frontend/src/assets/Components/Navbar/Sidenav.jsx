import React from "react";
import styles from "./Sidenav.module.css";
import logo from "../../Images/UCH_logo.svg";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import { SlOptionsVertical } from "react-icons/sl";
import SidebarItem from "./SidebarItem";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { IoIosStats, IoIosPeople } from "react-icons/io";
import { FiPackage } from "react-icons/fi";
import { MdOutlineInventory } from "react-icons/md";
import { RiBillLine } from "react-icons/ri";
import { useState, createContext } from "react";

const SidebarContext = createContext();

const Sidenav = () => {
  const [activeItem, setActiveItem] = useState("Orders");

  const handleActiveItem = (item) => {
    setActiveItem(item);
  };

  const [expanded, setExpanded] = useState(true);

  return (
    <aside className={styles.sidenavContainer}>
      <nav className={`${styles.navContainer} ${expanded ? "" : styles.collapsed}`}>
        <div className={styles.navTop}>
          <img src={logo} alt="" className={expanded ? "" : styles.hidden} />
          <div onClick={() => setExpanded(!expanded)}>
            {expanded ? (
              <BiSkipPrevious className={styles.icon} />
            ) : (
              <BiSkipNext className={styles.icon} />
            )}
          </div>
        </div>
        <SidebarContext.Provider value={{ expanded }}>
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
        </SidebarContext.Provider>
        <div className={styles.navBottom}>
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuotwYQAKEQRFWuBTy0pLOC2bGbb0byFDIiHXyXuqXZg&s"
              alt=""
            />
          </div>
          <div
            className={`${styles.adminDets} ${expanded ? "" : styles.hidden}`}
          >
            <div className={styles.heading}>Harpreet Kaur</div>
            <div className={styles.subContent}>harpreet@uch.com</div>
          </div>
          <div>
            <SlOptionsVertical
              className={`${styles.icon} ${expanded ? "" : styles.hidden}`}
            />
          </div>
        </div>
      </nav>
    </aside>
  );
};

export { Sidenav, SidebarContext };
