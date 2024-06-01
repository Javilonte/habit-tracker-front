import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const CreateHabit = () => {
    const [habitName, setHabitName] = useState('');

    const handleCreateHabit = () => {
        // Lógica para crear el hábito
        console.log('Habit created:', habitName);
    };

    return (
        <View className="flex-1 justify-center p-4">
            <TextInput
                className="h-10 border border-gray-400 mb-3 px-2"
                placeholder="Enter habit name"
                value={habitName}
                onChangeText={setHabitName}
            />
            <Button title="Create Habit" onPress={handleCreateHabit} />
        </View>
    );
};

export default CreateHabit;