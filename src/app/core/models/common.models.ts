export type EntityId = string;

export interface BaseEntity {
  id: EntityId;
  createdAt: string;
  updatedAt: string;
}

export type StatusVariant = 'success' | 'warning' | 'danger' | 'info' | 'neutral';

export interface SelectOption<T extends string = string> {
  value: T;
  label: string;
}

export interface CalendarEvent {
  id: EntityId;
  title: string;
  subtitle: string;
  start: string;
  end: string;
  status: string;
}

export interface GlobalSearchResult {
  id: string;
  label: string;
  type: string;
  route: string;
  meta?: string;
}
