import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

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
    <View style={tailwind('flex-1 p-4')}>
      <Text style={tailwind('text-2xl font-bold mb-4')}>Crear Nuevo Hábito</Text>

      <TextInput
        style={tailwind('border p-2 mb-4')}
        placeholder="Nombre del Hábito"
        value={habitName}
        onChangeText={setHabitName}
      />

      <TextInput
        style={tailwind('border p-2 mb-4')}
        placeholder="Descripción"
        value={description}
        onChangeText={setDescription}
      />

      <TextInput
        style={tailwind('border p-2 mb-4')}
        placeholder="Frecuencia (ej. Diario, Semanal)"
        value={frequency}
        onChangeText={setFrequency}
      />

      <Button title="Crear Hábito" onPress={handleCreateHabit} />
    </View>
    );
};

export default CreateHabit;