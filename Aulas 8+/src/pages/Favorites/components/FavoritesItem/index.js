import React from 'react';
import {
  View, Text, Image,
} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const FavoritesItem = ({ favorites: { name, owner, description } }) => (
  <View style={styles.container}>
    <Image style={styles.avatar} source={{ uri: owner.avatar_url }} />
    <View style={styles.info}>
      <Text style={styles.title}>{name}</Text>
      <Text numberOfLines={2} style={styles.subtitle}>{description}</Text>
    </View>
  </View>
);

FavoritesItem.propTypes = {
  favorites: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    owner: PropTypes.shape({
      avatar_url: PropTypes.string,
    }),
  }).isRequired,
};

export default FavoritesItem;
