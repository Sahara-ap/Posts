interface IElement {
  div: HTMLDivElement | null;
  title: HTMLHeadingElement | null;
  textarea: HTMLTextAreaElement | null;
  input: HTMLInputElement | null;
}

export const editPost = (elementMap: IElement): null => {
  const { div, title, textarea, input } = elementMap;
  if (div && textarea && input && title) {
    div.style.display = 'none';
    title.style.display = 'none';
    textarea.classList.remove('visually-hidden');
    input.classList.remove('visually-hidden');
    textarea.focus();
  }
  return null;
};

export const savePost = (elementMap: IElement): null => {
  const { div, title, textarea, input } = elementMap;
  if (div && textarea && input && title) {
    div.style.display = 'block';
    title.style.display = 'block';
    textarea.classList.add('visually-hidden');
    input.classList.add('visually-hidden');
  }
  return null;
};
