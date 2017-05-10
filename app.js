'use strict';

import React, {Component} from 'react';
import {
  Container,
  Content,
  Header,
  Left,
  Body,
  Title,
  Right,
  List,
  ListItem,
  Text
} from 'native-base';
import DeviceInfo from 'react-native-device-info';
export default class App extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left></Left>
          <Body><Title>DeviceInfo</Title></Body>
          <Right></Right>
        </Header>
        <Content>
          <List>
            <ListItem>
              <Text>getUniqueID:{DeviceInfo.getUniqueID()}</Text>
            </ListItem>
            <ListItem>
              <Text>getManufacturer:{DeviceInfo.getManufacturer()}</Text>
            </ListItem>
            <ListItem>
              <Text>getBrand:{DeviceInfo.getBrand()}</Text>
            </ListItem>
            <ListItem>
              <Text>getDeviceId:{DeviceInfo.getDeviceId()}</Text>
            </ListItem>
            <ListItem>
              <Text>getSystemName:{DeviceInfo.getSystemName()}</Text>
            </ListItem>
            <ListItem>
              <Text>getSystemVersion:{DeviceInfo.getSystemVersion()}</Text>
            </ListItem>
            <ListItem>
              <Text>getBundleId:{DeviceInfo.getBundleId()}</Text>
            </ListItem>
            <ListItem>
              <Text>getBuildNumber:{DeviceInfo.getBuildNumber()}</Text>
            </ListItem>
            <ListItem>
              <Text>getVersion:{DeviceInfo.getVersion()}</Text>
            </ListItem>
            <ListItem>
              <Text>getReadableVersion:{DeviceInfo.getReadableVersion()}</Text>
            </ListItem>
            <ListItem>
              <Text>getDeviceName:{DeviceInfo.getDeviceName()}</Text>
            </ListItem>
            <ListItem>
              <Text>getDeviceName:{DeviceInfo.getDeviceName()}</Text>
            </ListItem>
            <ListItem>
              <Text>getUserAgent:{DeviceInfo.getUserAgent()}</Text>
            </ListItem>
            <ListItem>
              <Text>getDeviceLocale:{DeviceInfo.getDeviceLocale()}</Text>
            </ListItem>
            <ListItem>
              <Text>getDeviceCountry:{DeviceInfo.getDeviceCountry()}</Text>
            </ListItem>
            <ListItem>
              <Text>getTimezone:{DeviceInfo.getTimezone()}</Text>
            </ListItem>
            <ListItem>
              <Text>getInstanceID:{DeviceInfo.getInstanceID()}</Text>
            </ListItem>
            <ListItem>
              <Text>isEmulator:{DeviceInfo.isEmulator()}</Text>
            </ListItem>
            <ListItem>
              <Text>isTablet:{DeviceInfo.isTablet()}</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
