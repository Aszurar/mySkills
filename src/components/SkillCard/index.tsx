import React from 'react';

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps
} from 'react-native';

import { ITEM_HEIGHT, SkillItemProps } from '../../dto/skillDTO';



interface MySkillsPropsValues extends TouchableOpacityProps {
  item: SkillItemProps;
  RemoveSkill: (id: string) => void;
}

export function SkillCard({ item, RemoveSkill, ...rest }: MySkillsPropsValues) {
  return (
    <TouchableOpacity
      style={styles.skillCard}
      onPress={() => RemoveSkill(item.id)}
      {...rest}
    >
      <Text style={styles.skillTitle}>{item.name}</Text>
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
  skillCard: {
    alignItems: 'center',
    backgroundColor: '#1f1e25',
    height: ITEM_HEIGHT,
    justifyContent: 'center',
    borderRadius: 50,
  },

  skillTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  }
})