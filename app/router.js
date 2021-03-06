import React from "react";
import { Icon } from "react-native-elements";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import Bookcase from "./screens/Bookcase";
import Explore from "./screens/Explore";
import AddBook from "./screens/AddBook";
import Lists from "./screens/Lists";
import Profile from "./screens/Profile";
import EditBook from "./screens/EditBook";

export const Tabs = createBottomTabNavigator({
  Bookcase: {
    screen: Bookcase,
    navigationOptions: {
      tabBarLabel: "Bookcase",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="open-book" type="entypo" size={28} color={tintColor} />
      )
    }
  },
  Explore: {
    screen: Explore,
    navigationOptions: {
      tabBarLabel: "Explore",
      tabBarIcon: ({ tintColor }) => (
        <Icon
          name="browser"
          type="entypo"
          size={28}
          color={tintColor}
        />
      )
    }
  },
  "Add Book": {
    screen: AddBook,
    navigationOptions: {
      tabBarLabel: "Add Book",
      tabBarIcon: ({ tintColor }) => (
        <Icon
          name="ios-add-circle-outline"
          type="ionicon"
          size={28}
          color={tintColor}
        />
      )
    }
  },
  Lists: {
    screen: Lists,
    navigationOptions: {
      tabBarLabel: "Lists",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="list" type="entypo" size={28} color={tintColor} />
      )
    }
  },
  "My Profile": {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: "Profile",
      tabBarIcon: ({ tintColor }) => (
        <Icon
          name="user"
          type="entypo"
          size={28}
          color={tintColor}
        />
      )
    }
  }
});

export const BookcaseStack = createStackNavigator({
  Bookcase: {
    screen: Bookcase,
    navigationOptions: () => ({
      header: null
    })
  },
  EditBook: {
    screen: EditBook,
    navigationOptions: () => ({
      header: null,
      tabBarVisible: false,
      gesturesEnabled: false
    })
  }
});

export const Root = createStackNavigator(
  {
    Tabs: {
      screen: Tabs,
      navigationOptions: () => ({
        gesturesEnabled: false
      })
    },
    BookcaseStack: {
      screen: BookcaseStack,
      navigationOptions: () => ({
        gesturesEnabled: false
      })
    }
  },
  {
    headerMode: "none",
    mode: "modal"
  }
);
