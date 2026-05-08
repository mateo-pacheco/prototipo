import { computed, signal } from '@angular/core';

export interface EntityWithId {
  id: string;
}

export function createMemoryStore<T extends EntityWithId>(seed: T[]) {
  const items = signal<T[]>(seed);

  const list = computed(() => items());

  function setAll(next: T[]) {
    items.set([...next]);
  }

  function add(entity: T) {
    items.update((current) => [entity, ...current]);
  }

  function update(id: string, patch: Partial<T>) {
    items.update((current) => current.map((item) => (item.id === id ? { ...item, ...patch } : item)));
  }

  function remove(id: string) {
    items.update((current) => current.filter((item) => item.id !== id));
  }

  function upsert(entity: T) {
    const exists = items().some((item) => item.id === entity.id);
    if (exists) {
      update(entity.id, entity);
    } else {
      add(entity);
    }
  }

  return { items, list, setAll, add, update, remove, upsert };
}
