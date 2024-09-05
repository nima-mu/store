const folders = [
  "assets",
  "components",
  "configs",
  "hook",
  "pages",
  "services",
  "styles",
  "route",
  "constants",
];

const foldersObject = folders.reduce((obj, folder) => {
  obj[folder] = `/src/${folder}`;
  return obj;
}, {});
console.log(foldersObject);

export default foldersObject;
