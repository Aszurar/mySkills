import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Platform,
    TouchableWithoutFeedback,
    Keyboard,
    Alert
} from 'react-native';

import { AppError } from '../../errors';

import { Button } from '../components/Button/Button';
import { SkillCards } from '../components/SkillCards';

import { saveSkill } from '../storage/skills/saveSkill';
import { deleteSkill } from '../storage/skills/deleteSkill';
import { getAllSkills } from '../storage/skills/getAllSkills';
import { deleteAllSkills } from '../storage/skills/deleteAllSkills';
import { SkillItemProps } from '../dto/skillDTO';


export function Home() {
    const [newSkill, setNewSkill] = useState('');
    const [mySkills, setMySkills] = useState<SkillItemProps[]>([]);
    const [greeting, setGreeting] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    function handleNewSkill(data: string) {
        setNewSkill(data)
    }


    const handleGetAllSkills = async () => {
        try {
            setIsLoading(true);
            const skillsStoraged = await getAllSkills();
            setMySkills(skillsStoraged)
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            Alert.alert('Não foi possível carregar os participantes');
        }
    }

    const handleSaveSkill = async () => {
        try {
            if (!newSkill || newSkill.trim() === '') return;

            const newData: SkillItemProps = {
                id: String(new Date().getTime()),
                name: newSkill,
            }

            await saveSkill(newData);
            handleGetAllSkills();
        } catch (error) {
            if (error instanceof AppError) {
                Alert.alert(error.message);
            } else {
                Alert.alert('Não foi possível salvar a skill', 'Tente novamente mais tarde');
            }

        }
    }

    const handleDeleteSkill = async (skillId: string) => {
        try {
            await deleteSkill(skillId);
            handleGetAllSkills();
        } catch (error) {
            Alert.alert('Não foi possível deletar a skill', 'Tente novamente mais tarde');
            return;
        }
    }

    const handleDeleteAllSkills = async () => {
        try {
            await deleteAllSkills();
            handleGetAllSkills();
        } catch (error) {
            Alert.alert('Não foi possível deletar as skills', 'Tente novamente mais tarde');
        }
    }

    useEffect(() => {
        let currentHour = new Date().getHours();

        if (currentHour < 12) {
            setGreeting('Bom dia 🌞')
        } else if (currentHour >= 12 && currentHour < 18) {
            setGreeting('Boa tarde ☀')
        } else {
            setGreeting('Boa noite 🌙')
        }
        handleGetAllSkills();
    }, [])


    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <Text style={styles.title}>Bem vindo!</Text>
                <Text style={styles.greetingText}>{greeting}</Text>

                <TextInput
                    style={styles.textInput}
                    placeholder="Nova Skill"
                    placeholderTextColor="#555"
                    onChangeText={data => handleNewSkill(data)}
                    onSubmitEditing={handleSaveSkill}
                />

                <Button title="Adicionar" onPress={handleSaveSkill} />
                <Text style={[styles.subtitle, styles.title]}>My Skills</Text>


                <SkillCards
                    mySkillsValues={mySkills}
                    RemoveSkill={handleDeleteSkill}
                />
                <Button
                    isDelete
                    title="Deletear todas skills"
                    onPress={handleDeleteAllSkills}
                />
            </View>
        </TouchableWithoutFeedback>

    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121015',
        paddingTop: 24,
        paddingHorizontal: 30,
    },

    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    },
    subtitle: {
        marginVertical: 24
    },

    textInput: {
        fontSize: 18,
        backgroundColor: '#1f1e25',
        padding: Platform.OS === 'ios' ? 15 : 10,
        borderRadius: 7,
        marginTop: 30,
        color: '#fff',
    },
    greetingText: {
        color: '#fff',

    }
})