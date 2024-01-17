import React from "react";
import { Text, View } from "react-native";
import { CreatureStats } from "api/Pokemon";
import { styles } from "./styles";

interface StatsChartProps {
    title: string
    pokemonId: number
    stats: CreatureStats[]
}

const MAX_STATS = 255;

const StatsChart = ({ title, pokemonId, stats }: StatsChartProps) => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            {stats.map(( stat, index ) => (
                <View style={styles.statBarContainer} key={`stat_bar_${pokemonId}_${index}`}>
                    <View 
                        style={[
                            styles.statBar, 
                            { 
                                width: `${(stat.base_stat / MAX_STATS) * 100}%`,
                            }
                        ]} 
                    />
                    <View style={styles.textContainer}>
                        <Text style={styles.textLabel}>{`${stat.stat.name}: ${stat.base_stat}`}</Text>
                    </View>
                </View>
            ))}
        </View>
    );
}

export default StatsChart;