import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class Column extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/* 상단 */}
        <View
          style={{
            flex: 1,
            borderWidth: 1,
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start"
          }}
        >
          <View
            style={{ width: 30, height: 30, backgroundColor: "powderblue" }}
          />
          <View style={{ width: 30, height: 30, backgroundColor: "skyblue" }} />
          <View
            style={{ width: 30, height: 30, backgroundColor: "steelblue" }}
          />
        </View>

        {/* 중단 */}
        <View
          style={{
            flex: 1,
            borderWidth: 1,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <View
            style={{ width: 30, height: 30, backgroundColor: "powderblue" }}
          />
          <View style={{ width: 30, height: 30, backgroundColor: "skyblue" }} />
          <View
            style={{ width: 30, height: 30, backgroundColor: "steelblue" }}
          />
        </View>

        {/* 하단 */}
        <View
          style={{
            flex: 1,
            borderWidth: 1,
            flexDirection: "column",
            alignItems: "flex-end",
            justifyContent: "flex-end"
          }}
        >
          <View
            style={{ width: 30, height: 30, backgroundColor: "powderblue" }}
          />
          <View style={{ width: 30, height: 30, backgroundColor: "skyblue" }} />
          <View
            style={{ width: 30, height: 30, backgroundColor: "steelblue" }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
