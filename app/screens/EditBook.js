import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class EditBook extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Edit Book</Text>
        <Text
          style={styles.link}
          onPress={() => this.props.navigation.navigate('Bookcase')}
        >
          Back to Bookcase
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  link: {
    color: "blue"
  }
});
