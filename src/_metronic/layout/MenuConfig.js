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
        title: "Auction",
        root: true,
        alignment: "left",
        toggle: "click",
        submenu: [
          {
            title: "Ongoing Auctions",
            bullet: "line",
            page: ""
          },
          {
            title: "Closed Auctions",
            bullet: "line",
            page: ""
          }
        ]
      },
      {
        title: "Exhibition",
        root: true,
        alignment: "left",
        toggle: "click",
        submenu: [
          {
            title: "Ongoing Exhibition",
            bullet: "line",
            page: ""
          },
          {
            title: "Closed Exhibition",
            bullet: "line",
            page: ""
          }
        ]
      },
      // {
      //   title: "Components",
      //   root: true,
      //   alignment: "left",
      //   toggle: "click",
      //   submenu: [
      //     {
      //       title: "React Bootstrap",
      //       bullet: "dot",
      //       icon: "flaticon-web",
      //       submenu: [
      //
      //
      //       ]
      //     }
      //   ]
      // },
      {
        title: "Referral",
        root: true,
        alignment: "left",
        toggle: "click",
        submenu: [
              {
                title: "Refer a friend",
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
      // {
      //   title: "Layout Builder",
      //   root: true,
      //   icon: "flaticon2-expand",
      //   page: "builder"
      // },
      // { section: "Components" },
      {
        title: "Activities",
        root: true,
        bullet: "dot",
        icon: "flaticon2-browser-2",
        submenu: [
          {
            title: "Artwork",
            bullet: "dot",
            submenu: [
              {
                title: "Sold Artwork",
                page: ""
              },
              {
                title: "Bought Artwork",
                page: ""
              }
            ]
          },
          {
            title: "Auction",
            bullet: "dot",
            submenu: [
              {
                title: "Sold Auction",
                page: ""
              },
              {
                title: "Bought Auction",
                page: ""
              }
            ]
          },
          {
            title: "Negotiations",
            bullet: "dot",
            submenu: [
              {
                title: "Received Negotiations",
                page: ""
              },
              {
                title: "Requested Negotiations",
                page: ""
              }
            ]
          },
          {
            title: "Exhibition",
            bullet: "dot",
            submenu: [
              {
                title: "My Exhibitions",
                page: ""
              },
              {
                title: "Registered Exhibitions",
                page: ""
              }
            ]
          }
        ]
      },
      {
        title: "Auction",
        root: true,
        bullet: "dot",
        icon: "flaticon2-digital-marketing",
        submenu: [
          {
            title: "Ongoing Auctions",
            page: ""
          },
          {
            title: "Closed Auctions",
            page: ""
          }
        ]
      },
    
      {
        title: "Exhibition",
        root: true,
        bullet: "dot",
        icon: "flaticon2-calendar-9",
        submenu: [
          {
            title: "Ongoing Exhibition",
            page: ""
          },
          {
            title: "Closed Exhibition",
            page: ""
          }
        ]
      },
      {
        title: "Wallet",
        root: true,
        bullet: "dot",
        icon: "flaticon-suitcase",
        submenu: [
          {
            title: "Change Currency",
            page: "error/error-v1"
          },
          {
            title: "View Wallet",
            page: "error/error-v2"
          }
        ]
      }
    ]
  }
};
