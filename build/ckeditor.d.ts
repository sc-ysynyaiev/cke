/**
 * @license Copyright (c) 2014-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic';
import { Alignment } from '@ckeditor/ckeditor5-alignment';
import { Bold, Italic, Strikethrough, Underline } from '@ckeditor/ckeditor5-basic-styles';
import { BlockQuote } from '@ckeditor/ckeditor5-block-quote';
import { CloudServices } from '@ckeditor/ckeditor5-cloud-services';
import { Plugin, type EditorConfig } from '@ckeditor/ckeditor5-core';
import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { FontSize } from '@ckeditor/ckeditor5-font';
import { Heading } from '@ckeditor/ckeditor5-heading';
import { AutoImage, Image, ImageCaption, ImageResize, ImageStyle, ImageToolbar, ImageUpload } from '@ckeditor/ckeditor5-image';
import { Indent } from '@ckeditor/ckeditor5-indent';
import { AutoLink, Link } from '@ckeditor/ckeditor5-link';
import { List } from '@ckeditor/ckeditor5-list';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import { PasteFromOffice } from '@ckeditor/ckeditor5-paste-from-office';
import { RevisionHistory } from '@ckeditor/ckeditor5-revision-history';
import { Table, TableCaption, TableCellProperties, TableColumnResize, TableToolbar } from '@ckeditor/ckeditor5-table';
import { TextTransformation } from '@ckeditor/ckeditor5-typing';
import { Undo } from '@ckeditor/ckeditor5-undo';
import { WordCount } from '@ckeditor/ckeditor5-word-count';
export declare class RevisionHistoryAdapter extends Plugin {
    static get requires(): Array<string>;
    init(): void;
}
declare class Editor extends ClassicEditor {
    static builtinPlugins: (typeof RevisionHistoryAdapter | typeof Alignment | typeof TextTransformation | typeof Bold | typeof Italic | typeof Strikethrough | typeof Underline | typeof BlockQuote | typeof CloudServices | typeof Undo | typeof Essentials | typeof FontSize | typeof Paragraph | typeof Heading | typeof AutoImage | typeof Image | typeof ImageCaption | typeof ImageResize | typeof ImageStyle | typeof ImageToolbar | typeof ImageUpload | typeof Indent | typeof AutoLink | typeof Link | typeof List | typeof PasteFromOffice | typeof Table | typeof TableCaption | typeof TableCellProperties | typeof TableColumnResize | typeof TableToolbar | typeof WordCount | typeof RevisionHistory)[];
    static defaultConfig: EditorConfig;
}
export default Editor;
