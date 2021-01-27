import React, {PureComponent} from 'react';
import {View, Animated, Easing, StyleSheet} from 'react-native';
import Indicator from './indicator';

export default class PulseIndicator extends PureComponent {
  static defaultProps = {
    animationEasing: Easing.out(Easing.ease),

    color: 'rgb(0, 0, 0)',
    size: 40,
  };

  constructor(props) {
    super(props);

    this.renderComponent = this.renderComponent.bind(this);
  }

  renderComponent({index, count, progress}) {
    let {size, color} = this.props;

    let pulseStyle = {
      height: size,
      width: size,
      borderRadius: size / 2,
      backgroundColor: color,
      transform: [{
        scale: progress.interpolate({
          inputRange: [0, 0.67, 1],
          outputRange: index?
            [0.4, 0.6, 0.4]:
            [0.4, 0.6, 1.0],
        }),
      }],
      opacity: progress.interpolate({
        inputRange: [0, 0.67, 1],
        outputRange: index?
          [1.0, 1.0, 1.0]:
          [0.5, 0.5, 0.0],
      }),
    };

    return (
      <Animated.View style={styles.layer} {...{key: index}}>
        <Animated.View style={pulseStyle} />
      </Animated.View>
    );
  }

  render() {
    let {style, size: width, size: height, ...props} = this.props;

    return (
      <View style={[styles.container, style]}>
        <Indicator
          style={{width, height}}
          renderComponent={this.renderComponent}
          {...props}
          count={2}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  layer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
});