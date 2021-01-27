import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import Modal from 'react-native-modal';
import Pulse from '@app/libs/indicators/Pulse';
import {CommonColors} from "@app/utils/CommonStyles";

export default class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: 60,
      color: CommonColors.purple,
    };
  }

  render() {
    const {color, size} = this.state;

    return (
      <Modal
        animationIn="fadeIn"
        animationOut="fadeOut"
        backdropOpacity={0.3}
        isVisible
        avoidKeyboard
        useNativeDriver
      >
        <View style={styles.container}>
          <Pulse color={color} size={size}/>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
});
