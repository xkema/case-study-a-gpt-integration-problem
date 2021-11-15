// site main script 
document.addEventListener('DOMContentLoaded', () => {
  // find layout name for current page
  let layoutName = 'unknown';
  const layoutMetaElement = document.querySelector('meta[itemprop=layout]');
  if(layoutMetaElement !== null) {
    layoutName = layoutMetaElement.content;
  }
  console.log(`%cdebug ::`, `color:crimson;font-weight:bold;`, `layout => ${layoutName}`);
});