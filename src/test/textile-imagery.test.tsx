import { describe, expect, it } from 'vitest';
import { initialCms, photo, upgradeTextileImagery } from '@/lib/cms';

describe('Textile manufacturing photography', () => {
 it('adds manufacturing images while preserving saved content and custom images', () => {
  const legacy = structuredClone(initialCms);
  legacy.imageryVersion=0;
  legacy.gallery=legacy.gallery.filter(row=>!row.id.startsWith('manufacturing-gallery-'));
  legacy.about.image=photo('applications',9);
  legacy.about.title='Saved about title';
  const first=legacy.capabilities[0];
  if (!first) throw new Error('Missing capability');
  first.image='https://example.com/my-custom-photo.jpg';
  const upgraded=upgradeTextileImagery(legacy);
  expect(upgraded.about.title).toBe('Saved about title');
  expect(upgraded.about.image).toBe(photo('manufacturing',1));
  expect(upgraded.capabilities[0]?.image).toBe(first.image);
  expect(upgraded.gallery.filter(row=>row.id.startsWith('manufacturing-gallery-'))).toHaveLength(4);
 });
 it('does not restore manufacturing images deleted after the update', () => {
  const edited=structuredClone(initialCms);
  edited.gallery=edited.gallery.filter(row=>!row.id.startsWith('manufacturing-gallery-'));
  expect(upgradeTextileImagery(edited).gallery).toEqual(edited.gallery);
 });
});