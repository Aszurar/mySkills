
import AsyncStorage from '@react-native-async-storage/async-storage';

import { MY_SKILLS_COLLECTION } from '../storageConfig';
import { SkillItemProps } from '../../dto/skillDTO';

export async function getAllSkills() {
  try {
    const skillsStoraged = await AsyncStorage.getItem(MY_SKILLS_COLLECTION);

    const skillsStoragedFormatted: SkillItemProps[] = skillsStoraged
      ? JSON.parse(skillsStoraged)
      : [];

    return skillsStoragedFormatted;
  } catch (error) {
    throw error;
  }
}