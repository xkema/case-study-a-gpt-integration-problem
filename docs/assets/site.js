// site main script 
document.addEventListener('DOMContentLoaded', () => {
  // 📌 pin // layout names are the connections between pages and GPT slots defined on a page
  let layoutName = 'unknown';
  const layoutMetaElement = document.querySelector('meta[itemprop=layout]');
  if(layoutMetaElement !== null) {
    layoutName = layoutMetaElement.content;
  }
  console.log(`%cdebug ::`, `color:crimson;font-weight:bold;`, `layout => ${layoutName}`);
});