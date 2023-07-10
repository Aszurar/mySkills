import AsyncStorage from '@react-native-async-storage/async-storage';

import { MY_SKILLS_COLLECTION } from '../storageConfig';

export async function deleteAllSkills() {
  await AsyncStorage.removeItem(MY_SKILLS_COLLECTION);
}
