import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Dimensions
} from 'react-native';
import rgba from 'hex-to-rgba';
import Icon from 'react-native-vector-icons/FontAwesome';
import { CircularProgress } from 'react-native-circular-progress';

import { Block, Badge, Card, Text, Progress } from '../components';
import { theme, mocks } from '../constants';

const { width } = Dimensions.get('window');
export default class Trip extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <Text style={theme.fonts.header}>Current Trip</Text>,
      headerLeft: null,
      headerRight: (
        <TouchableOpacity>
          <Text medium primary transform="uppercase">
            show map
          </Text>
        </TouchableOpacity>
      )
    };
  };

  renderChart() {
    return (
      <Card
        shadow
        style={{ elevation: 1, paddingVertical: theme.sizes.base * 2 }}
      >
        <Block center>
          <CircularProgress
            size={214} // can use with *.5 => 50%
            fill={85} // percentage
            lineCap="round" // line ending style
            rotation={220}
            arcSweepAngle={280}
            width={theme.sizes.base}
            tintColor={theme.colors.primary} // gradient is not supported
            backgroundColor={theme.colors.gray3}
            backgroundWidth={theme.sizes.base / 3}
          >
            {() => (
              <Block center middle>
                <Text h2 medium>
                  7.2
                </Text>
                <Text h3 transform="uppercase">
                  Fair
                </Text>
              </Block>
            )}
          </CircularProgress>
        </Block>

        <Block center>
          <Text title spacing={1} style={{ marginVertical: 8 }}>
            Current Score
          </Text>
          <Text>
            <Text primary>+$4 </Text>
            <Text gray transform="uppercase">
              challenge bonus
            </Text>
          </Text>
        </Block>
      </Card>
    );
  }

  // renderDriveStatus = item => {
  //   return (

  //   )
  // }

  renderDriving() {
    return (
      <Block>
        <Block
          style={{
            marginTop: theme.sizes.base,
            marginBottom: theme.sizes.base,
            paddingHorizontal: theme.sizes.base / 3
          }}
        >
          <Text spacing={0.7} transform="uppercase">
            diriving data
          </Text>
        </Block>
        <FlatList
          horizontal
          pagingEnabled
          scrollEnabled
          showsHorizontalScrollIndicator={false}
          decelerationRate={0}
          scrollEventThrottle={16}
          data={[]}
          keyExtractor={(item, index) => `${item.id}`}
          renderItem={({ item }) => this.renderDriveStatus(item)}
        />
        <Block row space>
          <Block center>
             
            <Text h3 gray medium>
              55
            </Text>
             
            <Text h3 gray medium>
              mph
            </Text>
          </Block>
          <Block center>
             
            <Text h3 gray medium>
              978.7
            </Text>
             
            <Text h3 gray medium>
              mi
            </Text>
          </Block>
        </Block>
      </Block>
    );
  }

  renderTripButton() {
    const { navigation } = this.props;
    return (
      <Block center middle style={styles.endTrip}>
        <Badge color={rgba(theme.colors.accent, '0.1')} size={144}>
          <TouchableOpacity activeOpacity={0.8}>
            <Badge color={theme.colors.accent} size={62}>
              <Icon name="square" size={62 / 2.5} color="white" />
            </Badge>
          </TouchableOpacity>
        </Badge>
      </Block>
    );
  }

  render() {
    return (
      <React.Fragment>
        <ScrollView
          contentContainerStyle={styles.trip}
          showsVerticalScrollIndicator={false}
        >
          {this.renderChart()}
          {/* {this.renderDriving()} */}
        </ScrollView>
        {this.renderTripButton()}
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  trip: {
    padding: theme.sizes.padding,
    backgroundColor: theme.colors.gray4
  },
  endTrip: {
    position: 'absolute',
    left: (width - 144) / 2,
    bottom: 0
  }
});
