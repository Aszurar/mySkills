import React from 'react';

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

import { ITEM_HEIGHT, SkillItemProps } from '../dto/skill';

import theme from '../../theme';

interface MySkillsPropsValues extends TouchableOpacityProps {
  item: SkillItemProps;
  RemoveSkill: (id: string) => void;
}

export function SkillCard({ item, RemoveSkill, ...rest }: MySkillsPropsValues) {
  return (
    <TouchableOpacity
      style={styles.skillCard}
      onPress={() => RemoveSkill(item.id)}
      {...rest}>
      <Text style={styles.skillTitle}>{item.name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  skillCard: {
    alignItems: 'center',
    backgroundColor: theme.COLORS.BACKGROUND_SECONDARY,
    height: ITEM_HEIGHT,
    justifyContent: 'center',
    borderRadius: 50,
  },

  skillTitle: {
    color: theme.COLORS.TEXT_PRIMARY,
    fontWeight: 'bold',
    fontSize: 16,
  },
});
