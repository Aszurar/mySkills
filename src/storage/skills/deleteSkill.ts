import AsyncStorage from '@react-native-async-storage/async-storage';

import { MY_SKILLS_COLLECTION } from '../storageConfig';
import { getAllSkills } from './getAllSkills';

export async function deleteSkill(skillId: string) {
  try {
    const skillsStoraged = await getAllSkills();

    const skillsFiltered = skillsStoraged.filter(skill => skill.id !== skillId);

    const skillsFilteredFormatted = JSON.stringify(skillsFiltered);

    await AsyncStorage.setItem(MY_SKILLS_COLLECTION, skillsFilteredFormatted);
  } catch (error) {
    throw error;
  }
}
