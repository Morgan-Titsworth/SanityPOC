import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import project from './sanity/schemas/project-schema';
export default defineConfig({
  title: 'sanitypoc',

  projectId: 'n1fslebr',
  dataset: 'asd',


  basePath: '/admin',
  apiVersion: '2023-06-27',

  plugins: [deskTool()],
  schema: {types: [project]}
})