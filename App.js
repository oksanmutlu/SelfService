import React, {Fragment} from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';


// import tab screens
import Home from './tab_screen/Home';
import Search from './tab_screen/Search';
import Campaign from './tab_screen/Campaign';
import Profile from './tab_screen/Profile';

//product
import ProductDetail from './screens/ProductDetail';
const productStack=createStackNavigator({
home:Home,
productDetail:ProductDetail
})

//product end

const TabNavigator = createBottomTabNavigator({
  home: {
      screen:productStack,  
      navigationOptions:{  
        tabBarLabel:'Ürünler',  
        tabBarIcon:({tintColor})=>(  
            <Icon name="home" color={tintColor} size={25}/>  
        )  
      }  
  },  
  search: {
    screen:Search,  
    navigationOptions:{  
      tabBarLabel:'Arama',  
      tabBarIcon:({tintColor})=>(  
          <Icon name="search" color={tintColor} size={25}/>  
      )  
    }  
},
  campaign: {
    screen:Campaign,  
    navigationOptions:{  
      tabBarLabel:'Kampanya',  
      tabBarIcon:({tintColor})=>(  
          <Icon name="book" color={tintColor} size={25}/>  
      )  
    }  
},
  profile:{
    screen:Profile,  
    navigationOptions:{  
      tabBarLabel:'Profil',  
      tabBarIcon:({tintColor})=>(  
          <Icon name="user" color={tintColor} size={25}/>  
      )  
    }  
}
});

export default createAppContainer(TabNavigator);

