import React, { ReactNode, Key } from 'react';
import { StyleSheet, View } from 'react-native';

import Text from '../core-ui/Text';
import {VerticalSpacer2 } from '../core-ui/Spacer';
import { k8 } from '../constants/dimens';
import { GRAY4 } from '../constants/color';

type Props = {
  key: Key,
  date: ReactNode;
  content: ReactNode;
};

export default function InboxCard(prop: Props) {
  let { date, content } = prop;

  return (
    <View style={styles.view}>
        <Text type="body">{date}</Text>
        <Text type="display1">{content}</Text>
        <View style={styles.line}></View>
    </View>
  );
}

const styles = StyleSheet.create({
    view:{
        padding: k8,
    },
    spacer:{
        flex:1,
        height: k8/2,
        color: GRAY4
    },
    line: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        opacity: 0.4,
    },
});