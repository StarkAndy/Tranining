import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

const {width} = Dimensions.get('window');
const ratio = 220 / 180;
export const CARD_WIDTH = width * 0.42;
export const CARD_HEIGHT = CARD_WIDTH * ratio;

const styles = StyleSheet.create({
  card: {
    width: 156,
    height: 180,
    borderRadius: 6,
    elevation: 3,
    backgroundColor: '#292946',
    shadowOffset: {width: 3, height: 3},
    color: '#fff',
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
  },
});

export default function Cards(props) {
  return (
    <TouchableOpacity style={{...styles.card, ...props.style}}>
      {props.children}
    </TouchableOpacity>
  );
}
