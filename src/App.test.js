import { act } from 'react';
import { createRoot } from 'react-dom/client';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

let container, root;
beforeEach(() => {
  localStorage.clear();
  window.matchMedia = undefined;
  window.scrollTo = jest.fn();
  global.IS_REACT_ACT_ENVIRONMENT = true;
  container = document.createElement('div');
  document.body.appendChild(container);
  root = createRoot(container);
});
afterEach(() => { act(() => root.unmount()); container.remove(); });
function render(path = '/') { act(() => root.render(<MemoryRouter initialEntries={[path]}><App /></MemoryRouter>)); }
test('public homepage has professional content without sign-in or a link to the secret', () => {
  render();
  expect(container.textContent).toContain('Turning ideas');
  expect(container.textContent).not.toContain('SIGN IN');
  expect(container.querySelector('a[href="/alternate-universe"]')).toBeNull();
  expect(container.querySelector('a[href="/Valeriu-Prodan-CV.pdf"]')).not.toBeNull();
});
test('defaults to dark when system preferences are unavailable', () => {
  render();
  expect(document.documentElement.dataset.theme).toBe('dark');
  expect(localStorage.getItem('vp-theme')).toBeNull();
});
test.each(['light', 'dark'])('follows the system %s preference', mode => {
  window.matchMedia = jest.fn(query => ({ matches: query === `(prefers-color-scheme: ${mode})`, addEventListener: jest.fn(), removeEventListener: jest.fn() }));
  render();
  expect(document.documentElement.dataset.theme).toBe(mode);
});
test('toggle persists an explicit choice and restores it on remount', () => {
  render();
  act(() => container.querySelector('[aria-label="Dark mode"]').click());
  expect(document.documentElement.dataset.theme).toBe('light');
  expect(localStorage.getItem('vp-theme')).toBe('light');
  act(() => root.unmount());
  root = createRoot(container);
  render();
  expect(document.documentElement.dataset.theme).toBe('light');
});
test('system changes update the default without overriding a manual choice', () => {
  let mode = 'light';
  const listeners = new Set();
  window.matchMedia = jest.fn(query => ({ get matches() { return query === `(prefers-color-scheme: ${mode})`; }, addEventListener: (_, callback) => listeners.add(callback), removeEventListener: (_, callback) => listeners.delete(callback) }));
  render();
  mode = 'dark';
  act(() => listeners.forEach(callback => callback()));
  expect(document.documentElement.dataset.theme).toBe('dark');
  act(() => container.querySelector('[aria-label="Dark mode"]').click());
  act(() => listeners.forEach(callback => callback()));
  expect(document.documentElement.dataset.theme).toBe('light');
});
test('hidden route labels generated media, autoplays muted, and prevents indexing', () => {
  render('/alternate-universe');
  const video = container.querySelector('video');
  expect(video.autoplay).toBe(true);
  expect(video.muted).toBe(true);
  expect(container.textContent).toContain('AI-GENERATED');
  expect(document.querySelector('meta[name="robots"]').content).toBe('noindex, nofollow');
});
test('legacy career link still reaches experience', () => {
  render('/profesional');
  expect(container.textContent).toContain('AI/ML Engineer & Software Engineer');
  expect(container.textContent).toContain('48%');
});

test('Vest is the only palette, including for returning visitors', () => {
  localStorage.setItem('vp-palette', 'ocean');
  render();
  expect(document.documentElement.dataset.palette).toBe('vest');
  expect(container.querySelector('[aria-label="Color theme"]')).toBeNull();
  expect(localStorage.getItem('vp-palette')).toBeNull();
  act(() => container.querySelector('[aria-label="Dark mode"]').click());
  expect(document.documentElement.dataset.theme).toBe('light');
  expect(document.documentElement.dataset.palette).toBe('vest');
});

test('beyond work shows six previews and opens the complete gallery', () => {
  render('/beyond-work');
  const previews = container.querySelectorAll('.gallery-grid button');
  expect(previews.length).toBe(6);
  expect(container.querySelector('.gallery-more').textContent).toContain('+50');
  act(() => previews[5].click());
  expect(document.querySelector('.lightbox')).not.toBeNull();
  expect(document.querySelector('.lightbox-counter').textContent).toContain('56');
});
