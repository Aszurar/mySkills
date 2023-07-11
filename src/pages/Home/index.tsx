import React, { useEffect, useState } from 'react';

import {
  Alert,
  Keyboard,
  Modal,
  // Modal,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import { WarningModal, WarningModalProps } from '../../components/WarningModal';
import { SkillCards } from '../../components/SkillCards';
import { SkillItemProps, TRY_AGAIN_MESSAGE } from '../../components/dto/skill';
import { Button } from '../../components/Button';

import theme from '../../theme';
import { saveSkill } from '../../storage/skills/saveSkill';
import { getAllSkills } from '../../storage/skills/getAllSkills';
import { deleteSkill } from '../../storage/skills/deleteSkill';
import { deleteAllSkills } from '../../storage/skills/deleteAllSkills';
import { AppError } from '../../errors';

type handleOpenModalProps = Omit<WarningModalProps, 'onCloseModal'>;

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [greeting, setGreeting] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [mySkills, setMySkills] = useState<SkillItemProps[]>([]);

  const [titleModal, setTitleModal] = useState('');
  const [subtitleModal, setSubtitleModal] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [footerWithConfirmButton, setFooterWithConfirmButton] = useState(false);

  const skillsQuantity = mySkills.length;

  function handleOpenModal({ title, subtitle }: handleOpenModalProps) {
    setIsModalVisible(true);
    setTitleModal(title);
    if (subtitle) {
      setSubtitleModal(subtitle);
    }
    if (footerWithConfirmButton) {
      setFooterWithConfirmButton(footerWithConfirmButton);
    }
  }

  function handleCloseModal() {
    setIsModalVisible(false);
    setTitleModal('');
    setSubtitleModal('');
    setFooterWithConfirmButton(false);
  }

  function handleNewSkill(data: string) {
    setNewSkill(data);
  }

  const handleGetAllSkills = async () => {
    try {
      setIsLoading(true);
      const skillsStoraged = await getAllSkills();
      setMySkills(skillsStoraged);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      handleOpenModal({
        title: 'Não foi possível carregar os participantes',
        subtitle: TRY_AGAIN_MESSAGE,
      });
    }
  };

  const handleSaveSkill = async () => {
    try {
      if (!newSkill || newSkill.trim() === '') {
        return;
      }

      const newData: SkillItemProps = {
        id: String(new Date().getTime()),
        name: newSkill,
      };

      await saveSkill(newData);
      setNewSkill('');
      handleGetAllSkills();
      Keyboard.dismiss();
    } catch (error) {
      if (error instanceof AppError) {
        const { message } = error;
        handleOpenModal({
          title: message,
          subtitle: error.secondMessage,
        });
      } else {
        handleOpenModal({
          title: 'Não foi possível salvar a skill',
          subtitle: TRY_AGAIN_MESSAGE,
        });
      }
    }
  };

  const handleDeleteSkill = async (skillId: string) => {
    try {
      await deleteSkill(skillId);
      handleGetAllSkills();
    } catch (error) {
      handleOpenModal({
        title: 'Não foi possível deletar a skill',
        subtitle: TRY_AGAIN_MESSAGE,
      });
    }
  };

  function handleOpenDeleteSkillAlert(skillId: string) {
    Alert.alert('Deletar Skill', 'Tem certeza que deseja deletar essa skill?', [
      {
        text: 'Não',
        style: 'cancel',
      },
      {
        text: 'Sim',
        style: 'destructive',
        onPress: () => handleDeleteSkill(skillId),
      },
    ]);
  }

  const handleDeleteAllSkills = async () => {
    try {
      await deleteAllSkills();
      handleGetAllSkills();
    } catch (error) {
      handleOpenModal({
        title: 'Não foi possível deletar as skills',
        subtitle: TRY_AGAIN_MESSAGE,
      });
    }
  };

  function handleOpenDeleteAllSkillsAlert() {
    Alert.alert(
      'Deletar todas Skills',
      'Tem certeza que deseja deletar todas as skills?',
      [
        {
          text: 'Não',
          style: 'cancel',
        },
        {
          text: 'Sim',
          style: 'destructive',
          onPress: handleDeleteAllSkills,
        },
      ],
    );
  }

  useEffect(() => {
    let currentHour = new Date().getHours();

    if (currentHour < 12) {
      setGreeting('Bom dia 🌞');
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting('Boa tarde ☀');
    } else {
      setGreeting('Boa noite 🌙');
    }
    handleGetAllSkills();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Text style={styles.title}>Bem vindo!</Text>
          <Text style={styles.greetingText}>{greeting}</Text>

          <TextInput
            value={newSkill}
            style={styles.textInput}
            placeholder="Nova Skill"
            selectionColor={theme.COLORS.HIGHLIGHT}
            placeholderTextColor={theme.COLORS.TEXT_SECONDARY}
            onChangeText={data => handleNewSkill(data)}
            onSubmitEditing={handleSaveSkill}
          />

          <Button title="Adicionar" onPress={handleSaveSkill} />
          <View style={styles.subtitleContainer}>
            <Text style={styles.title}>My Skills</Text>
            <Text style={styles.title}>{skillsQuantity}</Text>
          </View>

          <SkillCards
            isLoading={isLoading}
            onRefresh={handleGetAllSkills}
            mySkillsValues={mySkills}
            RemoveSkill={handleOpenDeleteSkillAlert}
          />

          {skillsQuantity > 0 && (
            <Button
              isDelete
              title="Deletar todas skills"
              onPress={handleOpenDeleteAllSkillsAlert}
            />
          )}
        </View>
      </TouchableWithoutFeedback>

      <Modal transparent animationType="fade" visible={isModalVisible}>
        <WarningModal
          title={titleModal}
          subtitle={subtitleModal}
          onCloseModal={handleCloseModal}
          footerWithConfirmButton={footerWithConfirmButton}
        />
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: theme.COLORS.BACKGROUND,
  },
  container: {
    flex: 1,
    backgroundColor: theme.COLORS.BACKGROUND,
    paddingTop: 24,
    paddingHorizontal: 30,
  },

  title: {
    color: theme.COLORS.TEXT_PRIMARY,
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 24,
  },

  textInput: {
    fontSize: 16,
    backgroundColor: theme.COLORS.BACKGROUND_SECONDARY,
    padding: Platform.OS === 'ios' ? 16 : 12,
    borderRadius: 6,
    marginTop: 32,
    color: theme.COLORS.TEXT_PRIMARY,
  },
  greetingText: {
    color: theme.COLORS.TEXT_PRIMARY,
  },
});
