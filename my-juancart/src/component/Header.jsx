import {Menu} from 'antd';

const AppHeader = () => {
  return(
    <>
    <div className="header">
      <Menu
      mode='horizontal' 
      items={[
        {
               label: "Home",
               key: "home",
        },
        {
          label: "Men",
          key: "men",
          children:[
            {
              label: "Clothing",
              key:"clothe",
            },
            {
              label:"Accessories",
              key: "access",
              children:[
                {
                  label: "Men-Necklaces",
                  key: "men-necklaces",
                },
                {
                  label: "Men-Earrings",
                  key: "men-earrings",
                },
                {
                  label: "Men-Bracelets",
                  key: "men-bracelets",
                },
                {
                  label: "Men-Watches",
                  key: "men-watches",
                },
              ]
            },
            {
              label: "Homeware",
              key: "homeware",
            },
        ],
        }, 
        {
          label: "Women",
          key: "women",
          children: [
            {
              label: "Clothing",
              key: "clothing",
            },
            {
              label: "Accessories",
              key: "accessories",
              children:[
                {
                  label: "Women-Necklaces",
                  key: "women-necklaces",
                },
                {
                  label: "Women-Earrings",
                  key: "women-earrings",
                },
                {
                  label: "Women-Bracelets",
                  key: "women-bracelets",
                },
                {
                  label: "Women-Watches",
                  key: "women-watches",
                },
              ]
            },
            {
              label: "Homeware",
              key: "homeware",
            }
          ]
        }
      ]}>

      </Menu>
    </div>
    </>
  )
};

export default AppHeader;
