export default {
  header: {
    self: {},
    items: [
      {
        title: "Me",
        root: true,
        alignment: "left",
        page: "dashboard",
        translate: "MENU.DASHBOARD"
      },
      {
        title: "Sensor",
        root: true,
        alignment: "left",
        toggle: "click",
        submenu: [
          {
            title: "Add Sensor",
            bullet: "line",
            page: ""
          },
          {
            title: "View",
            bullet: "line",
            page: ""
          }
        ]
      }
      
    ]
  },
  aside: {
    self: {},
    items: [
      {
        title: "Me",
        root: true,
        icon: "flaticon2-menu",
        page: "dashboard",
        bullet: "dot"
      },
 
      {
        title: "Sensor",
        root: true,
        bullet: "dot",
        icon: "flaticon2-digital-marketing",
        submenu: [
          {
            title: "View",
            page: ""
          },
          {
            title: "Add",
            page: ""
          }
        ]
      }
    ]
  }
};
