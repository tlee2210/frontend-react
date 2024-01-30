import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Navdata = () => {
  const history = useNavigate();
  //state data
  const [isDashboard, setIsDashboard] = useState(false);
  const [isApps, setIsApps] = useState(false);

  const [iscurrentState, setIscurrentState] = useState("Dashboard");

  function updateIconSidebar(e) {
    if (e && e.target && e.target.getAttribute("subitems")) {
      const ul = document.getElementById("two-column-menu");
      const iconItems = ul.querySelectorAll(".nav-icon.active");
      let activeIconItems = [...iconItems];
      activeIconItems.forEach((item) => {
        item.classList.remove("active");
        var id = item.getAttribute("subitems");
        if (document.getElementById(id))
          document.getElementById(id).classList.remove("show");
      });
    }
  }

  useEffect(() => {
    document.body.classList.remove("twocolumn-panel");
    if (iscurrentState !== "Dashboard") {
      setIsDashboard(false);
    }
    if (iscurrentState !== "Apps") {
      setIsApps(false);
    }
  }, [history, iscurrentState, isDashboard, isApps]);

  const menuItems = [
    {
      label: "Menu",
      isHeader: true,
    },
    {
      id: "home",
      label: "Home",
      link: "/",

      click: function (e) {},
    },
    //User
    // {
    //     id: "dashboard",
    //     label: "User",
    //     link: "/#",
    //     stateVariables: isDashboard,
    //     click: function (e) {
    //         e.preventDefault();
    //         setIsDashboard(!isDashboard);
    //         setIscurrentState('Dashboard');
    //         updateIconSidebar(e);
    //     },
    //     subItems: [
    //         {
    //             id: "products",
    //             label: "products list",
    //             link: "/products",
    //             parentId: "dashboard",
    //         },

    //     ],
    // },

    //Course
    {
      label: "Courses",
      link: ".",
      subItems: [
        {
          id: "coursespage",
          label: "Courses",
          link: "/courses-page",
        },
        {
          id: "find-a-source",
          label: "Find A Source",
          link: "/courses-page/find-a-source",
        },
        {
          id: "under-graduate",
          label: "Under Graduate",
          link: "/courses-page/under-graduate-page",
        },
        {
          id: "under-graduate",
          label: "Course Details",
          link: ".",
        },
        //Unit
        {
          id: "unit",
          label: "Unit",
          link: "/unit-page",
        },
      ],
    },

    //News
    {
      id: "news",
      label: "News",
      link: "/news",

      click: function (e) {
        e.preventDefault();
        updateIconSidebar(e);
      },
    },

    //Facilities
    {
      id: "facilities",
      label: "Facilities",
      link: "/facilities",

      click: function (e) {
        e.preventDefault();
        updateIconSidebar(e);
      },
    },
    //contact
    {
      id: "contact-us",
      label: "Contact Us",
      link: "/contact-us",

      click: function (e) {
        e.preventDefault();
        updateIconSidebar(e);
      },
    },
  ];
  return <React.Fragment>{menuItems}</React.Fragment>;
};
export default Navdata;
