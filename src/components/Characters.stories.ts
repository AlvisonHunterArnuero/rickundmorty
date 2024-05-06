import { Meta, StoryObj } from '@storybook/react';
import CharactersTable from '../components/CharactersTable';

const meta: Meta<typeof CharactersTable> = {
    title: 'HomePage/Characters',
    component: CharactersTable,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
};

export default meta;
type CharactersTableStory = StoryObj<typeof CharactersTable>;


export const DefaultView: CharactersTableStory = {
    args: {
        characters: [
            {
                id: '1',
                image: '',
                name: 'Rick Martin',
                gender: 'Male',
                species: 'Human',
                status: "Alive",
                created: ""
            },
        ],
    },
};
