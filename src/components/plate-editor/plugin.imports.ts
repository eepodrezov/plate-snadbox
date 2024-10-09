import { withProps } from '@udecode/cn';
import { createPlateEditor, Plate, ParagraphPlugin, PlateLeaf } from '@udecode/plate-common/react';
import { BlockquotePlugin } from '@udecode/plate-block-quote/react';
import { CodeBlockPlugin, CodeLinePlugin, CodeSyntaxPlugin } from '@udecode/plate-code-block/react';
import { HeadingPlugin } from '@udecode/plate-heading/react';
import { HorizontalRulePlugin } from '@udecode/plate-horizontal-rule/react';
import { LinkPlugin } from '@udecode/plate-link/react';
import { ImagePlugin, MediaEmbedPlugin } from '@udecode/plate-media/react';
import { ExcalidrawPlugin } from '@udecode/plate-excalidraw/react';
import { TogglePlugin } from '@udecode/plate-toggle/react';
import { ColumnPlugin, ColumnItemPlugin } from '@udecode/plate-layout/react';
import { CaptionPlugin } from '@udecode/plate-caption/react';
import { MentionPlugin, MentionInputPlugin } from '@udecode/plate-mention/react';
import { TablePlugin, TableRowPlugin, TableCellPlugin, TableCellHeaderPlugin } from '@udecode/plate-table/react';
import { TodoListPlugin } from '@udecode/plate-list/react';
import { DatePlugin } from '@udecode/plate-date/react';
import { BoldPlugin, ItalicPlugin, UnderlinePlugin, StrikethroughPlugin, CodePlugin, SubscriptPlugin, SuperscriptPlugin } from '@udecode/plate-basic-marks/react';
import { HighlightPlugin } from '@udecode/plate-highlight/react';
import { KbdPlugin } from '@udecode/plate-kbd/react';
import { IndentPlugin } from '@udecode/plate-indent/react';
import { IndentListPlugin } from '@udecode/plate-indent-list/react';
import { AutoformatPlugin } from '@udecode/plate-autoformat/react';
import { BlockSelectionPlugin } from '@udecode/plate-selection/react';
import { DndPlugin } from '@udecode/plate-dnd';
import { EmojiPlugin } from '@udecode/plate-emoji/react';
import { ExitBreakPlugin, SoftBreakPlugin } from '@udecode/plate-break/react';
import { NodeIdPlugin } from '@udecode/plate-node-id';
import { ResetNodePlugin } from '@udecode/plate-reset-node/react';
import { DeletePlugin } from '@udecode/plate-select';
import { TabbablePlugin } from '@udecode/plate-tabbable/react';
import { TrailingBlockPlugin } from '@udecode/plate-trailing-block';
import { CommentsPlugin } from '@udecode/plate-comments/react';
import { DocxPlugin } from '@udecode/plate-docx';
import { CsvPlugin } from '@udecode/plate-csv';
import { MarkdownPlugin } from '@udecode/plate-markdown';
import { JuicePlugin } from '@udecode/plate-juice';
import { HEADING_KEYS } from '@udecode/plate-heading';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { BlockquoteElement } from '@/components/plate-ui/blockquote-element';
import { CodeBlockElement } from '../plate-ui/code-block-element';
import { CodeLineElement } from '../plate-ui/code-line-element';
import { CodeSyntaxLeaf } from '../plate-ui/code-syntax-leaf';
import { ExcalidrawElement } from '@/components/plate-ui/excalidraw-element';
import { HrElement } from '@/components/plate-ui/hr-element';
import { ImageElement } from '@/components/plate-ui/image-element';
import { LinkElement } from '@/components/plate-ui/link-element';
import { LinkFloatingToolbar } from '@/components/plate-ui/link-floating-toolbar';
import { ToggleElement } from '@/components/plate-ui/toggle-element';
import { ColumnGroupElement } from '../plate-ui/column-group-element';
import { ColumnElement } from '../plate-ui/column-element';
import { HeadingElement } from '@/components/plate-ui/heading-element';
import { MediaEmbedElement } from '@/components/plate-ui/media-embed-element';
import { MentionElement } from '@/components/plate-ui/mention-element';
import { MentionInputElement } from '@/components/plate-ui/mention-input-element';
import { ParagraphElement } from '@/components/plate-ui/paragraph-element';
import { TableElement } from '@/components/plate-ui/table-element';
import { TableRowElement } from '@/components/plate-ui/table-row-element';
import { TableCellElement, TableCellHeaderElement } from '@/components/plate-ui/table-cell-element';
import { TodoListElement } from '@/components/plate-ui/todo-list-element';
import { DateElement } from '@/components/plate-ui/date-element';
import { CodeLeaf } from '../plate-ui/code-leaf';
import { CommentLeaf } from '@/components/plate-ui/comment-leaf';
import { CommentsPopover } from '@/components/plate-ui/comments-popover';
import { HighlightLeaf } from '@/components/plate-ui/highlight-leaf';
import { KbdLeaf } from '@/components/plate-ui/kbd-leaf';
import { Editor } from '@/components/plate-ui/editor';
import { FixedToolbar } from '@/components/plate-ui/fixed-toolbar';
import { FixedToolbarButtons } from '@/components/plate-ui/fixed-toolbar-buttons';
import { FloatingToolbar } from '@/components/plate-ui/floating-toolbar';
import { FloatingToolbarButtons } from '@/components/plate-ui/floating-toolbar-buttons';
import { withPlaceholders } from '@/components/plate-ui/placeholder';
import { withDraggable } from '../plate-ui/with-draggables';
import { EmojiInputElement } from '@/components/plate-ui/emoji-input-element';
import { withDraggables } from '../plate-ui/with-draggables'

export {
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
    EmojiInputElement,
    withDraggables
  };