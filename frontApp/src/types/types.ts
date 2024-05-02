export type NavLinkType = {
  label: string;
  to: string;
  hasSteaker?: boolean;
};

export type NavLinksType = NavLinkType[];

export type MessageType = {
  question: string;
  response: string;
};

export type MessagesType = MessageType[];
