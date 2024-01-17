import { API_URL } from "@env"
import axios from "axios"

export interface Creature {
    id: number;
    name: string;
    sprite: string;
    height: number;
    weight: number;
    types: CreatureType[]; 
    stats: CreatureStats[];
}

export interface CreatureType {
    slot: number
    ["type"]: {
        ["name"]: string
    } 
}

interface CreatureBase {
    name: string;
}

interface CreatureStats {
    base_stat: number;
    effort: number;
    stat: CreatureBase;
}

const getCreature = async (identifier: number | string) => {
    try {
        const response = await axios.get(`${API_URL}/pokemon/${identifier}`);
        if (response.status !== 200) {
            return null;
        }

        const creature: Creature = { 
            ...response.data, 
            sprite: response.data?.sprites.front_default, 
        };
        return creature;
    } catch (error) {
        console.log("get creature error", error);
        return null;
    }
}

export {
    getCreature
}