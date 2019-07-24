import React, { Component } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';

import { Card, Text, Block, Progress } from '../components';
import { theme } from '../constants';

export default class Rewards extends Component {
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
        </Block>
      </TouchableOpacity>
    )
  };

  renderMonthly() {
    return (
      <Card
        shadow
        style={[{ paddingVertical: theme.sizes.padding }, { elevation: 1 }]}
      >
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
              <Text size={20} spacing={0.6} primary style={{ marginBottom: 6 }}>
                $5
              </Text>
              <Text body spacing={0.7}>
                Challenge
              </Text>
              <Text body spacing={0.7}>
                Credit
              </Text>
            </Block>

            <Block
              flex={false}
              color={theme.colors.gray3}
              style={styles.vLine}
            />

            <Block center>
              <Text size={20} spacing={0.6} primary style={{ marginBottom: 6 }}>
                $6.71
              </Text>
              <Text body spacing={0.7}>
                Driver
              </Text>
              <Text body spacing={0.7}>
                Discount
              </Text>
            </Block>
          </Block>
        </Block>
      </Card>
    );
  }

  renderRewards() {
    return (
      <Card shadow style={{ elevation: 1 }}>
        <Block>
          <Text>Chart</Text>
        </Block>

        <Block color={theme.colors.gray3} style={styles.hLine} />

        <Block row>
          <Block center flex={0.8}>
            <Text size={20} spacing={1} primary>
              79
            </Text>
            <Text spacing={0.7}>Trips</Text>
          </Block>
          <Block center flex={1}>
            <Text size={20} spacing={1} primary>
              123
            </Text>
            <Text spacing={0.7}>Hours</Text>
          </Block>
          <Block center flex={0.8}>
            <Text size={20} spacing={1} primary>
              2,867
            </Text>
            <Text spacing={0.7}>Miles</Text>
          </Block>
        </Block>

        <Block color={theme.colors.gray3} style={styles.hLine} />

        <Block style={{ marginBottom: theme.sizes.base }}>
          <Block row space="between">
            <Text spacing={0.7}>Breaking</Text>
            <Text caption>8.1</Text>
          </Block>
          <Progress value={0.81} />
        </Block>

        <Block style={{ marginBottom: theme.sizes.base }}>
          <Block row space="between">
            <Text spacing={0.7}>Speeding</Text>
            <Text caption>9.8</Text>
          </Block>
          <Progress value={0.98} />
        </Block>

        <Block style={{ marginBottom: theme.sizes.base }}>
          <Block row space="between">
            <Text spacing={0.7}>Distracted Driving</Text>
            <Text caption>7.4</Text>
          </Block>
          <Progress endColor="#D37694" value={0.74} />
        </Block>

        <Block color={theme.colors.gray3} style={styles.hLine} />

        <Block row center space="between">
          <Text>Total Driver Discount</Text>
          <Text>$6.71</Text>
        </Block>
      </Card>
    );
  }

  render() {
    return (
      <ScrollView style={styles.rewards} showsVerticalScrollIndicator={false}>
        {this.renderMonthly()}
        {this.renderRewards()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  rewards: {
    paddingVertical: theme.sizes.padding,
    paddingHorizontal: theme.sizes.padding,
    backgroundColor: theme.colors.gray4
  },
  // horizontal line
  hLine: {
    marginVertical: theme.sizes.base,
    // marginHorizontal: theme.sizes.base,
    height: 1
  },
  // vertical line
  vLine: {
    marginVertical: theme.sizes.base / 2,
    width: 1
  }
});
