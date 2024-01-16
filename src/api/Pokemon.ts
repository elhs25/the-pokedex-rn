import { API_URL } from "@env"
import axios from "axios"

interface Creature {
    id: number;
    name: string;
    sprite: string;
    height: number;
    weight: number;
    type: string | CreatureType[]; 
    stats: CreatureStats[];
}

interface CreatureType {
    name: string;
}

interface CreatureStats {
    base_stat: number;
    effort: number;
    stat: CreatureType;
}

const getCreature = async (identifier: number | string) => {
    try {
        const response = await axios.get(`${API_URL}/pokemon/${identifier}`);
        if (response.status !== 200) {
            return null;
        }

        const creature: Creature = response.data;
        return creature;
    } catch (error) {
        console.log("get creature error", error);
        return null;
    }
}

export {
    getCreature
}