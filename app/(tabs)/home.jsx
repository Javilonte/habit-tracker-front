import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Home = () => {
    return (
        <View className="flex-1 justify-center items-center  bg-background">
            <View className="flex justify-between items-start flex-row mb-6">
            <Text>Welcome to Habit Tracker</Text>
            </View>
            
            {/* Agrega componentes adicionales para mostrar estadísticas generales, resúmenes, etc. */}
        </View>
    );
};



export default Home;