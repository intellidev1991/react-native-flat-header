/*
 * Copyright (c) 2019 Hamed Taheri
 *
 * @Script: App.js
 * @Author: Hamed Taheri
 * @Email: hamed.taheri32@gmail.com
 * @Create At: 2019-04-02 03:11:52
 * @Last Modified By: Hamed Taheri
 * @Last Modified At: 2019-04-02 03:14:00
 * @Description: React-Native-FlatHeader Component
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { FlatHeader, Group } from './components/header'; // use this when install from npm > 'react-native-flat-header';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <FlatHeader
            leftIcon={<Icon name="rocket" size={30} color="#FFF" />}
            leftIconHandler={() => {
              console.warn('Icon Pressed');
            }}
            leftText="launch the rocket"
            leftTextHandler={() => {
              console.warn('Text Pressed');
            }}
            large
          />

          <FlatHeader
            leftIcon={<Icon name="rocket" size={30} color="#FFF" />}
            leftIconHandler={() => {
              console.warn('Left Icon Pressed');
            }}
            rightIcon={<Icon name="heart" size={30} color="#FFC107" />}
            rightIconHandler={() => {
              console.warn('Right Icon Pressed');
            }}
            leftText="launch the rocket"
            leftTextHandler={() => {
              console.warn('Text Pressed');
            }}
            large
            style={{ backgroundColor: '#BA68C8' }}
          />

          <FlatHeader
            leftIcon={<Icon name="rocket" size={30} color="#FFF" />}
            leftIconHandler={() => {
              console.warn('Left Icon Pressed');
            }}
            leftText="launch the rocket"
            leftTextHandler={() => {
              console.warn('Left Text Pressed');
            }}
            rightIcon={<Icon name="heart" size={30} color="#FFC107" />}
            rightIconHandler={() => {
              console.warn('Right Text Pressed');
            }}
            rightText="Heart"
            rightTextHandler={() => {
              console.warn('Right Icon Pressed');
            }}
            style={{ backgroundColor: '#00BCD4' }}
          />

          <FlatHeader
            leftIcon={<Icon name="rocket" size={30} color="#FFF" />}
            leftText="Left content"
            leftContentHandler={() => {
              console.warn('Left Content Pressed');
            }}
            rightIcon={<Icon name="heart" size={30} color="#FFC107" />}
            rightText="Right content"
            rightContentHandler={() => {
              console.warn('Right Content Pressed');
            }}
            style={{ backgroundColor: '#C2185B' }}
          />

          <FlatHeader
            leftText="launch the rocket"
            leftTextHandler={() => {
              console.warn('Text Pressed');
            }}
            style={{ backgroundColor: '#81C784' }}
          />

          <FlatHeader
            rightText="launch the rocket"
            rightTextHandler={() => {
              console.warn('Right text Pressed');
            }}
            style={{ backgroundColor: '#558B2F' }}
          />

          <FlatHeader
            leftIcon={<Icon name="rocket" size={30} color="#FFF" />}
            leftIconHandler={() => {
              console.warn('Icon Pressed');
            }}
            style={{ backgroundColor: '#e57373' }}
          />

          <FlatHeader
            rightIcon={<Icon name="rocket" size={30} color="#FFF" />}
            style={{ backgroundColor: '#D84315' }}
          />

          <FlatHeader
            leftIcon={<Icon name="rocket" size={30} color="#FFF" />}
            leftIconHandler={() => {
              console.warn('Icon Pressed');
            }}
            leftText="launch the rocket"
            leftTextHandler={() => {
              console.warn('Text Pressed');
            }}
            large
            style={{ backgroundColor: '#7986CB' }}
          >
            <Text style={{ marginLeft: 10, color: 'yellow' }}>
              Extra content
            </Text>
          </FlatHeader>

          <FlatHeader
            centerContent={<Text style={{ color: '#FFF' }}>Report</Text>}
            style={{ backgroundColor: '#ff1744' }}
          />

          <FlatHeader
            leftIcon={<Icon name="rocket" size={30} color="#FFF" />}
            centerContent={<Text style={{ color: '#FFF' }}>FAQ</Text>}
            rightIcon={<Icon name="heart" size={30} color="#FFC107" />}
            style={{ backgroundColor: '#29B6F6' }}
          />

          <FlatHeader
            leftIcon={<Icon name="arrow-left" size={30} color="#FFF" />}
            leftText="back"
            leftContentHandler={() => {
              console.warn('Left both icon and text pressed');
            }}
            centerContent={
              <Group>
                <Icon name="comment" size={30} color="#FFF" />
                <Text style={{ color: '#FFF', paddingHorizontal: 5 }}>FAQ</Text>
              </Group>
            }
            rightIcon={<Icon name="star" size={30} color="#FFF" />}
            style={{ backgroundColor: '#1A237E' }}
          />

          <FlatHeader
            leftIcon={<Icon name="arrow-left" size={30} color="#FFF" />}
            leftText="back"
            leftTextStyle={{ color: 'yellow' }}
            leftContentHandler={() => {
              console.warn('Left both icon and text pressed-Left Content');
            }}
            centerContent={
              <Group>
                <Icon name="comment" size={30} color="#FFF" />
                <Text style={{ color: '#FFF', paddingHorizontal: 5 }}>FAQ</Text>
              </Group>
            }
            centerContentHandler={() => console.warn('center content pressed')}
            rightIcon={<Icon name="star" size={30} color="#FFF" />}
            rightText="Favorite"
            rightTextStyle={{ color: 'yellow' }}
            rightContentHandler={() => {
              console.warn('right both icon and text pressed-Right Content');
            }}
            style={{ backgroundColor: '#6200EA' }}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});
