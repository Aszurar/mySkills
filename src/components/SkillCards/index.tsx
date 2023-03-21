import React from 'react';
import { FlatList, RefreshControl, StyleSheet, Text, View } from 'react-native';
import { SkillCard } from '../SkillCard';
import { ITEM_HEIGHT, SkillItemProps } from '../../dto/skillDTO';
import theme from '../../theme';


interface MySkillsProps {
  mySkillsValues: SkillItemProps[];
  RemoveSkill: (id: string) => void;
  isLoading: boolean;
  onRefresh: () => Promise<void>;
}

const keyExtractor = (item: SkillItemProps) => item.id;
const ItemSeparator = () => <View style={{ height: 16 }} />;
const ListEmptyComponent = () => <View>
  <Text style={styles.emptyListText}>Nenhuma habilidade cadastrada</Text>
</View>;
const getItemLayout = (_: SkillItemProps[] | null | undefined, index: number) => ({
  length: ITEM_HEIGHT,
  offset: ITEM_HEIGHT * index,
  index
})

export function SkillCards({
  isLoading,
  onRefresh,
  RemoveSkill,
  mySkillsValues,
}: MySkillsProps) {
  const SkillCardItemList = ({ item }: { item: SkillItemProps }) => (
    <SkillCard item={item} RemoveSkill={RemoveSkill} />
  );

  return (
    <FlatList
      data={mySkillsValues}
      keyExtractor={keyExtractor}
      getItemLayout={getItemLayout}
      renderItem={SkillCardItemList}
      ItemSeparatorComponent={ItemSeparator}
      ListEmptyComponent={ListEmptyComponent}
      contentContainerStyle={styles.contentContainerStyle}
      refreshControl={
        <RefreshControl
          colors={[theme.COLORS.HIGHLIGHT]}
          refreshing={isLoading}
          onRefresh={onRefresh}
        />
      }
    />
  )
}


const styles = StyleSheet.create({
  emptyListText: {
    color: theme.COLORS.TEXT_PRIMARY,
    fontSize: 16,
    textAlign: 'center',
    flex: 1,
  },
  contentContainerStyle: {
    paddingBottom: 10,
  }

})