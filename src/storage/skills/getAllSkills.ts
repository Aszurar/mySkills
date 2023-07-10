import AsyncStorage from '@react-native-async-storage/async-storage';

import { SkillItemProps } from '../../components/dto/skill';

import { MY_SKILLS_COLLECTION } from '../storageConfig';

export async function getAllSkills() {
  const skillsStoraged = await AsyncStorage.getItem(MY_SKILLS_COLLECTION);

  const skillsStoragedFormatted: SkillItemProps[] = skillsStoraged
    ? JSON.parse(skillsStoraged)
    : [];

  return skillsStoragedFormatted;
}
