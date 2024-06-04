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
