import { type SchemaTypeDefinition } from 'sanity'
import page from './document/page'
import text from './objects/text'
import imageBlock from './objects/imageBlock'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [page, text, imageBlock],
}
