'use client';
import { plugins } from './plugins';
import { overrideComponents } from './override-componets';
import {
  Plate,
  DndProvider,
  HTML5Backend,
  CommentsPopover,
  Editor,
  FixedToolbar,
  FixedToolbarButtons,
  FloatingToolbar,
  FloatingToolbarButtons,
  createPlateEditor
} from './plugin.imports'


export function PlateEditor() {
  const editor = createPlateEditor({
    id: 'first-test-plate-editor',
    plugins: [...plugins],
    override: {
      components: overrideComponents
    },
    value: [
      {
        id: '1',
        type: 'p',
        children: [{ text: '' }],
      },
    ],
  });

  return (
    <DndProvider backend={HTML5Backend}>
      <Plate editor={editor}>
        <FixedToolbar>
          <FixedToolbarButtons />
        </FixedToolbar>
        
        <Editor />
        
        <FloatingToolbar>
          <FloatingToolbarButtons />
        </FloatingToolbar>
        <CommentsPopover />
      </Plate>
    </DndProvider>
  );
}
