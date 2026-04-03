const HEADER_OFFSET = 96;

export const scrollToSection = (
  sectionId: string,
  behavior: ScrollBehavior = "smooth"
) => {
  const section = document.getElementById(sectionId);
  if (!section) return false;

  const sectionTop = window.scrollY + section.getBoundingClientRect().top;
  const maxScroll =
    document.documentElement.scrollHeight - window.innerHeight;
  const targetTop = Math.min(
    Math.max(sectionTop - HEADER_OFFSET, 0),
    Math.max(maxScroll, 0)
  );

  window.scrollTo({ top: targetTop, behavior });
  return true;
};
