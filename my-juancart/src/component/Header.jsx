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
              label: "Men's-Clothing",
              key:"clothe",
            },
            {
              label:"Men's-Accessories",
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
              label: "Women'sClothing",
              key: "clothing",
            },
            {
              label: "Women'sAccessories",
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
          ]
        },
        {
            label: "Homeware",
            key: "homeware",
            children:[
              { label: "Cookware", key: "cookware" },
              { label: "Utensils", key: "utensils" },
              { label: "Bakeware", key: "bakeware" },
              { label: "Cutlery", key: "cutlery" },
              { label: "Tableware", key: "tableware" },
              { label: "Drinkware", key: "drinkware" },
              { label: "Storage Containers", key: "storage-containers" }
            ]
        },
      ]}>

      </Menu>
    </div>
    </>
  )
};

export default AppHeader;
