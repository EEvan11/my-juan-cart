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
                  label: "Men's-Necklaces",
                  key: "men-necklaces",
                },
                {
                  label: "Men's-Earrings",
                  key: "men-earrings",
                },
                {
                  label: "Men's-Bracelets",
                  key: "men-bracelets",
                },
                {
                  label: "Men's-Watches",
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
                  label: "Women's-Necklaces",
                  key: "women-necklaces",
                },
                {
                  label: "Women's-Earrings",
                  key: "women-earrings",
                },
                {
                  label: "Women's-Bracelets",
                  key: "women-bracelets",
                },
                {
                  label: "Women's-Watches",
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
