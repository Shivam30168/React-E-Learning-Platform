export const menus=[
  {
    "label": "Home",
    "url": "/home"
  },
  {
    "label": "About",
    "url": "/about",
    "children": [
      {
        "label": "Company",
        "url": "/about/company"
      },
      {
        "label": "Team",
        "url": "/about/team"
      },
      {
        "label": "Mission",
        "url": "/about/mission",
        "children": [
          {
            "label": "Short Term Goals",
            "url": "/about/mission/short-term-goals"
          },
          {
            "label": "Long Term Goals",
            "url": "/about/mission/long-term-goals"
          }
        ]
      }
    ]
  },
  
  {
    "label": "Contact",
    "url": "/contact"
  },
  {
    "label": "Login",
    "url": "/login",
    "children": [
      {
        "label": "Signin",
        "url": "/signin"
      },
      {
        "label": "Signup",
        "url": "/signup"
      }
    ]
  }
]


export default menus