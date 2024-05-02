import { Meta, StoryObj } from '@storybook/react';
import Characters from './Characters';

const meta = {
    title: 'Example/Characters',
    component: Characters,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    args: {
        image: "string",
        id: "string",
        name: "string",
        gender: "string",
        species: "string",
        status: "string",
        created: "string",
    },
} satisfies Meta<typeof Characters>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CharactersStory: Story = {
    args: {
        image: "string",
        id: "string",
        name: "string",
        gender: "string",
        species: "string",
        status: "string",
        created: "string",
    },
};