import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableOpacityProps
} from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  isDelete?: boolean;
}

const deleteButtonBackgroundColor = {
  backgroundColor: '#E83F5B',
}
const addButtonBackgroundColor = {
  backgroundColor: '#A370F7',
}

export function Button({ title, isDelete = false, ...rest }: ButtonProps) {
  const backgroundColor = isDelete ? deleteButtonBackgroundColor : addButtonBackgroundColor;
  return (
    <TouchableOpacity
      style={[styles.AddSkillButton, backgroundColor]}
      activeOpacity={0.7}
      {...rest}
    >
      <Text style={styles.AddSkillButtonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  AddSkillButton: {
    alignItems: 'center',
    padding: 15,
    borderRadius: 7,
    marginVertical: 12,
  },

  AddSkillButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 17,
  },
})