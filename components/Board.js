import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Dimensions
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const DeviceWidth = Dimensions.get("window").width;

export default class Board extends React.Component {
  render() {
    let { boxes } = this.props;
    return (
      <View style={styles.board}>
        <View style={styles.row}>
          <View>
            <Cell Value={boxes[0]} onPress={ () => this.props.playTurn(0) }/>
            <Cell Value={boxes[1]} onPress={ () => this.props.playTurn(1) }/>
            <Cell Value={boxes[2]} onPress={ () => this.props.playTurn(2) }/>
          </View>
          <View>
            <Cell Value={boxes[3]} onPress={ () => this.props.playTurn(3) }/>
            <Cell Value={boxes[4]} onPress={ () => this.props.playTurn(4) }/>
            <Cell Value={boxes[5]} onPress={ () => this.props.playTurn(5) }/>
          </View>
          <View>
            <Cell Value={boxes[6]} onPress={ () => this.props.playTurn(6) }/>
            <Cell Value={boxes[7]} onPress={ () => this.props.playTurn(7) }/>
            <Cell Value={boxes[8]} onPress={ () => this.props.playTurn(8) }/>
          </View>
        </View>
      </View>
    );
  }
}

const Cell = ({ Value, onPress }) => {
  let PlayerIcon = undefined;
  if (Value == "x") {
    PlayerIcon = <Icon color="#ff5959" name="times" size={100} />;
  } else if (Value == "0") {
    PlayerIcon = <Icon color="#facf5a" name="circle-o" size={100} />;
  }
  return (
    <TouchableOpacity style={styles.cell} onPress={onPress}>
      {PlayerIcon}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  board: {
    flex: 1
  },
  row: {
    flexDirection: "row",
    justifyContent: "center"
  },
  cell: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#d7f7f5",
    borderWidth: 0.5,
    borderColor: "#494ca2",
    width: DeviceWidth * 0.3,
    height: DeviceWidth * 0.3
  }
});
