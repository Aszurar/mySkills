import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableOpacityProps
} from 'react-native';
import theme from '../../theme';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  isDelete?: boolean;
}

const deleteButtonBackgroundColor = {
  backgroundColor: theme.COLORS.DELETE,
}
const addButtonBackgroundColor = {
  backgroundColor: theme.COLORS.HIGHLIGHT,
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
    padding: 16,
    borderRadius: 6,
    marginVertical: 12,
  },

  AddSkillButtonText: {
    color: theme.COLORS.TEXT_PRIMARY,
    fontWeight: 'bold',
    fontSize: 16,
  },
})