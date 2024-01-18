import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Navdata = () => {
  const history = useNavigate();
  //state data
  const [isCourses, setIsCourses] = useState(false);
  const [isArticle, setIsArticle] = useState(false);
  const [isContact, setIsContact] = useState(false);
  const [isFaculty, setIsFaculty] = useState(false);
  const [isStaff, setIsStaff] = useState(false);
  const [isfacilities, setIsfacilities] = useState(false);
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
    if (iscurrentState !== "Courses") {
      setIsCourses(false);
    }
    if (iscurrentState !== "Article") {
      setIsArticle(false);
    }
    if (iscurrentState !== "Contact") {
      setIsContact(false);
    }
    if (iscurrentState !== "Faculty") {
      setIsFaculty(false);
    }
    if (iscurrentState !== "Staff") {
      setIsStaff(false);
    }
    if (iscurrentState !== "Facilities") {
      setIsfacilities(false);
    }
  }, [
    history,
    iscurrentState,
    isCourses,
    isArticle,
    isContact,
    isFaculty,
    isStaff,
    isfacilities,
  ]);

  const menuItems = [
    {
      label: "Menu",
      isHeader: true,
    },
    {
      id: "courses",
      label: "Courses",
      icon: "ri-apps-2-line",
      link: "/#",
      click: function (e) {
        e.preventDefault();
        setIsCourses(!isCourses);
        setIscurrentState("Courses");
        updateIconSidebar(e);
      },
      stateVariables: isCourses,
      subItems: [
        {
          id: "Courses",
          label: "Courses list",
          link: "/dashboard/Courses",
          parentId: "courses",
        },
      ],
    },
    {
      id: "faculty",
      label: "Faculty",
      icon: "ri-bookmark-fill",
      link: "/#",
      click: function (e) {
        e.preventDefault();
        setIsFaculty(!isFaculty);
        setIscurrentState("Faculty");
        updateIconSidebar(e);
      },
      stateVariables: isFaculty,
      subItems: [
        {
          id: "Facultyl",
          label: "faculty list",
          link: "/dashboard/faculty",
          parentId: "faculty",
        },
      ],
    },
    {
      label: "Staff Students",
      isHeader: true,
    },
    {
      id: "staff",
      label: "Staff",
      icon: "ri-user-line",
      link: "/#",
      click: function (e) {
        e.preventDefault();
        setIsStaff(!isStaff);
        setIscurrentState("Staff");
        updateIconSidebar(e);
      },
      stateVariables: isStaff,
      subItems: [
        {
          id: "staffList",
          label: "Staff list",
          link: "/dashboard/staff",
          parentId: "staff",
        },
      ],
    },
    // Article
    {
      label: "Article",
      isHeader: true,
    },
    {
      id: "article",
      label: "Article",
      icon: "ri-file-list-3-line",
      link: "/#",
      click: function (e) {
        e.preventDefault();
        setIsArticle(!isArticle);
        setIscurrentState("Article");
        updateIconSidebar(e);
      },
      stateVariables: isArticle,
      subItems: [
        {
          id: "articleId",
          label: "article list",
          link: "/dashboard/article",
          parentId: "article",
        },
        {
          id: "Category",
          label: "Category list",
          link: "/dashboard/Category",
          parentId: "article",
        },
      ],
    },
    {
      label: "Facilities",
      isHeader: true,
    },
    {
      id: "facilities",
      label: "Facilities",
      icon: "ri-building-line",
      link: "/#",
      click: function (e) {
        e.preventDefault();
        setIsfacilities(!isfacilities);
        setIscurrentState("Facilities");
        updateIconSidebar(e);
      },
      stateVariables: isfacilities,
      subItems: [
        {
          id: "facilitiesList",
          label: "Facilities list",
          link: "/dashboard/facilities",
          parentId: "facilities",
        },
      ],
    },
    {
      label: "Contact Us",
      isHeader: true,
    },
    {
      id: "contact",
      label: "Contact",
      icon: "mdi-contacts-outline",
      link: "/dashboard/contactus",
      click: function (e) {
        e.preventDefault();
        setIsArticle(!isArticle);
        setIsContact(!isContact);
        setIscurrentState("Contact");
        updateIconSidebar(e);
      },
      stateVariables: isArticle,
    },
  ];
  return <React.Fragment>{menuItems}</React.Fragment>;
};
export default Navdata;
