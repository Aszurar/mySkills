import AsyncStorage from '@react-native-async-storage/async-storage';

import { MY_SKILLS_COLLECTION } from '../storageConfig';
import { getAllSkills } from './getAllSkills';

import { SkillItemProps } from '../../dto/skillDTO';
import { AppError } from '../../errors';


export async function saveSkill({ id, name }: SkillItemProps) {
  try {
    const newSkill = {
      id,
      name,
    };

    const skillsStoraged = await getAllSkills();

    const isAlreadySaved = skillsStoraged.some(skill => skill.name === name);
    if (isAlreadySaved) {
      throw new AppError("Cadastrar Skill", 'Skill já cadastrada.');
    }

    const storageFormatted = JSON.stringify([...skillsStoraged, newSkill]);

    await AsyncStorage.setItem(MY_SKILLS_COLLECTION, storageFormatted);
  } catch (error) {
    throw error;
  }
}