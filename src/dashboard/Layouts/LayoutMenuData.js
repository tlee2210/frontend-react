import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Navdata = () => {
  const history = useNavigate();
  //state data
  const [isCourses, setIsCourses] = useState(false);
  const [isArticle, setIsArticle] = useState(false);
  const [isContact, setIsContact] = useState(false);
  const [isFaculty, setIsFaculty] = useState(false);
  const [isDepartment, setIsDepartment] = useState(false);
  const [isStaff, setIsStaff] = useState(false);
  const [isStudent, setisStudent] = useState(false);
  const [isfacilities, setIsfacilities] = useState(false);
  const [isSession, setIsSession] = useState(false);
  const [isFeedback, setIsFeedback] = useState(false);
  const [isAdmission, setIsAdmission] = useState(false);
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
    if (iscurrentState !== "Department") {
      setIsDepartment(false);
    }
    if (iscurrentState !== "Student") {
      setisStudent(false);
    }
    if (iscurrentState !== "Session") {
      setIsSession(false);
    }
    if (iscurrentState !== "Feedback") {
      setIsFeedback(false);
    }
    if (iscurrentState !== "Admission") {
      setIsAdmission(false);
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
    isDepartment,
    isStudent,
    isSession,
    isFeedback,
    isAdmission,
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
      id: "department",
      label: "Department",
      icon: "ri-book-fill",
      link: "/#",
      click: function (e) {
        e.preventDefault();
        setIsDepartment(!isDepartment);
        setIscurrentState("Department");
        updateIconSidebar(e);
      },
      stateVariables: isDepartment,
      subItems: [
        {
          id: "Departmentlist",
          label: "Department list",
          link: "/dashboard/department",
          parentId: "department",
        },
      ],
    },
    {
      label: "Session",
      isHeader: true,
    },
    {
      id: "session",
      label: "Session",
      icon: "bx bx-calendar",
      link: "/#",
      click: function (e) {
        e.preventDefault();
        setIsSession(!isSession);
        setIscurrentState("Session");
        updateIconSidebar(e);
      },
      stateVariables: isSession,
      subItems: [
        {
          id: "Session",
          label: "Session list",
          link: "/dashboard/sessions",
          parentId: "Session",
        },
      ],
    },
    {
      label: "Staff and Students",
      isHeader: true,
    },
    {
      id: "staff",
      label: "Staff",
      icon: "ri-user-2-fill",
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
          link: "/dashboard/staffs",
          parentId: "staff",
        },
      ],
    },
    {
      id: "student",
      label: "Student",
      icon: "ri-contacts-line",
      link: "/#",
      click: function (e) {
        e.preventDefault();
        setisStudent(!isStudent);
        setIscurrentState("Student");
        updateIconSidebar(e);
      },
      stateVariables: isStudent,
      subItems: [
        {
          id: "Studentlist",
          label: "Student list",
          link: "/dashboard/students",
          parentId: "student",
        },
      ],
    },
    {
      label: "Admission",
      isHeader: true,
    },
    {
      id: "admission",
      label: "Admission",
      icon: "ri-file-list-fill",
      link: "/#",
      click: function (e) {
        e.preventDefault();
        setIsAdmission(!isAdmission);
        setIscurrentState("Admission");
        updateIconSidebar(e);
      },
      stateVariables: isAdmission,
      subItems: [
        {
          id: "Proccess",
          label: "Admission Proccess",
          link: "/dashboard/admission/proccess",
          parentId: "admission",
        },
        {
          id: "Accept",
          label: "Admission Accept",
          link: "/dashboard/admission/accept",
          parentId: "admission",
        },
        {
          id: "Reject",
          label: "Admission Reject",
          link: "/dashboard/admission/reject",
          parentId: "admission",
        },
      ],
    },
    {
      label: "Student feedback",
      isHeader: true,
    },
    {
      id: "feedback",
      label: "Feedback",
      icon: "ri-message-fill",
      link: "/#",
      click: function (e) {
        e.preventDefault();
        setIsFeedback(!isFeedback);
        setIscurrentState("Feedback");
        updateIconSidebar(e);
      },
      stateVariables: isFeedback,
      subItems: [
        {
          id: "feedbackId",
          label: "feedback list",
          link: "/#",
          parentId: "feedback",
        },
        {
          id: "feedbackId2",
          label: "feedback list",
          link: "/#",
          parentId: "feedback",
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
