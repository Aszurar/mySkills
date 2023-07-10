import React, { useCallback } from 'react';

import { FlatList, RefreshControl, StyleSheet, Text, View } from 'react-native';

import { ITEM_HEIGHT, SkillItemProps } from '../dto/skill';

import { SkillCard } from '../SkillCard';
import theme from '../../theme';

interface MySkillsProps {
  mySkillsValues: SkillItemProps[];
  RemoveSkill: (id: string) => void;
  isLoading: boolean;
  onRefresh: () => Promise<void>;
}

const keyExtractor = (item: SkillItemProps) => item.id;
const ItemSeparator = () => <View style={styles.itemSeparator} />;
const ListEmptyComponent = () => (
  <View>
    <Text style={styles.emptyListText}>Nenhuma habilidade cadastrada</Text>
  </View>
);
const getItemLayout = (
  _: ArrayLike<SkillItemProps> | null | undefined,
  index: number,
) => ({
  length: ITEM_HEIGHT + 16,
  offset: ITEM_HEIGHT * index,
  index,
});

export function SkillCards({
  isLoading,
  onRefresh,
  RemoveSkill,
  mySkillsValues,
}: MySkillsProps) {
  const renderItem = useCallback(
    ({ item }: { item: SkillItemProps }) => (
      <SkillCard item={item} RemoveSkill={RemoveSkill} />
    ),

    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );
  return (
    <View onStartShouldSetResponder={() => true} style={styles.container}>
      <FlatList
        data={mySkillsValues}
        showsVerticalScrollIndicator={false}
        keyExtractor={keyExtractor}
        getItemLayout={getItemLayout}
        renderItem={renderItem}
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  emptyListText: {
    color: theme.COLORS.TEXT_PRIMARY,
    fontSize: 16,
    textAlign: 'center',
    flex: 1,
  },
  contentContainerStyle: {
    paddingBottom: 10,
  },
  itemSeparator: {
    height: 16,
  },
});
