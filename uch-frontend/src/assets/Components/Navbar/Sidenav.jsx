// components/Sidenav/Sidenav.js
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
import { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { SidebarContext } from "../../Context/SidebarContext";

const Sidenav = () => {
  const location = useLocation();
  const { activeItem, setActiveItem, expanded, setExpanded, handleActiveItem } = useContext(SidebarContext);

  useEffect(() => {
    const path = location.pathname;
    if (path.includes("/admin/stats")) {
      setActiveItem("Statistics");
    } else if (path.includes("/admin/orders")) {
      setActiveItem("Orders");
    } else if (path.includes("/admin/inventory")) {
      setActiveItem("Inventory");
    } else if (path.includes("/admin/users")) {
      setActiveItem("Users");
    } else if (path.includes("/admin/billing")) {
      setActiveItem("Billings");
    } else {
      setActiveItem("Dashboard");
    }
  }, [location.pathname, setActiveItem]);

  return (
    <aside className={styles.sidenavContainer}>
      <nav className={`${styles.navContainer} ${expanded ? "" : styles.collapsed}`}>
        <div className={styles.navTop}>
          <img src={logo} alt="" className={expanded ? "" : styles.hidden} />
          <div onClick={() => setExpanded(!expanded)}>
            {expanded ? <BiSkipPrevious className={styles.icon} /> : <BiSkipNext className={styles.icon} />}
          </div>
        </div>
        <div className={styles.navList}>
          <Link to="/admin">
            <SidebarItem
              icon={<MdOutlineDashboardCustomize />}
              text="Dashboard"
              active={activeItem === "Dashboard"}
              onClick={() => handleActiveItem("Dashboard")}
              alert="False"
            />
          </Link>
          <Link to="/admin/stats">
            <SidebarItem
              icon={<IoIosStats />}
              text="Statistics"
              onClick={() => handleActiveItem("Statistics")}
              active={activeItem === "Statistics"}
            />
          </Link>
          <Link to="/admin/orders">
            <SidebarItem
              icon={<FiPackage />}
              text="Orders"
              active={activeItem === "Orders"}
              onClick={() => handleActiveItem("Orders")}
            />
          </Link>
          <Link to="/admin/inventory">
            <SidebarItem
              icon={<MdOutlineInventory />}
              text="Inventory"
              active={activeItem === "Inventory"}
              onClick={() => handleActiveItem("Inventory")}
            />
          </Link>
          <Link to="/admin/users">
            <SidebarItem
              icon={<IoIosPeople />}
              text="Users"
              active={activeItem === "Users"}
              onClick={() => handleActiveItem("Users")}
            />
          </Link>
          <Link to="/admin/billing">
            <SidebarItem
              icon={<RiBillLine />}
              text="Billings"
              active={activeItem === "Billings"}
              onClick={() => handleActiveItem("Billings")}
            />
          </Link>
        </div>
        <div className={styles.navBottom}>
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuotwYQAKEQRFWuBTy0pLOC2bGbb0byFDIiHXyXuqXZg&s"
              alt=""
            />
          </div>
          <div className={`${styles.adminDets} ${expanded ? "" : styles.hidden}`}>
            <div className={styles.heading}>Harpreet Kaur</div>
            <div className={styles.subContent}>harpreet@uch.com</div>
          </div>
          <div>
            <SlOptionsVertical className={`${styles.icon} ${expanded ? "" : styles.hidden}`} />
          </div>
        </div>
      </nav>
    </aside>
  );
};

export { Sidenav };
