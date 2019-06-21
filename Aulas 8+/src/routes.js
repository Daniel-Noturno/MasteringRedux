import { createAppContainer, createStackNavigator } from 'react-navigation';
import { colors } from '~/styles';

import Main from '~/pages/Main';
import Favorites from '~/pages/Favorites';

const Routes = createAppContainer(createStackNavigator({
  Main: { screen: Main },
  Favorites: { screen: Favorites },
}, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: colors.primaryDarken,
      borderBottomColor: colors.transparent,
    },
    headerTintColor: colors.white,
    headerBackTitle: null,
  },
}));

export default Routes;
