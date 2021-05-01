import { createBottomTabNavigator } from 'react-navigation-tabs';
import List from './screens/ListScreen'
import Shop from './screens/ShopScreen'

export const AppTabNavigator = createBottomTabNavigator({
  ListScreen : {
    screen: List
  },
  ShopScreen: {
    screen: Shop
  }
});
