export interface CodexSection {
    id: string;
    title: string;
    subtitle?: string;
    content: string;
    icon?: string;
    collapsible?: boolean;
    expanded?: boolean;
}