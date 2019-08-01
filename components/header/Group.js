import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

export class Group extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <View style={styles.container}>{this.props.children}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
