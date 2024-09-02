
import React, { ComponentProps } from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ImageBlock } from './ImageBlock'

export default {
  title: 'Modules/ImageBlock',
  component: ImageBlock,
} as ComponentMeta<typeof ImageBlock>

const Template: ComponentStory<typeof ImageBlock> = (
  args: ComponentProps<typeof ImageBlock>
) => <ImageBlock {...args} />

export const AllOptions = Template.bind({})
