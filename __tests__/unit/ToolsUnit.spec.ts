export {}

import { ToolsUnitFunctions } from '../../src/app/unit/ToolsUnitFunctions'

const toolsUnitFunctions = new ToolsUnitFunctions()
const tools = {
  count: 4,
  rows: [
    {
      id: 9,
      title: '2vue.js2',
      slug: '2vue.js2',
      createdAt: '2021-05-04T18:40:10.000Z',
      updatedAt: '2021-05-04T18:40:10.000Z',
      TagTool: [
        {
          id: 5,
          title: 'carbonita3.0',
          link: 'https://carbon.now.sh/',
          description: 'description',
          createdAt: '2021-05-04T18:40:00.000Z',
          updatedAt: '2021-05-04T18:40:00.000Z',
          tools_tags: {
            createdAt: '2021-05-04T18:40:10.000Z',
            updatedAt: '2021-05-04T18:40:10.000Z',
            tag_id: 9,
            tool_id: 5,
          },
        },
      ],
    },
    {
      id: 4,
      title: 'vue.js',
      slug: 'vue.js',
      createdAt: '2021-05-04T17:49:28.000Z',
      updatedAt: '2021-05-04T17:49:28.000Z',
      TagTool: [
        {
          id: 3,
          title: 'carbonita',
          link: 'https://carbon.now.sh/',
          description: 'description',
          createdAt: '2021-05-04T17:49:28.000Z',
          updatedAt: '2021-05-04T17:49:28.000Z',
          tools_tags: {
            createdAt: '2021-05-04T17:52:45.000Z',
            updatedAt: '2021-05-04T17:52:45.000Z',
            tag_id: 4,
            tool_id: 3,
          },
        },
        {
          id: 4,
          title: 'carbonita2.0',
          link: 'https://carbon.now.sh/',
          description: 'description',
          createdAt: '2021-05-04T18:39:54.000Z',
          updatedAt: '2021-05-04T18:39:54.000Z',
          tools_tags: {
            createdAt: '2021-05-04T18:39:54.000Z',
            updatedAt: '2021-05-04T18:39:54.000Z',
            tag_id: 4,
            tool_id: 4,
          },
        },
        {
          id: 5,
          title: 'carbonita3.0',
          link: 'https://carbon.now.sh/',
          description: 'description',
          createdAt: '2021-05-04T18:40:00.000Z',
          updatedAt: '2021-05-04T18:40:00.000Z',
          tools_tags: {
            createdAt: '2021-05-04T18:40:00.000Z',
            updatedAt: '2021-05-04T18:40:00.000Z',
            tag_id: 4,
            tool_id: 5,
          },
        },
      ],
    },
  ],
}
describe('ToolsUnitSession', () => {
  it('should answer 200 in the get request for this route', async () => {
    const result = await toolsUnitFunctions.reconfigToolsInGetWithTags(tools)

    expect(result).toStrictEqual([
      {
        id: 5,
        title: 'carbonita3.0',
        link: 'https://carbon.now.sh/',
        description: 'description',
        createdAt: '2021-05-04T18:40:00.000Z',
        updatedAt: '2021-05-04T18:40:00.000Z',
      },
      {
        id: 3,
        title: 'carbonita',
        link: 'https://carbon.now.sh/',
        description: 'description',
        createdAt: '2021-05-04T17:49:28.000Z',
        updatedAt: '2021-05-04T17:49:28.000Z',
      },
      {
        id: 4,
        title: 'carbonita2.0',
        link: 'https://carbon.now.sh/',
        description: 'description',
        createdAt: '2021-05-04T18:39:54.000Z',
        updatedAt: '2021-05-04T18:39:54.000Z',
      },
    ])
  })
})
