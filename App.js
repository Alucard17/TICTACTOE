import React from "react";
import { View, StyleSheet } from "react-native";
import { Header, Text, Overlay, Button } from "react-native-elements";
import Board from "./components/Board";

const getInitialState = () => {
  return {
    boxes: Array(9).fill(undefined),
    xsTurn: true,
    showPopup: false,
    popupText: ""
  };
};
export default class App extends React.Component {
  state = getInitialState();
  playTurn(index) {
    let { xsTurn, boxes } = { ...this.state };
    if (!boxes[index]) {
      boxes[index] = xsTurn ? "x" : "0";
      this.setState({ xsTurn: !xsTurn, boxes: boxes }, () => this.gameLoop());
    }
  }
  getTurn() {
    return `Next Player is ${this.state.xsTurn ? "X" : "0"}`;
  }
  gameLoop() {
    let { boxes } = this.state;
    if (
      (boxes[0] === "x" && boxes[1] === "x" && boxes[2] === "x") ||
      (boxes[3] === "x" && boxes[4] === "x" && boxes[5] === "x") ||
      (boxes[6] === "x" && boxes[7] === "x" && boxes[8] === "x") ||
      (boxes[0] === "x" && boxes[3] === "x" && boxes[6] === "x") ||
      (boxes[2] === "x" && boxes[5] === "x" && boxes[8] === "x") ||
      (boxes[6] === "x" && boxes[7] === "x" && boxes[8] === "x") ||
      (boxes[0] === "x" && boxes[4] === "x" && boxes[8] === "x") ||
      (boxes[2] === "x" && boxes[4] === "x" && boxes[6] === "x")
    ) {
      this.setState({ showPopup: true, popupText: "X Wins" });
    } else if (
      (boxes[0] === "0" && boxes[1] === "0" && boxes[2] === "0") ||
      (boxes[3] === "0" && boxes[4] === "0" && boxes[5] === "0") ||
      (boxes[6] === "0" && boxes[7] === "0" && boxes[8] === "0") ||
      (boxes[0] === "0" && boxes[3] === "0" && boxes[6] === "0") ||
      (boxes[2] === "0" && boxes[5] === "0" && boxes[8] === "0") ||
      (boxes[6] === "0" && boxes[7] === "0" && boxes[8] === "0") ||
      (boxes[0] === "0" && boxes[4] === "0" && boxes[8] === "0") ||
      (boxes[2] === "0" && boxes[4] === "0" && boxes[6] === "0")
    ) {
      this.setState({ showPopup: true, popupText: "0 Wins" });
    } else if (boxes.filter(box => box == undefined).length == 0) {
      this.setState({ showPopup: true, popupText: "Its a Draw" });
    }
  }

  renderPopup() {
    return (
      <Overlay isVisible={this.state.showPopup} height={ 300 }>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text
            style={{ paddingBottom: 5, marginHorizontal: 5, color: "#8186d5" }}
            h3
          >
            {this.state.popupText}
          </Text>
          <Button
            raised
            title="Play Again"
            onPress={() => this.setState(getInitialState())}
          />
        </View>
      </Overlay>
    );
  }
  render() {
    return (
      <View>
        <Header
          backgroundColor="#494ca2"
          centerComponent={{
            text: "Tic Tac Toe",
            style: { color: "white", fontSize: 22 }
          }}
        />
        <View style={styles.gameContainer}>
          <Text
            style={{ paddingBottom: 5, marginHorizontal: 5, color: "#8186d5" }}
            h3
          >
            {this.getTurn()}
          </Text>
          <Board boxes={this.state.boxes} playTurn={i => this.playTurn(i)} />
        </View>
        {this.renderPopup()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  gameContainer: {
    flex: 1,
    margin: 5,
    flexDirection: "column",
    alignItems: "center",
    alignSelf: "stretch"
  }
});
