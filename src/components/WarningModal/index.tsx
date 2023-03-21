import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import theme from '../../theme';

export type WarningModalProps = {
  title: string;
  subtitle?: string;
  onCloseModal(): void;
  footerWithConfirmButton?: boolean;
}

export function WarningModal({
  title,
  subtitle,
  onCloseModal,
  footerWithConfirmButton = false,
}: WarningModalProps) {
  return (
    <View style={styles.modalContainer}>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>{title}</Text>
        </View>
        {
          !!subtitle && (
            <View style={styles.subtitleContainer}>
              <Text style={styles.subtitle}>{subtitle}</Text>
            </View>
          )
        }

        <View style={styles.footer}>
          {
            footerWithConfirmButton ? (
              <View style={styles.buttonsContainer}>
                <TouchableOpacity onPress={onCloseModal} style={styles.button}>
                  <Text style={[styles.buttonText, { color: theme.COLORS.DELETE }]}>não</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={onCloseModal} style={styles.button}>
                  <Text style={[styles.buttonText, { color: theme.COLORS.SUCCESS }]}>sim</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <TouchableOpacity onPress={onCloseModal} style={styles.button}>
                <Text style={[styles.buttonText, { color: theme.COLORS.TEXT_PRIMARY }]}>ok</Text>
              </TouchableOpacity>
            )
          }
        </View>
      </View>
    </View>
  );
}


export const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.COLORS.BACKGROUND_MODAL,
  },
  container: {
    width: '85%',
    height: 200,
    padding: 24,
    borderWidth: 0.5,
    borderColor: theme.COLORS.HIGHLIGHT,
    borderRadius: 4,
    backgroundColor: theme.COLORS.BACKGROUND_SECONDARY,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.COLORS.TEXT_PRIMARY,
  },
  subtitleContainer: {
    marginVertical: 16,
  },

  subtitle: {
    fontSize: 16,
    color: theme.COLORS.TEXT_PRIMARY,
  },

  footer: {
    flex: 1,
    width: '100%',
    alignSelf: 'flex-end',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },

  buttonsContainer: {
    width: '40%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    textTransform: 'uppercase',
  },
});