import AsyncStorage from '@react-native-async-storage/async-storage';

import { MY_SKILLS_COLLECTION } from '../storageConfig';

export async function deleteAllSkills() {
  try {
    await AsyncStorage.removeItem(MY_SKILLS_COLLECTION);
  } catch (error) {
    throw error;
  }
}