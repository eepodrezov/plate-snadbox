import {
    withProps,
    createPlateEditor,
    Plate,
    ParagraphPlugin,
    PlateLeaf,
    BlockquotePlugin,
    CodeBlockPlugin,
    CodeLinePlugin,
    CodeSyntaxPlugin,
    HeadingPlugin,
    HorizontalRulePlugin,
    LinkPlugin,
    ImagePlugin,
    MediaEmbedPlugin,
    ExcalidrawPlugin,
    TogglePlugin,
    ColumnPlugin,
    ColumnItemPlugin,
    CaptionPlugin,
    MentionPlugin,
    MentionInputPlugin,
    TablePlugin,
    TableRowPlugin,
    TableCellPlugin,
    TableCellHeaderPlugin,
    TodoListPlugin,
    DatePlugin,
    BoldPlugin,
    ItalicPlugin,
    UnderlinePlugin,
    StrikethroughPlugin,
    CodePlugin,
    SubscriptPlugin,
    SuperscriptPlugin,
    HighlightPlugin,
    KbdPlugin,
    IndentPlugin,
    IndentListPlugin,
    AutoformatPlugin,
    BlockSelectionPlugin,
    DndPlugin,
    EmojiPlugin,
    ExitBreakPlugin,
    SoftBreakPlugin,
    NodeIdPlugin,
    ResetNodePlugin,
    DeletePlugin,
    TabbablePlugin,
    TrailingBlockPlugin,
    CommentsPlugin,
    DocxPlugin,
    CsvPlugin,
    MarkdownPlugin,
    JuicePlugin,
    HEADING_KEYS,
    DndProvider,
    HTML5Backend,
    BlockquoteElement,
    CodeBlockElement,
    CodeLineElement,
    CodeSyntaxLeaf,
    ExcalidrawElement,
    HrElement,
    ImageElement,
    LinkElement,
    LinkFloatingToolbar,
    ToggleElement,
    ColumnGroupElement,
    ColumnElement,
    HeadingElement,
    MediaEmbedElement,
    MentionElement,
    MentionInputElement,
    ParagraphElement,
    TableElement,
    TableRowElement,
    TableCellElement,
    TableCellHeaderElement,
    TodoListElement,
    DateElement,
    CodeLeaf,
    CommentLeaf,
    CommentsPopover,
    HighlightLeaf,
    KbdLeaf,
    Editor,
    FixedToolbar,
    FixedToolbarButtons,
    FloatingToolbar,
    FloatingToolbarButtons,
    withPlaceholders,
    withDraggable,
    EmojiInputElement
  } from './plugin.imports'

  export const plugins = [
    BlockquotePlugin,
    CodeBlockPlugin,
    ParagraphPlugin,
    HeadingPlugin,
    HorizontalRulePlugin,
    ImagePlugin,
    ExcalidrawPlugin,
    TogglePlugin,
    ColumnPlugin,
    MediaEmbedPlugin,
    CaptionPlugin.configure({
      options: { plugins: [ImagePlugin, MediaEmbedPlugin] },
    }),
    MentionPlugin,
    TablePlugin,
    TodoListPlugin,
    DatePlugin,
    BoldPlugin,
    ItalicPlugin,
    UnderlinePlugin,
    StrikethroughPlugin,
    CodePlugin,
    SubscriptPlugin,
    SuperscriptPlugin,
    HighlightPlugin,
    KbdPlugin,
    IndentPlugin.configure({
      inject: { targetPlugins: ['p', 'h1', 'h2', 'h3'] },
    }),
    IndentListPlugin.configure({
      inject: { targetPlugins: ['p', 'h1', 'h2', 'h3'] },
    }),
    AutoformatPlugin.configure({
      options: {
        enableUndoOnDelete: true,
        rules: [
          // Usage: https://platejs.org/docs/autoformat
        ],
      },
    }),
    BlockSelectionPlugin,
    DndPlugin.configure({
        options: { enableScroller: true },
    }),
    EmojiPlugin,
    ExitBreakPlugin.configure({
      options: {
        rules: [
          {
            hotkey: 'mod+enter',
          },
          {
            before: true,
            hotkey: 'mod+shift+enter',
          },
          {
            hotkey: 'enter',
            level: 1,
            query: {
              allow: ['h1', 'h2', 'h3'],
              end: true,
              start: true,
            },
            relative: true,
          },
        ],
      },
    }),
    NodeIdPlugin,
    ResetNodePlugin.configure({
      options: {
        rules: [
          // Usage: https://platejs.org/docs/reset-node
        ],
      },
    }),
    DeletePlugin,
    SoftBreakPlugin.configure({
      options: {
        rules: [
          { hotkey: 'shift+enter' },
          {
            hotkey: 'enter',
            query: {
              allow: ['code_block', 'blockquote', 'td', 'th'],
            },
          },
        ],
      },
    }),
    TabbablePlugin,
    TrailingBlockPlugin.configure({
      options: { type: 'p' },
    }),
    CommentsPlugin,
    DocxPlugin,
    CsvPlugin,
    MarkdownPlugin,
    JuicePlugin,
  ]