import React, { useState } from 'react';
import { Text, View, TextInput, Button, Alert } from 'react-native';
import { useNavigation } from 'expo-router';

const CreateHabit = () => {
    const [habitName, setHabitName] = useState('');
  const [description, setDescription] = useState('');
  const [frequency, setFrequency] = useState('');
  const navigation = useNavigation();

  const handleCreateHabit = () => {
    if (habitName === '' || frequency === '') {
      Alert.alert('Error', 'Por favor completa todos los campos obligatorios');
      return;
    }

    Alert.alert('Éxito', 'Hábito creado exitosamente');
    navigation.goBack();
  };

  return (
    <View className='flex-1 p-4 justify-center bg-background'>
      <Text className='text-2xl font-bold mb-4 text-center'>Crear Nuevo Hábito</Text>

      <TextInput
        className='border p-2 mb-4 rounded-lg border-gray-300'
        placeholder="Nombre del Hábito"
        value={habitName}
        onChangeText={setHabitName}
      />

      <TextInput
        className='border p-2 mb-4 rounded-lg border-gray-300'
        placeholder="Descripción"
        value={description}
        onChangeText={setDescription}
      />

      <TextInput
       className='border p-2 mb-4 rounded-lg border-gray-300'
        placeholder="Frecuencia (ej. Diario, Semanal)"
        value={frequency}
        onChangeText={setFrequency}
      />

      <Button title="Crear Hábito" onPress={handleCreateHabit} />
    </View>
    );
};

export default CreateHabit;