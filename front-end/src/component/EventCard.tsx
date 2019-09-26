import React, { Key } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

import Text from '../core-ui/Text';
import Image from '../core-ui/Image';
import { k8, k16 } from '../constants/dimens';
import { VerticalSpacer1, VerticalSpacer2 } from '../core-ui/Spacer';

type Props = {
  key: Key;
  imageURL: string;
  eventTitle: string;
  title: string;
  date: string;
  price: string;
  onClick?: ()=>void
};

export default function EventCard(prop: Props) {
  let { imageURL, eventTitle, title, date, price, onClick } = prop;
  const styles = StyleSheet.create({
    view:{
      paddingLeft: k8,
      paddingRight: k8,
      marginTop: k16,
      marginBottom: k16,
    },
    container:{
      marginTop: k16,
      marginBottom: k16,
    },
    imagestyle: {},
  });

  return (
    <TouchableOpacity onPress={onClick} style={styles.view}>
      <View style={styles.imagestyle}>
      <Image
        imagetype="event"
        src={imageURL}
        newImageStyle={styles.imagestyle}
      ></Image>
      <VerticalSpacer1/>
      <Text type="display2">{eventTitle}</Text>
      <VerticalSpacer2/>
      <Text type="display1">{title}</Text>
       <VerticalSpacer2/>
      <Text type="display1">{date}</Text>
      <VerticalSpacer2/>
      <Text color="yellow">{price}</Text>
    </View>
    </TouchableOpacity>
  );
}
