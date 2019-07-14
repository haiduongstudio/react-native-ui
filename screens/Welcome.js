import React, { Component } from 'react';
import { StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

import { Block, Text, Badge, Card } from '../components';
import { theme, mocks } from '../constants';

export default class Welcome extends Component {
  static navigationOptions = {
    headerTitle: <Text style={theme.fonts.header}>Welcome</Text>,
    headerRight: (
      <TouchableOpacity>
        <Block flex={false}>
          <Image
            resizeMode="contain"
            source={require('../assets/images/Icon/Menu.png')}
            style={{ width: 20, height: 24 }}
          />
          <Badge
            size={13}
            color={theme.colors.accent}
            style={{ position: 'absolute', top: -4, right: -4 }}
          />
        </Block>
      </TouchableOpacity>
    )
  };

  renderMonthly() {
    const { navigation } = this.props;

    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('Rewards')}
      >
        <Card shadow style={{ paddingVertical: theme.sizes.padding, elevation: 1 }}>
          <Image
            resizeMode="contain"
            source={require('../assets/images/Icon/More.png')}
            style={styles.moreIcon}
          />
          <Block>
            <Block center>
              <Text h1 primary spacing={1.7}>
                $11.71
              </Text>
              <Text spacing={0.7}>Total Monthly Rewards</Text>
            </Block>

            <Block color={theme.colors.gray3} style={styles.hLine} />

            <Block row>
              <Block center>
                <Text
                  size={20}
                  spacing={0.6}
                  primary
                  style={{ marginBottom: 6 }}
                >
                  8.1
                </Text>
                <Text body spacing={0.7}>
                  Driving
                </Text>
                <Text body spacing={0.7}>
                  Score
                </Text>
              </Block>

              <Block
                flex={false}
                color={theme.colors.gray3}
                style={styles.vLine}
              />

              <Block center>
                <Text
                  size={20}
                  spacing={0.6}
                  primary
                  style={{ marginBottom: 6 }}
                >
                  837
                </Text>
                <Text body spacing={0.7}>
                  Driver's
                </Text>
                <Text body spacing={0.7}>
                  Level
                </Text>
              </Block>
            </Block>
          </Block>
        </Card>
      </TouchableOpacity>
    );
  }

  renderAwards() {
    return (
      <Card>
        <Text>Awards</Text>
      </Card>
    )
  }

  render() {
    return (
      <ScrollView style={styles.welcome}>
        {this.renderMonthly()}
        {this.renderAwards()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  welcome: {
    paddingVertical: theme.sizes.padding,
    paddingHorizontal: theme.sizes.padding,
    backgroundColor: theme.colors.gray4
  },
  // horizontal line
  hLine: {
    marginVertical: theme.sizes.base * 2,
    marginHorizontal: theme.sizes.base * 2,
    height: 1
  },
  // vertical line
  vLine: {
    marginVertical: theme.sizes.base / 2,
    width: 1
  },
  moreIcon: {
    width: theme.sizes.base,
    height: theme.sizes.base,
    position: 'absolute',
    right: theme.sizes.base,
    top: theme.sizes.base
  }
});
