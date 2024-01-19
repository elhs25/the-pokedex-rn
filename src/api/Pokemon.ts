import { API_URL, SPRITES_URL } from "@env"
import axios from "axios"

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

const listCreatures = async ({
    limit = API_DEFAULT_OFFSET,
    offset = API_DEFAULT_OFFSET,
}) => {
    try {
        const response = await axios.get(`${API_URL}/pokemon/?limit=${limit}&offset=${offset}`);
        if (response.status !== 200) {
            return null;
        }
        let invalidCreatureName = "";
        const creatures: BaseCreature[] = response.data.results.map(({ name, url }: { name: string, url: string }) => {
            const extractedId = url.match(/\/\d+/);
            let id = 0;
            // flag to detect if there is an error extracting the ID from URL
            if(!extractedId) {
                invalidCreatureName = name;
            } else {
                id = Number(extractedId[0].replace("/", ""));
            }
            return {
                id,
                name,
                sprite: `${SPRITES_URL}/${id}.png`
            } as BaseCreature;
        });

        if(invalidCreatureName) throw new Error(`Invalid creature ID for ${invalidCreatureName}`);
        
        return creatures;
    } catch (error) {
        console.log("list creatures error", error);
        return null;
    }
}

const getGenerationCreatures = async (identifier: number | string) => {
    try {
        const response = await axios.get(`${API_URL}/pokedex/${identifier}`);
        if (response.status !== 200) {
            return null;
        }

        const creatures: CreaturePokedex = { 
            ...response.data, 
            pokemon_entries: response.data?.pokemon_entries.map((entry: CreaturePokedexEntry) => ({
                ...entry,
                pokemon_species: {
                    ...entry.pokemon_species,
                    sprite: `${SPRITES_URL}/${entry.entry_number}.png`
                }
            })), 
        };
        return creatures;
    } catch (error) {
        console.log("get generation creatures error", error);
        return null;
    }
}

export const API_DEFAULT_OFFSET = 20;

export interface BaseCreature {
    id: number
    name: string
    sprite: string
}

export interface Creature extends BaseCreature {
    height: number;
    weight: number;
    types: CreatureType[]; 
    stats: CreatureStats[];
}

export interface CreatureType {
    slot: number
    ["type"]: {
        name: string
    } 
}

export interface CreatureStats {
    base_stat: number;
    effort: number;
    stat: {
        name: string
    };
}

export interface CreaturePokedex {
    id: number
    name: string
    pokemon_entries: CreaturePokedexEntry[]
    region: {
        name: string
        url: string
    }
}

interface CreaturePokedexEntry {
    entry_number: number
    pokemon_species: {
        name: string
        sprite: string
    }
}

export {
    getCreature,
    listCreatures,
    getGenerationCreatures
}